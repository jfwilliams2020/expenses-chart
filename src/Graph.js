import styled from "styled-components"
import * as React from "react"

const StyledGraph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 10px 0;
    min-height: 150px;
`

export const Graph = () => {
    const amounts = [ 50, 25, 30, 70, 40, 50, 120 ]
    const daysOfWeek = [ "mon", "tue", "wed", "thu", "fri", "sat", "sun" ]

    let max = 0

    amounts.forEach( amount => {
        if( amount > max ) {
            max = amount
        }
    })

    return ( 
        <StyledGraph>
            {amounts.map( ( amount, index ) => (
                <Bar 
                    key={index} 
                    amount={amount}
                    day={daysOfWeek[index]}
                    isMax={amount === max}
                />
            ) )}
        </StyledGraph>
    )
}

const StyledBar = styled.div`
    text-align: center;
    color: hsl(28, 10%, 53%);
    margin-top: auto;
`

const StyledAmountDisplay = styled.div`
    background-color: hsl(25, 47%, 15%);
    color: hsl(33, 100%, 98%);
    font-weight: 700;
    border-radius: 5px;
    margin-bottom: 5px;
    visibility: ${props => props.showAmount ? "visible" : "hidden"};
`

const StyledBarDisplay = styled.div`
    background-color: ${props => props.isMax ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"};
    margin: 0 5px;
    height: ${props => props.amount}px;
    display: inline-block;
    width: 40px;
    border-radius: 5px;

    &:hover {
        opacity: 0.8;
    }
`

const Bar = ( props ) => {
    const [ showAmount, setShowAmount ] = React.useState( false )

    return (
        <StyledBar>
            <StyledAmountDisplay showAmount={showAmount}>
                ${props.amount}
            </StyledAmountDisplay>

            <StyledBarDisplay 
                amount={props.amount} 
                onMouseEnter={() => setShowAmount( true )}
                onMouseLeave={() => setShowAmount( false )}
                isMax={props.isMax}
            />

            {props.day}
        </StyledBar>
    )
}