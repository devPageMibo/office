import styled from "styled-components";

export const PersonalInfoContent = styled.div`
  h1 {
    color: #1C0371;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    //margin: 0 0 50px 0;
  }

  h2 {
    color: #1C0371;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 0 30px 0;
  }

  .case_content {
    display: flex;
    flex-wrap: wrap;

    gap: 20px 50px;

    .case_field {
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
      padding: 10px;
      max-width: 300px;
      display: flex;
      gap: 10px;
      min-width: 260px;
      width: calc(35% - 50px);

      span {
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;