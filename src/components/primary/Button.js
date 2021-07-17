import styled from 'styled-components';

export const StyledButton = 
  styled.button`
  background:none;
  border: 1px solid #2a7d8c;
  color:white;
  border-radius: 4px;
  transition-duration: 0.3s;
  font-family: Raleway;
  width: max-content;

  &:hover {
    border: 1px solid #3db4c9; /* Green */
  }
`

export const ButtonLabel = styled.div`
  font-weight: bold;
  padding:5px;
`


export const Button = (props) => {

  const { buttonText, onClick , type } = props;

  return (
    <StyledButton onClick={onClick} type={type}>
      <ButtonLabel>
        {buttonText}
      </ButtonLabel>
    </StyledButton>
  )
}





