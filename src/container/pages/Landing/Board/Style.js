import Styled from 'styled-components';

const BoardStyle = Styled.div`
  .container{
    border-top: solid 1px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    @media (max-width: 1100px) {
      height: 100%;
    }
  }
  
  .valid{
    color:green;
  }
  .invalid{
    color:red;
  }
  .left-container{
    width:100%;
    margin-top: -60px;
  }
  .bitcoin-img {
    display: none;
  }
  ul, .term{
    display:none;
  }

  .button-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo-block{
    border-radius: 0px !important;
    background: var(--El-Salvador-Blue, #041E5F);
  }

  .ninjadash-authentication-top{
    .join-title{
        font-weight: 700;
        font-size: 45px;
        color: #041E5F;
        line-height: 50px;
        letter-spacing: 1.22px;
      }
      .top-desc{
        font-weight: 400;
        font-size: 32px;
        color: #041E5F;
        line-height: 40px;
      }
  }
  .ninjadash-authentication-content{
    .content{
        font-weight: 400;
        font-size: 20px;
        color: #041E5F;
        line-height: 30px;
    }
  }
  .left-main{
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    justfy-content: center;
    padding: 15px;
  }
  .right-container{
    display: none;
    width: 100%;
    height: 420px;
    .myVideo { 
      height: inherit;
    }
  }

  .top-video {
    display: block;
    width: 100%;
    margin: 0px;
  }

  .top-video-text {
    position: absolute;
    display: block;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    top: 120px;
    padding: 0px 32px;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      top: 18%;
    }
    @media only screen and (min-width: 481px) and (max-width: 767px) {
      top: 50% !important;
    }
  }

  @media (min-width: 500px) {
    .button-block{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1100px) {
  .ninjadash-authentication-top{
    .join-title{
        color: #041E5F;
        font-size: 89px;
        font-style: normal;
        font-weight: 700;
        line-height: 99px; /* 111.236% */
        letter-spacing: -1.78px;
        text-transform: uppercase;
      }
      .top-desc{
        font-weight: 400;
        font-size: 28px;
        color: #041E5F;
        line-height: 40px;
      }
  }
  .ninjadash-authentication-content{ 
    .action-block {
      padding-top: 5rem;
    }
    .content{
        font-weight: 400;
        font-size: 20px;
        color: #041E5F;
        line-height: 30px;
    }
  }

  .top-video {
    display: none;
  }

  .top-video-text {
    display: none;
  }

  .bitcoin-img {
    display: inline-block;
    margin-top: -2px;
  }
  
  .left-container{
    width: 50%;
    height: 100%;
    background-size: cover;
    float: left;
    margin-top: 0px;
    .left-main {
      padding-right: 10px;
    }
    .left-row {
        border-right: 1px solid rgb(4, 30, 95);
        height: 100vh;
        align-content: center;
    }
  }

  .right-container{
    position:relative;
    width: 50%;
    height: 100%;
    float: right;
    display: block;
  }
  .left-main{
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    justfy-content: center;
    padding: 40px 0px;
  }
  
  .term-main{
    width: 100%;
    position:absolute;
    bottom:15px;
  }
  
  .term-bg{
    backdrop-filter: blur(13px);
    margin:30px;
    border-radius: 15px;
  }
  
  .term-wrapper{
    padding:20px;
  }
  
  .ant-row-center{
    width:100%;
  }
  
  .term{
    color:white;
    background-color:#FF9900;
    width:200px;
    padding:5px;
    padding-left:14px;
    padding-right:14px;
    border-radius:10px;
    font-size:20px;
    display:block
  }
  
    ul{
      color:white;
      margin-left: 18px;
      margin-top: 10px;
      display:block;
     }
  
      li{
        margin-top : 4px;
      }
  }
  
  .ant-checkbox-inner {
    background-color: #2F32411A;;
  }
  
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #0042A8; 
    border-color: #0042A8; 
}`;

export { BoardStyle };
