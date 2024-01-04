import Styled from 'styled-components'
import BottomImage from '../../../../static/img/icon/botomsvg.svg'

const LoginWrap = Styled.div`
  width: 100%;
  height:75vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  .bottom-terms{
    position: absolute;
    bottom: 0;
    color: #9D9D9D;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.56px;
    text-decoration-line: underline;
    cursor: pointer;
  }

a {
  color: var(--El-Salvador-Blue, #041E5F);
}
.valid{
  color:green;
}
.invalid{
  color:red
}
.left-container{
  width:100%
}

ul, .term{
  display:none;
}

.right-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 0px 12px;
}

.left-main{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
}

@media (min-width: 768px) {
.left-container{
 width: 50%;
 background-color:#041E5F;
 float: left;
 height:75vh;
}

.right-container{
  position:relative;
  width: 50%;
  float: right;
  height:75vh;
  border-bottom: 1px solid #041E5F;
}

.left-main{
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 4vw;
  height:75vh;
  display: table-cell;
  vertical-align: middle;
}

.left-heading{
  align-items: center;
  justify-content: center;
  color:white;
  line-height:70px;
  font-size:60px;
  font-weight:700;
  margin: auto;
}

.term-main{
  width: 100%;
  position:absolute;
  bottom:15px;
}

.term-bg{
  // backdrop-filter: blur(13px);
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
  background-color: #fff;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #041E5F;
}

`

const FAQWrap = Styled.div`
  width: 100%;
  height:100vh;
  margin-top: 80px;
a {
  color: var(--El-Salvador-Blue, #041E5F);
}
.valid{
  color:green;
}
.invalid{
  color:red
}
.left-container{
  width:100%
}

ul, .term{
  display:none;
}

.right-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
}

.left-main{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
}

.left-heading{
  align-items: center;
  justify-content: center;
  color:white;
  line-height:70px;
  font-size:40px;
  font-weight:700;
  margin: auto;
}

@media (min-width: 768px) {
.left-container{
 width: 50%;
 background-color:#041E5F;
 float: left;
 height:100vh;
}

.right-container{
  position:relative;
  width: 50%;
  float: right;
  height:100vh;
}

.left-main{
  width: 100%;
  // display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4vw;
  // padding-top: 25vh;
  height:100vh;
  display: table-cell;
    vertical-align: middle;
}

.left-heading{
  align-items: center;
  justify-content: center;
  color:white;
  line-height:70px;
  font-size:60px;
  font-weight:700;
  margin: auto;
}

.term-main{
  width: 100%;
  position:absolute;
  bottom:15px;
}

.term-bg{
  // backdrop-filter: blur(13px);
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
  background-color: #fff;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #041E5F;
}

`

const AuthenticationWrapBottom = Styled.div`
  width: 100%;
  height : 25vh;
  background-size:cover;
  background-image : url(${BottomImage});
  float: bottom;
}
`

const AboutUsWrap = Styled.div`
  text-align: center;

  img {
    padding-bottom: 50px;
  }
  // p{
  //   padding-bottom: 0px;
  // }

  // @media (max-width: 768px) {
  //   p{
  //     padding-bottom: 120px;
  //   }
  // }
}
`
const AuthenticationWrap = Styled.div`
height:100%;
 
.main-containt{
  height:100%;
  width:100%;
}

.logo-block {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 40px;
}

@media (min-width: 768px) {
    .header{
    padding-top: 11px;
    padding-bottom: 10px;
    padding-left: 80px;
    padding-right: 80px;
    // height: 10vh;
    width: 100%;
    background:transparent;
    border-bottom: 1px solid #041E5F;
    }
    
    .bottom{
        width: 100%;
        height : 25vh;
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
      color:#0036C1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 8px;
    }

    .goooooo{
        cursor: pointer;
        border:none;
        background-color: transparent;
    }

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
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

`

const Content = Styled.div`
    padding: 100px;
    @media only screen and (max-width: 1599px){
      padding: 50px;
    }
    @media only screen and (max-width: 991px){
      padding: 20px;
    }
    @media only screen and (max-width: 767px){
      text-align: center;
    }
    .auth-content-figure{
      @media only screen and (max-width: 1199px){
        max-width: 420px;
      }
      @media only screen and (max-width: 991px){
        max-width: 100%;
      }
    }
`

const AuthFormWrap = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  height: 100%;
  width:100%;


  .checkbox-input .ant-form-item-explain-error {
    margin-top: -8px !important;
  }

  .main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-text: center;
  }
  .top-desc1{
    width: 100%;
    color: #041E5F;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    border: 1px solid #041E5F;
    border-style: dotted;
    padding: 20px 60px;
  }
  .top-button {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.987px;
    background-color: #041E5F;
    padding: 6px 40px;
    border: 1px solid #041E5F;
    cursor: pointer;
  }
  .valid{
    color:green;
  }
  .invalid{
    color:red
  }

  .ninjadash-authentication-top{
    padding-bottom: 20px;
    .ninjadash-authentication-top__title{
      font-size: 30px;
      font-weight: 400;
      line-height: 44px;
      margin-bottom: 0;
      color: var(--El-Salvador-Blue, #041E5F);
    }
  }
  .top-desc{
     line-height: 30px;
     font-weight: 400;
     line-height: 30px;
     color: #041E5F;
     font-size: 20px;
  }

  .main-heading{
        display: flex;
        padding-bottom: 40px;
        align-item: center;
        align-text-center;
        justify-content: space-between;

  }

  .btn-wrapper{
      display: flex;
      align-item: center;
      align-text-center;
      justify-content: center;
  }

  .back-button{
    padding : 5px 12px 5px 12px;
    border: 1px;
    border-radius: 8px;
    color: #2F3241;
    background-color : rgb(214, 231, 234);
    margin: 10px;
    cursor: pointer;

  }

  .recaptcha-signup-block{
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 36px 0px;
  }

  .recaptcha-block {
    display: flex;
    align-item: center;
    justify-content: center;
    margin: 36px 0px;
  }

  .ant-input{
     background: #2F32411A;
  }

  .ant-input::placeholder{
    background-color: transparent;
  }

   .ant-input-password{
     background: #2F32411A;
  }

  .ant-input-password::placeholder{
    background-color: transparent;
  }

  #register_password:focus {
    border-color : transparent;
  }
  #login_password, #register_password{
    background:transparent;

  }

    .heding{
        display:flex;
    }

    img{
        margin-right : 5px;
    }

    h4{
       margin-top: 3px;
       color:#0036C1
    }

  .ninjadash-authentication-content{
    min-width: 400px;
    @media only screen and (max-width: 1599px){
      // padding: 30px;
    }
    .ant-form-item-label {
      > label{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
    }
    .ant-form-item{
      margin-bottom: 25px;
    }
    .ant-input:focus, 
    .ant-input-focused{
      box-shadow: 0 5px 20px rgba(251,53,134,.10);
    }
    .ant-input{
      &::placeholder{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      }
    }
    .ant-form-item-explain-error{
      font-size: 13px;
      margin-top: 2px;
    }
    .ninjadash-auth-extra-links{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -45px;
      margin-top: -5px;
      .ant-checkbox-wrapper{
        span{
          color: #041E5F;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
        }
        .terms-condition{
          color: #041E5F;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          text-decoration-line: underline;
        }
        .ant-checkbox{
          &+span{
            position: relative;
            top: -2px;
          }
        }
      }
      .forgot-pass-link{
        color: #9D9D9D;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.987px;
        cursor: pointer;
      }
    }
    .btn-signin,
    .btn-reset,
    .btn-create{
      font-size: 14px;
      font-weight: 400;
      min-height: 40px;
      cursor: pointer;
      background: #041E5F;
      color: #fff;
      border: 1px solid #041E5F;
      padding: 6px 24px;
      border-radius: 0px;
    }
    .btn-disabled{
      font-size: 14px;
      font-weight: 400;
      min-height: 40px;
      background: #B1B1B1;
      color: #fff;
      border: 1px solid #B1B1B1;
      padding: 6px 24px;
    }
    .btn-reset{
      margin-top: 0;
    }
    .ninjadash-form-divider{
      font-size: 13px;
      color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      text-align: center;
      position: relative;
      margin: 0 -10px 25px -10px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
      }
      span{
        font-weight: 500;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
    }
    .ant-input-affix-wrapper {
      &.ant-input-password{
        input{
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
    .ninjadash-social-login{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: -6px;
      @media only screen and (max-width: 767px){
        justify-content: center;
      }
      &.signin-social{
        li{
          a{
            background-color: #fff;
          }
        }
      }
      li{
        padding:15px 6px;
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          height: 48px;
          padding: 0 15px;
          background: ${({ theme }) => theme[theme.mainContent]['general-background']};
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          font-weight: 500;
          transition: background-color 0.3s;
          @media only screen and (max-width: 1399px){
            padding: 0 12px;
          }
          @media only screen and (max-width: 379px){
            height: 44px;
          }
          span:not(.anticon){
            display: inline-block;
            margin-left: 5px;
          }
          svg,
          i{
            width: 20px;
            height: 20px;
          }
          &.google-social{
            background-color: #F0654810;
            color: #F06548;
            &:hover{
              background-color: #F06548;
              svg path{
                fill: #FFFFFF;
              }
            }
            svg path{
              fill: #F06548;
            }
            div{
              height: 20px;
            }
          }
          &.facebook-social{
            background-color: #3A589B10;
            color: #3A589B;
            &:hover{
              background-color: #3A589B;
              color: #FFFFFF;
            }
          }
          &.twitter-social{
            background-color: #03A9F410;
            color: #03A9F4;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
          &.github-social{
            background-color: #03A9F410;
            color: #090E30;
            &:hover{
              background-color: #03A9F4;
              color: #FFFFFF;
            }
          }
        }
      }
    }
    .ant-input-affix-wrapper{
      padding: 12px 20px;
    }
  }
  .ninjadash-authentication-bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      color: #041E5F;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      a{
        color: #041E5F;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        text-decoration-line: underline;
        padding-left: 4px;
      }
    }
  }
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    form{
      width: 420px;
      h1{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 45px;
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
        input::placeholder{
          color: ${({ theme }) => theme['extra-light-color']};
        }
      }
      .auth-form-action{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .forgot-pass-link{
            margin-top: 15px;
          }
        }
      }
    }
    #forgotPass{
      .forgot-text{
        margin-bottom: 25px;
      }
      .return-text{
        margin-top: 35px;
      }
    }
    
    
  }
  .auth0-login{
    margin: -6px;
    display: flex;
    flex-wrap: wrap;
  a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      height: 48px;
      padding: 0 30px;
      background: ${({ theme }) => theme['bg-color-light']};
      color: ${({ theme }) => theme['text-color']};
      font-weight: 500;
      border: 0 none;
      border-radius: 5px;
      margin: 6px;
      flex: 1;
      @media (max-width:480px){
        flex: none;
        width: 100%;
      }
  }
}
`

export { AuthenticationWrap, Content, AuthFormWrap, LoginWrap, AuthenticationWrapBottom, AboutUsWrap, FAQWrap }
