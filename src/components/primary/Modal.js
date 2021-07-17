import { useDispatch } from 'react-redux'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import React, {useState} from 'react'
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 600px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #1C2230;
  color: white;

  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;
  width:100%;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  h2 {
      padding-top: 15px;
      padding-bottom: 10px;
      font-weight:lighter;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const SubmitModalButton = styled.button`
  cursor: pointer;
  background-color: #3db4c9;
  border: 1px solid white;
  border-radius: 4px;
  transition-duration: 0.3s;
  font-family: Raleway;
  font-weight: bolder;
  width: max-content;
  
  &:hover {
    border: 1px solid #3db4c9; /* Green */
    background-color: #3db4c9;
  }
`


const InputText = styled.input`
    width:60%;
    border:none;
    border-bottom: 2px solid #2a7d8c;
    border-radius: 4px;
    background: #1C2230;
    color: white;
    ::placeholder {
        color: white;
    }
    margin-top: 30px;
    font-family: "Raleway";
    font-weight: bold;
    font-size: 18.72px;
    &:focus {
        border-bottom: 2px solid #3db4c9;
        outline: none;
        ::placeholder {
            color: transparent;
        }
    }
`

const ButtonDiv = styled.div`
        padding-top:20px;
`



export const Modal = (props) => {
    
    const {
        isModalOpen,
        modalHeading,
        inputPlaceHolder,
        closeActionToDispatch,
        submitActionToDispatch
    } = props
    
    const dispatch = useDispatch()


    const animation = useSpring({
        config:{
            duration: 100
        },
        opacity: isModalOpen? 1: 0,
        transform: isModalOpen ? `translateY(0%)` : `translateY(-100%)`
    })

    const [textVal, setText] = useState('');

    const handleSubmit = () => {
        if (textVal) 
        {   
            dispatch(submitActionToDispatch(textVal))
        }
    }

    return (
        <>
        {isModalOpen ?   
           (
                <Background>
                    <animated.div style={animation}>
                    <ModalWrapper>
                    <ModalContent>
                        <h2>{modalHeading}</h2>
                        <InputText 
                            type="text"
                            placeholder={inputPlaceHolder}
                            onChange={(e)=> {
                                setText(e.target.value)
                                }}
                        />
                        <ButtonDiv>
                            <SubmitModalButton onClick={handleSubmit}>
                                Submit
                            </SubmitModalButton>
                        </ButtonDiv>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => {dispatch(closeActionToDispatch())}} />
                    </ModalWrapper>
                    </animated.div>
                </Background>
           ):null}
        </>
    );
}

export default Modal