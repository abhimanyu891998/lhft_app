import React from 'react'
import Modal from './primary/Modal'
import { useSelector } from 'react-redux'
import { toggleLowerLimitModal, changeLowerLimit } from '../reducers/lowerLimitSlice'


const LowerLimitModal = () => {
    
    const isLLModalOpen = useSelector((state)=> state.lowerLimit.isModalOpen)
    const LLModalHeading = "Update Lower Limit"
    const LLInputPlaceholder = "Enter Lower Limit"

    return (
        <Modal isModalOpen={isLLModalOpen} 
            modalHeading={LLModalHeading} 
            inputPlaceHolder={LLInputPlaceholder} 
            closeActionToDispatch={toggleLowerLimitModal} 
            submitActionToDispatch={changeLowerLimit} 
        />
    )

}


export default LowerLimitModal