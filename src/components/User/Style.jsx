import styled from "styled-components";

export const UserContent = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  

  h5 {
    color: #FFF;
    text-align: right;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .user_avatar {
    background: #FE7776;
    color: #FFF;
    text-align: right;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 58px;
    margin-right: 28px;
    text-transform: uppercase;
    padding-bottom: 2px;
  }
  
  .dots {
    cursor: pointer;
  }
  
  .get_out {
    color: #1A1A1A;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid rgba(113, 113, 113, 0.20);
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
    padding: 10px;
    position: absolute;
    bottom: -22px;
    right: 10px;
    cursor: pointer;
  }
`;