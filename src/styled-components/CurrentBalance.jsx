import styled from "styled-components";

const CurrentBalanceStyled = styled.div`
    padding: 18px;
    background-color:  hsl(10, 79%, 65%);
    border-radius: 12px;
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content : space-between;
    color: white;
    margin-bottom: 20px;
    .logoWrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h4{
        font-weight: 400;
        font-size: .8rem;
    }
    p{
        font-size: 1.8rem;
    }
`
export default CurrentBalanceStyled