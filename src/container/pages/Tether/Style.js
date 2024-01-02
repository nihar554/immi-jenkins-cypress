import Styled from 'styled-components';

const MainSection = Styled.div`
    margin: 0px 170px 20px;
`;
const BannerStyle = Styled.div`
    padding: 0px 170px 20px;
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }`;

const HeadTitle = Styled.div`
    height: 90%;
    padding-top: 7rem;
    width: 80%;
    h1 {
        display: table-cell;
        vertical-align: middle;
        font-size: 50px;
        font-weight: 600;
        line-height: 55px;
        color: ${({ theme }) => theme[theme.mainContent]['black-color']};
        span {
          color: ${({ theme }) => theme[theme.mainContent]['main-primary-color']};
        }
    }
    .description {
        margin-top: 2rem;
        color: ${({ theme }) => theme[theme.mainContent]['black-color']};
    }
    .fillup-btn {
      background: ${({ theme }) => theme[theme.mainContent]['main-primary-color']};
    }

`;

const UserCard = Styled.div`

  text-align: center;
  .BeerListItem-main-card {
    width: 320px;
    height: 415px;
  }
  
  .BeerListItem-img {
    height: auto;
    max-height: 250px;
    width: auto;
    max-width: 250px;
  }
  
  .card_hover_purple:hover {
    transform: translate3D(0,-1px,0) scale(1.05); /* move up slightly and zoom in */
    box-shadow: 8px 28px 50px rgba(127,110,233,.09), 1px 6px 12px rgba(127,110,233,.09);
    transition: all .4s ease; /* zoom in */
    cursor: pointer;
  }
  .card_hover_green:hover {
    transform: translate3D(0,-1px,0) scale(1.05); /* move up slightly and zoom in */
    box-shadow: 8px 28px 50px rgba(27,162,122,.09), 1px 6px 12px rgba(27,162,122,.09);
    transition: all .4s ease; /* zoom in */
    cursor: pointer;
  }
  .card_hover_blue:hover {
    transform: translate3D(0,-1px,0) scale(1.05); /* move up slightly and zoom in */
    box-shadow: 8px 28px 50px rgba(26,99,241,.09), 1px 6px 12px rgba(26,99,241,.09);
    transition: all .4s ease; /* zoom in */
    cursor: pointer;
  }
  .card_hover_orange:hover {
    transform: translate3D(0,-1px,0) scale(1.05); /* move up slightly and zoom in */
    box-shadow: 8px 28px 50px rgba(247,147,26,.09), 1px 6px 12px rgba(247,147,26,.09);
    transition: all .4s ease; /* zoom in */
    cursor: pointer;
  }
  .user-card{
    &.theme-list{
      .ant-card-body{
        padding: 30px 25px 30px 30px !important;
        @media only screen and (max-width: 479px){
          padding: 25px 20px 25px 20px !important;
        }
      }
      figure{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        @media only screen and (max-width: 479px){
          flex-flow: column;
        }
        img{
          max-width: 80px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:20px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}:0px;
          }
        }
      }
      figcaption{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
        width: 100%;
        @media only screen and (max-width: 379px){
          flex-flow: column;
        }
      }
      .card__content{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        p{
          max-width: 400px;
          font-size: 15px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .card__designation{
            font-size: 13px;
            margin-bottom: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .card-text{
          margin-bottom: 12px;
        }
        .card-info{
          margin-bottom: 0;
          .user-meta{
            font-size: 14px;
            strong{
              font-weight: 600;
              color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
          }
          .user-meta + .user-meta{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
          }
        }
      }
      .card__actions{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 379px){
          margin-top: 15px;
        }
        button{
          padding: 0px 19.05px;
          min-width: 114px;
        }
      }
    }
    &.theme-grid-2{
      .ant-card-body{
        padding: 0 !important;
      }
      figure{
        position: relative;
      }
      .user-card__img{
        margin-bottom: 0;
        position: absolute;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        z-index: 22;
        img{
          position: relative;
          top: 6px;
        }
      }
      .user-card__bg{
        background-size: cover !important;
        background-position: center !important;
        border-radius: 10px 10px 0 0;
      }
      .card__bottom{
        position: relative;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        top: -26px;
        padding-top: 102px;
        border-radius: 30px 30px 10px 10px;
      }
      .card__actions{
        @media only screen and (max-width: 1499px){
          flex-direction: row;
        }
      }
    }
    &.theme-grid-3{
      .ant-card{
        text-align: left;
      }
      .ant-card-body{
        padding: 0 !important;
      }
      .card__top,
      .card__content,
      .card__info{
        padding: 0 30px;
      }
      .card__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        margin-bottom: 10px;
        .user-card__img{
          margin-right: 12px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
          img{
            max-width: 70px;
          }
        }
        .user-card__info{
          width: 100%;
          position: relative;
          .action-more{
            position: absolute;
            right: 0;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            top: 0;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
          }
          .card__designation{
            margin-bottom: 0;
          }
        }
      }
      .card__content{
        p{
          font-size: 15px;
          margin-bottom: 26px;
        }
        .image-group{
          margin: -3px;
        }
        img{
          max-width: 34px;
          margin: 3px;
        }
      }
      .card__info{
        padding-bottom: 30px;
        padding-top: 18px;
        .ant-progress-inner{
          position: relative !important;
        }
        p{
          font-size: 12px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
        h2{
          font-size: 14px;
          font-weight: 500;
          margin-top: 4px;
          margin-bottom: 16px;
         
        }
        .info-line{
          display: flex;
          justify-content: space-between;
          .success{
            background-color: transparent;
            color: ${({ theme }) => theme['success-color']};
          }
        }
        .completed-count{
          margin-top: 4px;
        }
        .project-progress{
          display: flex;
          justify-content: space-between;
          .progress-percentage{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
            span{
              font-size: 12px;
              color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
          }
        }
      }
    }
  }
  .title-win{
    
  }
  .card{
    position: relative;
    box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
    border-radius: 12px;
    border: 2px solid;
    a {
      text-decoration:none;
    }
    .borderless{
      margin-bottom:0px !important
    }
    .alpha{
      color: "#fff",
      fontSize: "12px",
      backgroundColor: "#8979eb",
      height: "25px",
      width: "21%",
      margin: "0px 0px 0px auto",
      borderBottomLeftRadius: "25px",
      borderTopRightRadius: "10px"
    }
   
    .ant-card-body{
      padding: 25px !important;
      @media only screen and (max-width: 575px){
        padding: 15px !important;
      }
      div{
        position: static;
      }
    }
    figure{
      margin-bottom: 0;
      img{
        width: 100%;
        border-radius: 50%;
        max-width: 100px;
      }      
    }
    .card__more_actions{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 24px;
      top: 20px;
      line-height: .5;
      padding: 5px 3px;
      border-radius: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
      svg,
      img{
        width: 20px;
      }
    }
    .card__name{
      margin-top: 1rem;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        &:hover{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .card__name_asset{
      margin-top: 13px;
      color:orange;
      white-space: nowrap;
    }
    .card__name_stablecoin{
      margin-top: 13px;
      color:#8979eb;
    }
    .card__name_commodities{
      margin-top: 13px;
      color:#26a680;
    }
    .card__designation{
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['black-color']};
    }
    .card__social{
      margin-top: 7px;
      img{
        width:100%;
        max-width:16%
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
      }
    }
  }

  .user-card{
    .ant-card-body{
      padding: 30px 25px 18px 25px !important;
      @media only screen and (max-width: 1599px){
        padding: 20px  20px 20px !important;
      }
      @media only screen and (max-width: 767px){
        padding: 15px  15px 15px !important;
      }
    }
   
    figure{
      img{
        margin-bottom: 18px;
        max-width: 120px;
      }      
    }     
        svg,
        i{
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
      }
    }
    .card__info{
      padding-top: 20px;
      margin-top: 18px;
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      .info-single{
        text-align: center;
      }
      .info-single__title{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 4px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      p{
        margin-bottom: 0;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
      }
    }
  }
`;

const GalleryCard = Styled.nav`

  border-radius: 25px;
  border:2px solid ${({ theme }) => theme[theme.mainContent]['main-primary-color']};
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
  .hoverimage:hover{
    transform: scale(1.1); 
  }
  .zoom-img {
    width: 100%;
    height:auto;
    overflow: hidden;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
  .zoom-img  img {
    transition: all .3s ease-in-out;
  }
  .zoom-img img:hover   {
    transform: scale(1.2);
  }
  figure{
    margin-bottom: 0;
  }
  .gallery-single-content{
    padding: 21px 22px 21px;
   
    p{
      font-size: 15px;
      margin-bottom: 0px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .gallery-single-title{
      min-height:48px;
    }
    .gallery-single-text{
      min-height:94px;
    }

  }
`;

const BorderBottom = Styled.div`
.position{
  display: inline;
  }
.border-bottom-center {
  position: relative;
  width: 38%;
  @media (max-width: 767px) {
    bottom: 21px;
  }
}
h3 {
  color: ${({ theme }) => theme[theme.mainContent]['black-color']};
  span {
    color: ${({ theme }) => theme[theme.mainContent]['main-primary-color']};
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
  background-color: ${({ theme }) => theme[theme.mainContent]['main-primary-color']}; 
}
;
`;
const ImageTitle = Styled.div`

@media (max-width: 767px) {
   img  {
   width: 22rem !important;
   height: 22rem !important;
  }
}
`;
const CapabilitySection = Styled.div`
margin-top: -30%;
padding-bottom: 4rem;
p.description {
  margin-top:2rem;
  margin-bottom:4rem;
  text-align: center;
  color: #2F3241;
};
.bottom{
  @media only screen and (max-width: 991px){
    margin-bottom:20px;
  }
}

`;
const BrandSection = Styled.div`
  background: #ecf0f8;
  padding:2rem;
  margin-top:4rem;
  border-radius: 10px;
  @media only screen and (max-width: 767px){
    margin-top:0rem;
  }
  .image-container {
    width: 100%;
    height: auto;
    overflow: hidden;
    }
  .image-logo {
    opacity: 0;
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeftDelayed {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    50% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .first-image {
    animation: fadeInLeft 1s ease-in-out 5s forwards;
  }
  .second-image {
    animation: fadeInLeft 1s ease-in-out 4s forwards;
  }
  .third-image {
    animation: fadeInLeft 1s ease-in-out 3s forwards;
  }
  .four-image {
    animation: fadeInLeft 1s ease-in-out 2s forwards;
  }
    .five-image {
    animation: fadeInLeft 1s ease-in-out 1s forwards;
  } 
   .six-image {
    animation: fadeInLeft 1s ease-in-out 0s forwards;
  }

  h3 {
    text-align:center;
    padding-top:2rem;
    padding-bottom:2rem;
  }

  .brand-logo-row {
    display:flex;
    justify-content:center;
    margin-top: 1rem;
    margin-bottom:2rem;
    gap:10px;
    }
    img{
      @media only screen and (max-width: 767px){
        width:110px;
      }
    }
    .logo-bottom{
      @media only screen and (max-width: 767px){
        margin-bottom:20px;
      }

  }
`;

const ProductCard = Styled.div`
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    position: relative;
    box-shadow: 0 5px 20px rgba(173, 181, 217, .10);
    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        margin-bottom: 1rem;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    a{
      text-decoration:none;
      color:${({ theme }) => theme[theme.mainContent]['main-primary-color']};
    }
    .product-list{
        height: 200px;
        @media only screen and (max-width: 1199px){ 
          height: 574px;
        }
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        padding: 20px;
        border: 3px dashed ${({ theme }) => theme[theme.mainContent]['main-primary-color']}; 
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        figure{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            @media only screen and (max-width: 1199px){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            @media only screen and (max-width: 1199px){
                margin-top: 15px;
            }
            p{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                font-size: 15px;
                margin-bottom: 3px;
            }
          
           
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 15px;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            button{
                min-width: 132px;
                margin: 0;
                @media only screen and (max-width: 991px){
                    min-width: 100px;
                }
            }
            .btn-cart{
                margin: 0 0 10px;
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
            @media only screen and (max-width: 1199px){
                top: -10px;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
            svg{
                width: 14px;
                height: 14px;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100%;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .btn-heart{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
        top: 15px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 5px 10px ${({ theme }) => theme[theme.mainContent]['extra-light-text']}20;
        @media only screen and (max-width: 1199px){
            width: 30px;
            height: 30px;
        }
        div{
            line-height: 0;
        }
        svg{
            width: 14px;
            height: 14px;
            fill: ${({ theme }) => theme[theme.mainContent]['light-text']}
        }
        &.favourite{
            svg{
                fill: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .product-single-title{
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 600;
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            &:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            font-size: 14px;
            margin: 0 5px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
    }
    .product-single-price__new{
        font-weight: 600;
        color: ${({ theme }) => theme['primary-color']};
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme['secondary-color']};
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        margin-bottom: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        .ant-rate{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
        }
        .ant-rate-star:not(:last-child) {
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 2px !important;
        }
        .total-reviews{
            font-weight: 400;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        .anticon svg{
            color: #FA8B0C;
        }
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px -5px -5px -5px;
        button{
            margin: 5px;
            &:hover{
                svg{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
            svg{
                position: relative;
                top: -2px;
            }
        }
        .btn-cart{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            &:hover{
                color: ${({ theme }) => theme['primary-color']} !important;
            }
        }
        .ant-btn-default{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-btn-white{
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']} !important;
            }
        }
        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 21px;
            height: 36px;
            @media only screen and (max-width: 991px){
                padding: 0px 5px;
            }
            
            & + .ant-btn-sm{
                padding: 0px 24px;
            }
        }
    }
`;

const BenefitsSection = Styled.div`
    .reveal{
      position: relative;
      transform: translateY(150px);
      opacity: 0;
      transition: opacity 2s ease, transform 2s ease;
    }
   .reveal.active{
      transform: translateY(0);
      opacity: 1;
    }
    margin-top : 4rem;
    .logo-bottom{
      @media only screen and (max-width: 767px){
        margin-bottom:20px;
      }
    }

`;
const InsightSection = Styled.div`
.bottom .ant-col {
  margin-bottom: 20px;
  @media (max-width: 767px) {
  margin-bottom: 20px;
  }
}
`;
export {
  BannerStyle,
  HeadTitle,
  UserCard,
  GalleryCard,
  BorderBottom,
  CapabilitySection,
  BrandSection,
  ProductCard,
  BenefitsSection,
  MainSection,
  ImageTitle,
  InsightSection,
};
