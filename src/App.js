import { Balance } from "./Balance"
import styled from "styled-components"
import { Spending } from "./Spending";

const StyledApp = styled.div`
  max-width: 500px;
  margin: auto;
  margin-top: 100px;
`

const App = () => {
  return (
    <StyledApp>
      <Balance balance={50} />
      <Spending monthTotal={400.92} prevMonthTotal={490.34} />
    </StyledApp>
  );
}

export default App;
