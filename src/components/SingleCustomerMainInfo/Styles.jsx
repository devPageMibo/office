import styled from "styled-components";

export const MainContent = styled ('div')`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 30px;

  .control {
    display: flex;
    justify-content: space-between;
  }

  .main-info {
    display: flex;
    flex-direction: column;

    &-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 20px 15px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px 20px;

      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        color: #1A1A1A;
        width: calc(50% - 10px);
        padding: 10px;
        display: flex;
        gap: 5px;
      }
    }

    input {
      border: none;
      outline: none;
      color: #1A1A1A;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

`;