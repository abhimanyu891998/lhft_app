import React from 'react'
import { Button } from 'react-bootstrap'

const SubscribeButton = (props) => (
  <div>
    <Button variant="success" onClick={props.onClick}>Subscribe to Updates</Button>
  </div>
)

export default SubscribeButton