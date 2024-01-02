import styled from 'styled-components';
import BottomImage from '../../../static/img/icon/botomsvg.svg';

const ApplicationDetailWrapper = styled.div`
  .main {
    background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
    min-height: 80vh;
  }
`;

const ContainerStyle = styled.div`
  height:100%;
 
.main-containt{
  height:100%;
  width:100%;
}

@media (min-width: 768px) {
    .header{
    padding-top: 11px;
    padding-right: 10px;
    padding-left: 80px;
    padding-right: 80px;
    // height: 10vh;
    width: 100%;
    background:transparent;
    border-bottom: 1px solid #041E5F;
    }
    
    .bottom{
        width: 100%;
        height : 15vh;
        background-size:cover;
        background-image : url(${BottomImage});
       }
    }
    .buttons{
        padding-top :10px
    }
    
    .heding{
        display:flex;
        align-item: center;
        justify-content: center;
    }

    img{
        margin-right : 5px;
    }

    h4{
       margin-top: 3px;
       color:#0036C1
    }

    .goooooo{
        cursor: pointer;
        border:none;
        background-color: transparent;
    }

    .wrapper{
        display: flex;
        justify-content: space-between;
    }

    h1{
       color: #0042A8;
       font-weight: 500;
       font-size : 50px;

    }
}

    @media (max-width: 768px) {
     h1{
        color: #0042A8;
        font-weight: 500;
        font-size : 35px;

      }
        .buttons{
            display : none;
        }
    .heding{
        display:flex;
        
    }
     h4{
        margin : 15px 10px 15px 10px;
        color:#0036C1
    }
    img{
        margin : 15px 10px 15px 10px;
    }
    }

`;

const MainStyle = styled.div`
  width: 100%;
  max-height: 100%;
  min-height: 100vh;
  overflow: auto;
  background: linear-gradient(to right, #041e5f 50%, #fff 50%);

  .valid {
    color: green;
  }
  .invalid {
    color: red;
  }
  .left-container {
    width: 100%;
  }

  ul,
  .term {
    display: none;
  }

  @media (min-width: 768px) {
    .left-container {
      width: 50%;
      background-color: #041e5f;
      float: left;
      max-height: 100%;
      min-height: 100vh;
      overflow: auto;
    }

    .right-container {
      position: relative;
      width: 50%;
      float: right;
      max-height: 100%;
      min-height: 100vh;
      overflow: auto;
    }

    .left-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      max-height: 100%;
      min-height: 100vh;
    }

    .left-heading {
      // display:flex;
      align-items: center;
      justify-content: center;
      color: white;
      line-height: 70px;
      font-size: 60px;
      font-weight: 700;
      text-transform: uppercase;
      display: table-cell;
      vertical-align: middle;
    }

    .term-main {
      width: 100%;
      position: absolute;
      bottom: 15px;
    }

    .term-bg {
      // backdrop-filter: blur(13px);
      margin: 30px;
      border-radius: 15px;
    }

    .term-wrapper {
      padding: 20px;
    }

    .ant-row-center {
      width: 100%;
    }

    .term {
      color: white;
      background-color: #ff9900;
      width: 200px;
      padding: 5px;
      padding-left: 14px;
      padding-right: 14px;
      border-radius: 10px;
      font-size: 20px;
      display: block;
    }

    ul {
      color: white;
      margin-left: 18px;
      margin-top: 10px;
      display: block;
    }

    li {
      margin-top: 4px;
    }
  }

  .ant-checkbox-inner {
    background-color: #2f32411a;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #0042a8;
    border-color: #0042a8;
  }
`;

const ApplicationDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 30px 0px;
  .heading5 {
    color: #041e5f;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.987px;
    margin-top: 52px !important;
    margin-bottom: 32px !important;
  }
  .status-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    p {
      width: 48%;
      color: #041e5f;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 27.987px;
      padding: 4px 0px;
      border-bottom: 1px solid #041e5f;
    }
    span {
      color: #041e5f;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 27.987px;
      padding-left: 4px;
      text-transform: uppercase;
    }
    .individual {
      color: #041e5f;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 27.987px;
    }
  }
  .overview-button {
    display: flex;
    padding: 6px 24px;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    background-color: #041e5f;
    color: #fff;
    cursor: pointer;
    border: 1px solid #041e5f;
  }
  .application-id {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #041e5f;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 27.987px;
    padding: 4px 24px;
    border-bottom: 1px solid #041e5f;
    margin-top: 32px;
    .status-text {
      color: #041e5f;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      padding-left: 4px;
      line-height: 27.987px;
    }
  }
`;

export { ApplicationDetailWrapper, ContainerStyle, MainStyle, ApplicationDetailsWrapper };
