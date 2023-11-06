import styled from "styled-components";


export const LoginSection = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  //height: 838px;
  position: relative;
  font-family: 'Roboto', sans-serif;
  //overflow: hidden;


  @media only screen and (max-width: 991px) {
    height: auto;
  }

  .content {
    max-width: 1440px;
    margin: 0 auto;
    padding: 100px 60px 0;
    
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }

    .title {
      color: #1A181E;
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin: 0 0 45px;
    }

    .image {
      margin-top: -213px;
      display: flex;
      justify-content: flex-end;
      //margin-right: 100px;

      img {
        width: 100%;
        height: auto;
        max-width: 1047px;
      }
    }

 
  }

  @media only screen and (max-width: 1440px) {
    .content {
      .image {
        margin-right: 0;
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .content {
      display: flex;
      flex-direction: column;
      padding: 96px 15px 58px 15px;

      .title {
        text-align: center;
        font-size: 20px;
        line-height: 24px;
        max-width: none;
      }

      .image {
        order: 3;
        margin: 0;

        img {
          max-width: 330px;
        }
      }


    }
  }

`;