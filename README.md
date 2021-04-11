# Documentation of LHFT App

Backend - Flask , Frontend - React

![App Screenshot](https://i.ibb.co/v4kqLtP/Screenshot-2021-04-11-at-11-18-11-PM.png)

## Key Technologies and Concepts used

1.) Server Sent Events : Used SSE so that client can listen to data stream for server indefinitely, until the client closes connection, the server pushes data at a fixed frequency using event streams.

2.) Circular Buffer: In order to only show a maximum 500 elements on frontend, I used a circular buffer that acts like a LRU cache and removes least recently used elements from the cache when the size exceeds 500.

3.) React Bootstrap and Material UI datagrid for frontend styling: Basic styling is bootstrap based, and the data-grid is from Material UI. 


## Functionality

1.) Backend generates a random stream of data, each update compising of 50 elements at a fixed interval frequency that can be updated from frontend as well. 

2.) Frontend begins by subscribing to the data stream that triggers the server sent events, meanwhile frontend can also update the frequency at which updates are sent by the server and that is reflected in real time.

3.) Frontend can then unsubscribe to the data-stream whenever it wants.

## Setup and Running

1.) git clone this repo

2.) cd into the backend folder

3.) Activate the virtual env using `venv\Scripts\activate`

4.) Do `pip install flask python-dotenv flask-cors`

5.) Now `cd ..` to project folder, i.e: lhft_app

6.) Install all the yarn packages by running `yarn install`

7.) Now first start the backend server using `yarn start-backend`. Server should come up on port 5000.

8.) Start react app using `yarn start`. App should come up on port 3000.

9.) Set upper and lower limits by typing the values and clicking the respective buttons.

10.) Default update frequency is 3000 ms. Can be updated using the update frequency button.

11.) Subscribe to the data stream by clicking subscribe button.

## Things that can be improved or couldn't implement 

1.) Frequency of updates should be made faster using concurrency. (Right now, the app supports only a minimum of 3000 ms). 

2.) Color of cells doesn't change to green or red at the moment, added a column instead which shows the color name. 

3.) Styling needs to be done better for the app

4.) Need to add more checks while data is being sent to and from the server and improve exception handling.

5.) Better and faster processing of data is needed.
