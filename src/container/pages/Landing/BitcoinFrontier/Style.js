import Styled from 'styled-components'
import BitcoinFrontierBgImage from '../../../../static/img/bitcoin-frontier.png'

const BitcoinFrontierWrapper = Styled.div`
  background-image: url(${BitcoinFrontierBgImage});
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  margin-bottom: 20px;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    background-size: cover;
  }
  .center {
    button {
      width: 174px;
      height: 35px;
      font-size: 14px;
      margin-top: 1rem;
      border-radius: 0;
      color: #041E5F;
      margin-bottom: 3%;
    }
    text-align: center;
    h1 {
      color: ${({ theme }) => theme[theme.mainContent]['white-text']};
      font-size: 89px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -1.78px;
      text-transform: uppercase;
      text-wrap: nowrap;
      @media (max-width: 900px) {
          font-size: 45px;
          font-weight: 700;
          letter-spacing: 1.22px;
      }
    }
    @media (min-width: 900px) {
      .freedom-text {
          margin-top: -88px;
      }
    }
    @media (max-width: 900px) {
      .freedom-text {
          margin-top: -36px;
      }
    }
    .descripion {
      margin-top: 3rem;
      color: white;
      font-size: 20px;
      padding-left: 20%;
      padding-right: 20%;
      @media (max-width: 900px) {
          font-size: 18px !important;
          padding-left: 3% !important;
          padding-right: 3% !important;
          text-align: justify !important;
          margin-top: 1.5rem;
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
          padding-left: 15%;
          padding-right: 15%;
          text-align: justify;
          font-size: 30px !importnat;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
`

const BitcoinFrontierWizardBlock = Styled.div`
    width: 100%;
    // overflow: auto;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing: border-box;
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      padding-left: 0px;
      padding-right: 0px;
    }
    .ant-steps-item.ant-steps-item-active .ant-steps-item-icon {
      background-color: #FFF !important;
      span.ant-steps-icon {
        color: ${({ theme }) => theme['primary-color']} !important;
      }
    }
    .ant-steps-item.ant-steps-item-active .ant-steps-item-title, .ant-steps-item-title  {
      color: #FFF !important;
      border-bottom: 1px solid;
    }
    .payment-card-block {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: rgba(0, 66, 168, 0.10);
      padding: 20px;
      border-radius: 30px;
      cursor: pointer;
    }
    .ant-card{
      background-color: #fff !important;
      border: 1px solid #fff;
      padding-left: 5%;
      padding-right: 5%;
        .ant-card-body{
            padding: 50px 0 !important;
            .wizard-title {
              font-size: 32px;
              text-align: center;
              span {
                color: ${({ theme }) => theme['primary-color']};
              }
            }
            .wizard-subtitle {
              font-size: 14px;
              color:#2F3241;
            }
        }
        .steps-content{
          .step-block {
            justify-content: left !important;
            .title {
              font-size: 18px;
              border-bottom: 2px solid;
            }
            .content {
              padding-left: 10% !important;
              padding-right: 10% !important;
            }
          }
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px) {
                    padding: 15px !important;
                }
            }
        }
      }
      .ant-btn-primary  {
        visibility: hidden;
        // display: none;
      }
      a.ant-btn-primary:after  {
        // visibility: visible;
        background: #FFF !important;
        color: ${({ theme }) => theme['primary-color']};
        content: "Start Process";
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 44px;
        padding: 0px 50px;
        font-weight: 600;
      }
      .start-process-btn {
        padding: 6px 24px;
        width: 174px;
        height: 35px;
        font-size: 14px;
        margin-top: 1rem;
        border-radius: 0px;
        color: var(--El-Salvador-Blue,#041E5F);
      }
      .ant-steps {
        text-align: unset;
      }
      .steps-action {
        text-align: center;
      }
      .ant-steps-item {
        overflow: visible !important;
      }
      .ant-steps-item-container::after{
        // background-image: url(${require('../../../../static/img/wizard-line.png')}) !important;
        // left: 57%;
        // width: 32rem;
        // height: 2px;
      }
      @media only screen and (min-width: 320px) and (max-width: 480px) {
        .ant-steps-item-container {
          align-items: baseline;
        }
        .ant-steps-item-container .ant-steps-item-icon {
          align-self: end;
        }
        .ant-steps-item-container .ant-steps-item-content {
          text-wrap: nowrap;
        }
        .steps-content .step-block .content {
          padding-left: 1rem;
        }
      }
`

const BitcoinWizardDesktop = Styled.div`
display: none;
@media (min-width: 1400px) {
  display: block;
}
.ant-steps-label-vertical .ant-steps-item-tail {
  margin-left: 200px !Important;
}

.ant-steps-label-vertical .ant-steps-item-icon {
  margin-left: 185px !Important;
}

.ant-steps-label-vertical .ant-steps-item-content {
  width: 416px !Important;
}

.ant-steps-item-title {
  border-bottom: 0px !Important;
}

.step-block-desription {
  color: white;
  padding-top: 20px;
  text-align: left;
  border-top: 0.6px solid;
  margin-top: 10px;
}

.ant-steps-icon {
  color: #0042A8 !Important;
}
`

const BitcoinFrontierWrapperMobile = Styled.div`
display: block;
@media (min-width: 1400px) {
  display: none;
}
.block-icon {
  text-align: center;
  width: 35px;
  height: 35px;
  display: flex;
  margin: auto;
  background-color: #FFF;
  color: var(--El-Salvador-Blue,#041E5F);
  border-radius: 100%;
  margin-bottom: 1rem;
  span {
    margin: auto;
    font-size: 20px;
  }
}
.block-title {
  text-align: center;
  margin-bottom: 1rem;
  color: white; 
  span {
    padding-bottom: 5px;
    border-bottom: 2px solid;
  }
}
.step-block {
  text-align: justify;
  color: white;
}
`

const BitcoinFrontierWrapperNewVersion = Styled.div`
.container{
  width: 100%;
  display : flex;
  flex-direction : row;
  margin-bottom: 20px;

  .left-container{
    width: 50%;
    float: left;
    padding: 2rem;
    .ant-steps-vertical {
      margin-bottom: 40px;
      margin-top: 40px;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
    .step-block-desription {
        color : var(--El-Salvador-Blue, #041e5f) !important;
        padding-top: 12px;
        border: 0px;
        ul li {
          list-style-type: decimal;
          margin-bottom: 0.2rem;
          list-style-position: inside;
          font-family: 'SF Pro Display Regular';
          .line {
            border-bottom: 3px solid #E4C864 !important;
          }
        }
    }
    .ant-steps-item.ant-steps-item-active .ant-steps-item-icon {
      background-color: #FFF !important;
      border-color: #E4C864 !important;
      span.ant-steps-icon {
        color: #E4C864 !important;
      }
    }

    .ant-steps-item .ant-steps-item-icon {
      background-color: #fff !important;
      border-color: #E4C864 !important;
      margin-top: 0.8rem;
      span.ant-steps-icon {
        color: #E4C864 !important;
      }
    }
    .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail::after {
      width: 0px;
    }
    .ant-steps-item > .ant-steps-item-container .ant-steps-item-title {
      color : var(--El-Salvador-Blue, #041e5f) !important;
      border-bottom: 0.6px solid #E4C864 !important;
      font-weight: 700;
      font-size: 16px;
      font-family: 'SF Pro Display Bold';
      text-align: center;
      width: 100%;
    }
  }

  .right-container{
    width: 50%;
    float: right;
    background-image: url(${BitcoinFrontierBgImage});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .description-block {
      margin-bottom: 40px;
      margin-top: 40px;
      text-align: center;
      padding-left: 7rem;
      padding-right: 7rem;
      color: #FFF;
      display: grid;
      h1.font-bold {
        color: #FFF;
        text-align: center;
        font-family: SF Pro Display Bold;
        font-size: 83px;
        font-style: normal;
        font-weight: 700;
        line-height: 80px;
        letter-spacing: 1.66px;
        text-transform: uppercase;
      }
      h2.family-block-title {
        color: #EED064;
        text-align: center;
        font-size: 33px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 90.909% */
        letter-spacing: 1.65px;
        text-transform: uppercase;
        margin-top: 1rem;
        font-family: 'SF Pro Display Regular';
      }
      p {
        font-family: 'SF Pro Display Regular';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; 
      }
      button {
        width: 200px;
        height: 35px;
        font-size: 14px;
        margin-top: 2rem !important;
        border-radius: 0;
        color: #041E5F;
        border-radius: 0px;
        margin: auto;
      }
    }
  }
  
  .clearfix {
    clear: both;
  }
  @media (min-width: 320px) and (max-width: 1024px) {
    flex-direction : column-reverse;
    .left-container {
      width: 100%;
      float: none;
      .ant-steps-vertical {
        width: 100%;
        margin-left: 0;
      }
      .ant-steps-item > .ant-steps-item-container .ant-steps-item-title {
        line-height: 25px;
        text-wrap: nowrap;
      }
      .ant-steps-item .ant-steps-item-icon { 
        margin-top: 0.5rem;
      }
    }
    .right-container {
      width: 100%;
      float: none;
      .description-block { 
        padding: 1rem;
        h1.font-bold {
          font-size: 45px;
          line-height: 3rem;
          letter-spacing: 5px;
        }
        p {
          text-align: justify;
        }
      }
    }
  }
}
`

export {
  BitcoinFrontierWizardBlock,
  BitcoinFrontierWrapper,
  BitcoinFrontierWrapperMobile,
  BitcoinWizardDesktop,
  BitcoinFrontierWrapperNewVersion,
}
