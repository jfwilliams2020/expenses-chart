import styled from "styled-components"
import { Graph } from "./Graph"

const StyledSpending = styled.div`
    padding: 20px;
    background-color: hsl(33, 100%, 98%);
    border-radius: 15px;
`

const StyledSpendingDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledMonthTotal = styled.div`
    color: hsl(28, 10%, 53%);
`

const StyledTotalText = styled.div`
    font-size: 2em;
    font-weight: 700;
    margin-top: 10px;
    color: hsl(25, 47%, 15%);
`

const StyledDiff = styled.div`
    color: hsl(28, 10%, 53%);
    text-align: right;
    margin-top: auto;
`

const StyledDiffText = styled.div`
    color: hsl(25, 47%, 15%);
    font-weight: 700;
`

export const Spending = ( props ) => {
    let diff = ( props.monthTotal - props.prevMonthTotal ) / props.prevMonthTotal * 100

    return (
        <StyledSpending>
            <h2>Spending - Last 7 days</h2>
            <Graph />
            <hr/>
            <StyledSpendingDisplay>
                <StyledMonthTotal>
                    <span>Total this month</span>
                    <StyledTotalText>
                        ${props.monthTotal}
                    </StyledTotalText>
                </StyledMonthTotal>
                <StyledDiff>
                    <StyledDiffText>
                        {diff > 0 ? "+" : "-"} {Math.abs(diff.toFixed(1))}%
                    </StyledDiffText>
                    <span>from last month</span>
                </StyledDiff>
            </StyledSpendingDisplay>
        </StyledSpending>
    )
}