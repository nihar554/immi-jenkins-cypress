import Styled from 'styled-components'

const FaqsStyle = Styled.div`
.container{
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .valid{
    color:green;
  }
  .invalid{
    color:red
  }
  .left-container{
    width: 100%
    height: 100%;
    img {
      margin: 0px;
      @media (min-width: 768px) and (max-width: 1024px) {
        height: 65rem;
      }
    }
  }
  
  ul, .term{
    display:none;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .ninjadash-authentication-top{
      .join-title{
        padding-left: 15px;
        padding-top: 0px;
        font-size: 45px;
        font-weight: 700;
        letter-spacing: 1.22px;
        text-align: center;
        color: var(--El-Salvador-Blue, #041E5F);
      }
    }
    .ant-collapse .ant-collapse-item .ant-collapse-header .ant-collapse-header-text {
      font-size:16px;
    }
  }
  @media (min-width: 768px) {
  .ninjadash-authentication-top{
    .join-title{
        // font-weight: 700;
        // font-size: 120px;
        color: var(--El-Salvador-Blue, #041E5F);
        // line-height: 70px;
        font-size: 89px;
        font-style: normal;
        font-weight: 700;
        line-height: 99px; /* 111.236% */
        letter-spacing: -1.78px;
        text-transform: uppercase;
      }
      .top-desc{
        font-weight: 400;
        font-size: 42px;
        color: #041E5F;
        line-height: 47px;
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
  
  .left-container{
    width: 50%;
    height: 100%;
    background-size:cover;
    float: left;
  }
  
  .right-container{
    position:relative;
    width: 50%;
    height: 100%;
    float: right;
    .right-main {
      height: 100%;
      padding-left: 10px;
      .right-row {
        align-content: center;
        height: 100%;
      }
    }
    
  }
  
  .right-container{
    .myVideo: {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        height: 100%;
    }
  }
  .left-main{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justfy-content: center;
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
}`

export { FaqsStyle }
