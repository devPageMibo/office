import styled from "styled-components";

export const ModalContent = styled ('div')`
  .create-assets-modal-fields {
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 20px;

    & > div {
      width: calc(50% - 10px);
      display: flex;
      border-radius: 10px;
      border: 1px solid rgba(113, 113, 113, 0.20);
      background: #FFF;
      box-shadow: 0px 0px 4px 0px rgba(41, 11, 103, 0.20);
      padding: 10px;

      input {
        width: 100%;
      }
    }
  }
`;