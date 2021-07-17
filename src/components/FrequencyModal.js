import React, {useRef, useEffect, useCallback} from 'react'
import Modal from './primary/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFrequencyModal, changeFrequency } from '../reducers/frequencySlice'


const FrequencyModal = () => {
    
    const isFreqModalOpen = useSelector((state)=> state.frequency.isModalOpen)
    const freqModalHeading = "Update Frequency"
    const freqInputPlaceHolder = "Enter Frequency (ms)"

    return (
        <Modal isModalOpen={isFreqModalOpen} 
            modalHeading={freqModalHeading} 
            inputPlaceHolder={freqInputPlaceHolder} 
            closeActionToDispatch={toggleFrequencyModal} 
            submitActionToDispatch={changeFrequency} 
        />
    )

}


export default FrequencyModal