import styled from "styled-components";

const SpendingStyled = styled.div`
  padding: 18px;
  background-color: hsl(33, 100%, 98%);
  border-radius: 12px;
  line-height: 32px;
  h3{
    font-size: 22px;
  }
  .bar{
    cursor: pointer;
    :hover{
       fill: hsl(186, 34%, 60%);
    }
  }
  .graphWrapper{
    padding-bottom: 18px;
    border-bottom: 1px solid hsl(24, 4.587155963302735%, 78.62745098039215%);
  }
  .customTooltip{
    background-color: #141414;
    border-radius: 4px;
    padding: 4px 4px;
    color: white;
    font-size: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 14px;
    outline: none;
    border: none;
    p{
        margin: 0;
    }
  }
  .totalThisMonth{
    padding: 18px 0;
    h3{
        font-size: .8rem;
        color: gray;
        font-weight: 400;
    }
  }
`;
export default SpendingStyled;
