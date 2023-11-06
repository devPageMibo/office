import styled from "styled-components";

export const RecoveryPortfolioContent = styled.div`
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap:  30px 10px;
    justify-content: center;

    h3 {
      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    
    li {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(101, 101, 101, 0.20);
      gap: 5px;
      display: flex;
      align-items: center;
      padding: 10px;
      height: 100px;
      min-width: 260px;
      width: calc(35% - 10px);
      max-width: 320px;

      color: #242424;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      
    }
  }
`;