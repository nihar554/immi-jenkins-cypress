import Styled from 'styled-components'

const BannerStyle = Styled.div`
    padding: 0px 170px 20px;
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    .reveal {
        position: relative;
        left: -100%; 
        opacity: 0;
        transition: left 1s ease, opacity 1s ease;
      }
      
      .reveal.active {
        left: 0; 
        opacity: 1;
      }
      .scale-animation{
          transition: transform 3s;
          transform: scale(0.3);
      }
      .scale-animation.active {
          transform: scale(1); 
        }
        .reveal-right{
            position: relative;
            right: 0;
            opacity: 0;
            transition:right 1s ease, opacity 1s ease;
        }
        .reveal-right.active {
            opacity: 1; 
            animation: slideRightToLeft 1s ease-in-out;
        }
        @keyframes slideRightToLeft {
            0% {
              transform: translateX(30%);
            }
            100% {
              transform: translateX(0);
            }
          }
`
const HeadTitle = Styled.div`
    height: 90%;
    padding-top: 7rem;
    width: 100%;
    h1 {
        display: table-cell;
        vertical-align: middle;
        line-height: 60px;
        span {
            color:${({ theme }) => theme[theme.mainContent]['orange-color']};
        }
    }
    .description {
        margin-top: 2rem;
        color: #2F3241;
    }
    .fillup-btn {
        font-size: 14px;
        background: #F7931A;
        border-width: 0px;
        border-style: solid;
        color: rgb(255, 255, 255);
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 13px;
        padding: 0px 20.5px;
        height: 44px;
        font-weight: 600;
        box-shadow: 0px 0px;
    }

`
const CardWrapper = Styled.figure`
  display: flex;
  margin: 0;
  position: relative;
  h2,
  p {
    margin: 0;
  }
  figcaption {
    .widthfull{
        @media only screen and (max-width: 767px){
            width:100% !important;
        }
    }
    .right{
        @media only screen and (max-width: 767px){
            float: right;
            margin-top: -1rem;
             }
            }
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme['light-color']};
    }
   
  }
`

const BannerWrapper = Styled.figure`
.position{
    display: inline;
    }
    .figture-center{
        @media only screen and (max-width: 991px){
        text-align:center;
     }
    }
    .text-center{
        margin-left:30px;
    }
   .bitcoinLogo{
    @media only screen and (max-width: 991px){
    width:18rem !important;
    margin-top: 2rem;
    }
   }
   .PlateformLogo{
    @media only screen and (max-width: 991px){
        width:22rem !important;
        margin-left:0px !important;
        }
   }
 
h3{
    text-align:center;
    margin-bottom: 4rem;
    span {
        color:#F7931A;
    }
}
    .ant-card{
        margin-bottom: 70px !important;
        @media only screen and (max-width: 1199px){
            margin-bottom: 50px !important;
        }
        @media only screen and (max-width: 991px){
            margin-bottom: 30px !important;
        }
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        h2{
            color: #fff;
        }
        P{
            color: #fff;
        }
    }
    &.ninjadash-congratulation-banner{
        
        figcaption {
            h2{
                font-size: 30px;
                font-weight: 700;
            }
            p{
                font-size: 16px;
            }
        }
        
        .ant-card{
            background-color: #0A0A0A;
        }
        
        .ant-btn{
            margin-top: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['white-text']} !important;
        }
    }

    &.ninjadash-card-banner{
        .ant-card{
            margin-bottom: 0 !important;
            background-image: linear-gradient(to right top,#5840ff,#0082ff,#0af,#00caff,#00e4ec);
            .ninjadash-card-banner-content{
                min-height: 300px;
                figcaption{
                    h2{
                        font-size: 30px;
                        font-weight: 700;
                    }
                    p{
                        font-size: 16px;
                        margin: 10px 0 22px;
                    }
                }
                img{
                    bottom: -20px;
                }
            }
        }
    }
    &.ninjadash-top-banner{
        figcaption {
            height: 90%;
            padding-top: 7rem;
            width: 100%;
        }
        .row {
            background-image: url(/static/media/background-corve-down.2cb39a2….svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left bottom;
            background-origin: content-box;
        }
        &.ninjadash-top-banner-corporate{
            .ant-card{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                .ant-card-body{
                    padding: 34px 40px 40px !important;
                    figure.theme-wide{
                        position: static;
                        margin: 0;
                    }
                    img{
                        margin-bottom: 0;
                        max-width: fit-content;
                        bottom: 0;
                        right: 230px;
                        @media only screen and (max-width: 1699px){
                            right: 100px;
                        }
                        @media only screen and (max-width: 1599px){
                            right: 0;
                        }
                        @media only screen and (max-width: 1399px){
                            max-width: 400px;
                        }
                        @media only screen and (max-width: 1299px){
                            max-width: 360px;
                        }
                        @media only screen and (max-width: 767px){
                            margin-bottom: 22px;
                            width: 100%;
                        }
                    }
                }
            }
            .ninjadash-top-banner__title{
                color: ${({ theme }) => theme[theme.mainContent]['black-text']};
                white-space:nowrap;
                border-bottom: 2px solid #F7931A;
                border-width: medium;
                width: 70%;
                span {
                    color:#F7931A;
                }
            }
            .ninjadash-top-banner__text{
                font-size: 16px;
                color: rgb(47, 50, 65, 0.60);
                margin-top:1rem;
            }
        }
        .ant-card{
            margin-bottom: 25px !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['darker-background']};
            .ant-card-body{
                padding: 50px 54px !important;
                @media only screen and (max-width: 991px){
                    padding: 30px 34px !important;
                }
                figure{
                    @media only screen and (max-width: 991px){
                        text-align: center;
                    }
                }
                img{
                    margin-bottom: -110px;
                    @media only screen and (max-width: 991px){
                        position: static;
                        margin-bottom: 30px;
                    }
                }
            }
        }
        
        .ninjadash-top-banner__title{
            font-size: 30px;
            font-weight: 600;
            color: ${({ theme }) => theme['black-color']};
            @media only screen and (max-width: 991px){
                font-size: 24px;
            }
        }
        .ninjadash-top-banner__text{
            font-size: 15px;
            max-width: 610px;
            opacity: 1;
            margin-bottom: 25px;
            color: ${({ theme }) => theme['black-color']};
            @media only screen and (max-width: 1599px){
                max-width: 480px;
            }
            @media only screen and (max-width: 991px){
                max-width: 100%;
            }
        }
        .ninjadash-top-banner__action{
            border-radius: 4px;
        }
    }
`

const HeadContainer = Styled.div`
    background-image: url("/static/media/background-corve.fba9eb74a5ffae119308.png");
    background-size: 20rem 50rem;
    background-repeat: no-repeat;
    background-position: left;
    background-origin: content-box;

    .cryptocollectionImage{
        @media only screen and (max-width: 767px){
            margin-top:4%;
            width:25rem !important;
            margin-left: -61px !important;
    }
}`

const BorderBottom = Styled.div`
    padding: 0px 170px 20px;
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
.position{
  display: inline;
  }
.border-bottom-center {
  position: relative;
  width: 38%;
}
h3 {
  color: ${({ theme }) => theme[theme.mainContent]['black-color']};
  span {
    color: ${({ theme }) => theme[theme.mainContent]['orange-color']};
  }
}
.border-bottom-center::after {
  content: "";
  position: absolute;
  bottom:  -0.5rem;
  left: 52%;
  transform: translateX(-50%);
  width: 43%;
  height: 3px;
  background-color: ${({ theme }) => theme[theme.mainContent]['orange-color']}; 
}`
export { HeadTitle, CardWrapper, BannerWrapper, HeadContainer, BorderBottom, BannerStyle }
