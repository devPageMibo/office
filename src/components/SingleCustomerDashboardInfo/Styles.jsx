import styled from "styled-components";

export const DashboardContent = styled ('div')`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
  padding: 30px;

  .control {
    display: flex;
    justify-content: space-between;
  }

  .dashboard-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;
  }

  .dashboard-info {
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

      &.main-graph {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        flex-direction: column;
        gap: 20px;

        .items {
          display: flex;
          gap: 15px;
          border: none;
          box-shadow: none;
          width: 100%;
          padding: 0;
          background: #fff;

          & > div {
            border-radius: 10px;
            border: 1px solid rgba(113, 113, 113, 0.20);
            background: #FFF;
            box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
            color: #1A1A1A;
            width: 105px;
            padding: 10px;
            display: flex;
            gap: 5px;

            input {
              width: 81px;
            }
          }
        }
      }
      
      &.second-graph {
        .items {
          flex-wrap: wrap;
        }
      }

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
  
  .transactions-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .transactions-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;
      
      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        padding: 10px;
        display: flex;
        gap: 5px;
        width: calc(50% - 10px);
      }
    }
  }

  .customers-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        padding: 10px;
        display: flex;
        gap: 5px;
        width: calc(50% - 10px);
      }
    }
  }
  
  .assets-info-content {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
    padding: 30px 15px;
    gap: 40px;
    display: flex;
    flex-direction: column;

    .customers-info-group {
      border-radius: 10px;
      background: #FFF;
      box-shadow: 0px 10px 60px 0px rgba(10, 45, 97, 0.10);
      padding: 30px 15px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 30px;

      & > div {
        border-radius: 10px;
        border: 1px solid rgba(113, 113, 113, 0.20);
        background: #FFF;
        box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
        padding: 10px;
        display: flex;
        gap: 5px;
        width: calc(50% - 10px);
      }
    }
  }
  }
  
  
  
`;