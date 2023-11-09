import styled from "styled-components";

export const CreateCustomerModalContent = styled ('div')`
    .create-customer-modal-fields {
      display: flex;
      flex-wrap: wrap;
      
      & > div {
        width: 50%;
        display: flex;
        flex-direction: column;
      }
    }
`;