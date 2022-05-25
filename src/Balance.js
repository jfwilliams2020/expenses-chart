import styled from "styled-components"
import logo from "./images/logo.svg"

const StyledBalance = styled.div`
    background-color: hsl(10, 79%, 65%);
    color: white;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`

const StyledBalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledBalanceText = styled.div`
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 10px;
`

export const Balance = ( props ) => {
    return (
        <StyledBalance>
            <StyledBalanceContainer>
                <span>My balance</span>
                <StyledBalanceText>${props.balance.toFixed(2)}</StyledBalanceText>
            </StyledBalanceContainer>

            <img src={logo} alt="logo" />
        </StyledBalance>
    )
}