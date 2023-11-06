import styled from "styled-components";

export const DoughnutWrap = styled.div`

  display: flex;
  gap: 28px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;

  }

  @media only screen and (max-width: 991px) {
    gap: 50px;
  }

  .doughnut-labels {
    color: #1A1A1A;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & > div {
      display: flex;
      justify-content: space-between;
      gap: 24px;

      span {
        display: flex;
        align-items: center;
        gap: 5px;

        .doughnut-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;