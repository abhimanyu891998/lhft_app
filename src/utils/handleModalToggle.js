import { useDispatch } from 'react-redux'
import { toggleFrequencyModal } from '../reducers/frequencySlice'

const HandleModalToggle = () => {

    const dispatch = useDispatch()

    dispatch(toggleFrequencyModal())

}

export default HandleModalToggle