import { configureStore } from '@reduxjs/toolkit'
import frequencyReducer from './reducers/frequencySlice'
import lowerLimitReducer from './reducers/lowerLimitSlice'
import upperLimitReducer from './reducers/upperLimitSlice'
export default configureStore({
    reducer:{
        frequency: frequencyReducer,
        lowerLimit: lowerLimitReducer,
        upperLimit: upperLimitReducer
    },
})