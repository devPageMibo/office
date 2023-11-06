import styled from "styled-components";

export const SidebarLeft = styled.div`
  max-width: 220px;
  height: fit-content;
  width: 100%;
  background: #fff;
  margin-top: -100px;

  .header-sidebar {
    position: relative;
    z-index: 20;
  }
  
  .logo {
    margin: 13px 26px 0;
  }
  
  .sidebar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0;
    background: #fff;
    padding: 30px 18px;
    
    li {
      display: flex;
      align-items: center;
      gap: 15px;
      
      a {
        color: #1A1A1A;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .coin-price {
    background: #1A1A1A;
    
    @media only screen and (max-width: 768px) {
      display: none;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        color: #FFF;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        padding: 15px 10px;
        display: flex;
        justify-content: space-between;

        &:nth-child(odd) {
          background: #353535;
        }
        
        &:nth-child(even) {
          background: #1A1A1A;
        }
        
        &:nth-child(1) {
          background: #1A1A1A;
        }
        span {
          width: 50%;
          position: relative;
          
          &:after {
            content: '';
            width: 50px;
            height: 1px;
            position: absolute;
            background: #B9B9B9;
            bottom: -5px;
            left: 0;
          }
        }
      }
    }
  }
`;