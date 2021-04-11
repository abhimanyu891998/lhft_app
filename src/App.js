import React, { useState, useEffect } from 'react';
import './App.css';
import SubscribeButton from './components/subscribeButton'
import UnsubscribeButton from './components/unsubscribeButton'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, InputGroup, Button, FormControl} from 'react-bootstrap'
import {Header, Input} from 'semantic-ui-react'
import axios from 'axios';
import CircularBuffer from 'circular-buffer'
import { DataGrid } from '@material-ui/data-grid';


function App() {

  //Global variable for updating row id in the data grid
  var rowId = 0;

  //App states
  const [dataStream, setDataStream] = useState({});
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [eventSource, setEventSource] = useState(null);
  const [updateFrequency, setUpdateFrequency] = useState(300)
  const [circularDataBuffer, setCircularDataBuffer] = useState(new CircularBuffer(500)) //Circular buffer to keep the data always to size of 500
  const [rows, setRows] = useState([
    { id: 1, symbol: 'AAAA', price: 2},
    { id: 2, symbol: 'BBB', price: 3}
  ])
  const [upperLimit, setUpperLimit] = useState(0)
  const [lowerLimit, setLowerLimit] = useState(0)
  const [currentUpperLimit, updateCurrentUpperLimitValue] = useState(0)
  const [currentLowerLimit, updateCurrentLowerLimitValue] = useState(0)

  //Web server path
  const webServerPath = "http://localhost:5000/"

  //columns for data-grid
  const columns = [
    { field: 'symbol', headerName: 'SYMBOL' },
    { field: 'price', headerName: 'PRICE'},
    { field: 'color', headerName: 'COLOR'}

  ];

  
  //Function to update circular buffer with the polled data and add it to the rows
  const handleDataStream = (data) => {
    setDataStream(data)
    //console.log(dataStream)
    for(let i=0; i<50; i++) {
      rowId= (rowId+1)%500
      data[i]['id'] = rowId
      if(data[i].price>upperLimit) {
        data[i]['color'] = 'GREEN'
      }
      else if(data[i].price<lowerLimit) {
        data[i]['color'] = 'RED'
      }

      let newCircularBuffer = circularDataBuffer.enq(data[i])
      setCircularDataBuffer(newCircularBuffer)
      let circularBufferArray = circularDataBuffer.toarray()
      console.log(circularDataBuffer.toarray())
      setRows(circularBufferArray.reverse())
    }
  }


  //Function that connects to server for updates
  const subscribeToUpdates = (e) => {

    e.preventDefault()
    let eventSource = new EventSource(webServerPath + "subscribeElements"); //Used to get server sent events data

    eventSource.onopen = e => {
      console.log(e)
      setIsSubscribed(true)
    }
    
    eventSource.addEventListener('message', (event) => {

    }, false);

    eventSource.addEventListener('online', (event) => {
      //console.log(JSON.parse(event.data))
      handleDataStream(JSON.parse(event.data))

    }, false);

    eventSource.onerror = () => {
      console.log("error")
      eventSource.close();
    }

    setEventSource(eventSource)
    

  }

  //To stop getting data from the server
  const unsubscribeToUpdates = () => {
    eventSource.close();
    setIsSubscribed(false)    
  }

  //To update the frequency at which we recieve updates (Due to app implementation, right now the optimal frequency is 4000 ms, this can be improved with multithreading and further optimisations)
  const changeUpdateFrequency = (e) => {
    let value = e.target.value
    if(value!='') {
      setUpdateFrequency(parseInt(value))
    }

    else {
      setUpdateFrequency(300)     
    }

  }

  //To send the updated frequency to server through a post request
  const sendUpdatedFrequency = (e) => {
    let postData = new FormData()
    postData.append('frequency', updateFrequency)
    let postURL = webServerPath + "updateFrequency"

    axios({
      method: "post",
      url: postURL,
      data: postData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    
  }

  //To cap the upper limit value for green color
  const setUpperLimitValue = (e) => {
      setUpperLimit(currentUpperLimit)

  }

  //To cap the lower limit value for red color
  const setLowerLimitValue = (e) => {
    setLowerLimit(currentLowerLimit)
  }

  const changeUpperLimit = (e) => {
    let value = e.target.value
    if(value!='') {
      updateCurrentUpperLimitValue(parseInt(value))
    }

    else {
      updateCurrentUpperLimitValue(0)     
    }
  }


  const changeLowerLimit = (e) => {
    let value = e.target.value
    if(value!='') {
      updateCurrentLowerLimitValue(parseInt(value))
    }

    else {
      updateCurrentLowerLimitValue(0)     
    }
  }
  


  let subscriptionButton;
  //To toggle between subscribe and unsubscribe buttons
  if(isSubscribed) {
    subscriptionButton = <UnsubscribeButton onClick = {unsubscribeToUpdates} />
  } 
  else {
    subscriptionButton = <SubscribeButton onClick={subscribeToUpdates} />
  }

  return (
    <div className="App">
      <header className="App-header">
      <Container fluid style={{padding: 20}}>
        <Header as='h2' dividing style={{color: 'black'}}>LHFT DASHBOARD</Header>
      </Container>
      <Container fluid style={{paddingTop: 10}}>
      <Row className="justify-content-md-center">
          <Col md="auto">
          {subscriptionButton}
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{paddingTop: 15}}>
          <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="primary" onClick={sendUpdatedFrequency}>
                Update Frequency
              </Button>
            </InputGroup.Prepend>
            <FormControl 
              aria-describedby="basic-addon1" 
              placeholder="Frequency value"
              defaultValue={updateFrequency}
              onChange={changeUpdateFrequency}
            />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="success" onClick={setUpperLimitValue}>Set Upper Limit</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" placeholder="Green cells" onChange={changeUpperLimit}/>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="danger" onClick={setLowerLimitValue}>Set Lower Limit</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" placeholder="Red cells" onChange={changeLowerLimit}/>
            </InputGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{paddingTop: 10}}>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={100} />
      </div>
      </Container>
      </header>
    </div>
  );
}

export default App;
