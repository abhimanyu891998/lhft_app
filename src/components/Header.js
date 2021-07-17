import styled from 'styled-components'
import { Button} from './primary/Button'


const StyledHeader = styled.div`
    display: inline;
    font-family: "Raleway";
    background-color: #000000;
    padding:2%;
    height: 2vh;
`;

const HeaderText = styled.h2`
    display:inline;
    color: white;
    font-family: "Raleway";
    font-weight: 300;
    margin-left:200px;
    width:50%;
`;

const ButtonDiv = styled.div`
    display:inline;
    float: right;
`


export const Header = () => {
    return (
             <StyledHeader>
                <HeaderText>
                    High Frequency Trading
                </HeaderText>
                <ButtonDiv>
                    <Button buttonText="Subscribe to Updates" />
                </ButtonDiv>       
            </StyledHeader>
    )
}