import styled from 'styled-components'
import { Button} from './primary/Button'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import HandleModalToggle from '../utils/handleModalToggle'
import { toggleFrequencyModal } from '../reducers/frequencySlice'
import { toggleLowerLimitModal } from '../reducers/lowerLimitSlice'
import { toggleUpperLimitModal } from '../reducers/upperLimitSlice'



export const StyleSubHeader = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #1C2230;
    height: 8vh;
 
`

const handleUpdateFreq = (e) => {
    console.log("hello");
}


  

export const SubHeader = () => {
            const frequency = useSelector((state) => state.frequency.value)
            const dispatch = useDispatch()

            return (
                <StyleSubHeader>
                    <Button onClick={()=>{dispatch(toggleFrequencyModal())}} buttonText="Update Frequency" />
                    <Button onClick={()=>{dispatch(toggleLowerLimitModal())}} buttonText="Set Lower Limit" />               
                    <Button onClick={()=>{dispatch(toggleUpperLimitModal())}} buttonText="Set Upper Limit" />                       
                </StyleSubHeader>  
            )
}