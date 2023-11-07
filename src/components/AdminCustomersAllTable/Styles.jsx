import styled from "styled-components";

export const CustomersAllContent = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }


  th {
    color: #353535;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    padding: 10px;

    &:last-of-type {
      text-align: right;
    }
  }

  tr {
    padding: 15px 0;

    td {
      padding: 10px;

      &:first-of-type {
        display: flex;
        align-items: center;
        gap: 17px;

      }
    }

  }

  td {
    color: #353535;
    //text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 153.846% */

    &:last-of-type {
      text-align: right;
    }
  }

  tr {
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

`;

export const Modal = styled.div`
`;
export const ModalForm = styled.div`
`;