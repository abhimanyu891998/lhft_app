import React from 'react'
import Modal from './primary/Modal'
import { useSelector } from 'react-redux'
import { toggleUpperLimitModal, changeUpperLimit } from '../reducers/upperLimitSlice'


const UpperLimitModal = () => {
    
    const isLLModalOpen = useSelector((state)=> state.upperLimit.isModalOpen)
    const LLModalHeading = "Update Upper Limit"
    const LLInputPlaceholder = "Enter Upper Limit"

    return (
        <Modal isModalOpen={isLLModalOpen} 
            modalHeading={LLModalHeading} 
            inputPlaceHolder={LLInputPlaceholder} 
            closeActionToDispatch={toggleUpperLimitModal} 
            submitActionToDispatch={changeUpperLimit} 
        />
    )

}


export default UpperLimitModal