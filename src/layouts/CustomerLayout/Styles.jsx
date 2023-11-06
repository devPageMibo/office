import styled from "styled-components";
import Bg from './../../assets/images/div.png';

export const CustomerLayoutContent = styled.div`
  background-image: url(${Bg});
  justify-content: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page_content {
    display: flex;
    gap: 16px;
    padding: 0 20px;
    width: 100%;
    max-width: 1300px;
  }
`;