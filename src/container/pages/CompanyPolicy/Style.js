import Styled from 'styled-components';

const LoginWrap = Styled.div`
  width: 100%;
  height:75vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
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
  width:50%;
  position: fixed;
  left: 0;
  top: 0;
  height: 75vh;
  display: none;
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
  padding: 120px 12px;
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
 display: block;
}

.right-container{
  position: relative;
  width: 50%;
  float: right;
  height: 100%;
  padding: 120px 12px 190px 12px;
}

.left-main{
  width: 100%;
  // display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4vw;
  // padding-top: 25vh;
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
  background-color: #2F32411A;;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #0042A8; 
  border-color: #0042A8; 
}

`;

const AuthFormWrap = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  height: 100%;
  width:100%;

  // .para-padding{ 
  //   padding-bottom: 0px;
  // }

  // @media (max-width: 768px) {
  //   .para-padding{ 
  //     padding-bottom: 120px;
  //   }
  // }

  .main{
      // min-width:400px;
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
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 0;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .top-desc{
     line-height: 30px;
      font-weight: 500;
      line-height: 30px;
      color: #2F3241;
      font-size: 18px;
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
    // padding: 30px 40px;
      min-width:400px;
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
      margin-bottom: -15px;
      margin-top: -5px;
      .ant-checkbox-wrapper{
        span{
          font-size: 13px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        .ant-checkbox{
          &+span{
            position: relative;
            top: -2px;
          }
        }
      }
      .forgot-pass-link{
        font-size: 13px;
        color: ${({ theme }) => theme['primary-color']};
      }
    }
    .btn-signin,
    .btn-reset,
    .btn-create{
      font-size: 14px;
      font-weight: 500;
      border-radius: 6px;
      width: 100%;
      min-height: 48px;
      margin-top: 25px;
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
    text-align: center;
    // padding: 25px;
    // border-radius: 0 0 6px 6px;
    // background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
    p{
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      margin-bottom: 0;
      a{
        margin-left: 6px;
        ${({ theme }) => theme['primary-color']};
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
`;

export { AuthFormWrap, LoginWrap };
