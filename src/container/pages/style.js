import Styled from 'styled-components';
import DashboardImg from '../../static/img/pages/migrate.png';
import BottomImage from '../../static/img/icon/botomsvg.svg';

const DashboardBanner = Styled.div`
 width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: auto;
    // padding: 20px;
    box-sizing: border-box;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .button{
    background-color: #0042A8;
    color: #fff;
    padding: 12px 20px 12px 20px;
    border-radius: 30px;
    border: 1px solid #0042A8;
  }
  .heading{
    font-size: 50px;
  }
  .sub-heading{
    font-size: 24px;
  }
`;

const PricingCard = Styled.div`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  box-shadow: ${({ theme }) => (theme.mainContent === 'lightMode' ? '0px 5px 20px #9299B830' : '0 0')};
  padding: 30px;
  .pricing-badge{
    height: 32px;
    padding: 6px 22.6px;
  }
  .price-amount{
    font-size: 36px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    .currency{
      font-size: 16px;
      font-weight: 600;
      top: -12px;
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 2px;
      color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .pricing-validity{
      font-size: 13px;
      font-weight: 400;
      bottom: 0;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -2px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
  .package-user-type{
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  .pricing-title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  button{
    padding: 0px 29.32px;
    height: 44px;
    border-radius: 6px;
    &.ant-btn-white{
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      span{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      &:hover{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
      }
    }
  }
`;

const ListGroup = Styled.div`
  margin: 28px 0 15px;
  min-height: 210px;
  .list-single{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    &:not(:last-child){
      margin-bottom: 12px;
    }
    .icon{
      display: inline-block;
      margin: ${({ theme }) => (theme.rtl ? '0px 0 -4px 10px' : '0px 10px -4px 0')};
    }
  }
`;

const Badge = Styled.span`
  display: inline-block;
  margin-bottom: 32px;
  padding: 5px 20px;
  border-radius: 16px;
  background: ${({ type, theme }) => theme[`${type}-color`]}10;
  color: ${({ type, theme }) => theme[`${type}-color`]};
  font-size: 13px;
  font-weight: 500;
  &.badge-dark{
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
  }
`;

const GalleryNav = Styled.nav`
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  margin-bottom: 25px;
  border-radius: 10px;
  padding: 0px 16px;
  @media only screen and (max-width: 767px){
    padding: 0 12px;
  }
  @media only screen and (max-width: 575px){
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
      a {
        position: relative;
        display: block;
        padding: 15px 0;
        margin: 0 12px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        @media only screen and (max-width: 767px){
          margin: 0 10px;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          background: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          content: "";
        }
        &.active{
          color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
          &:after{
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
`;

const GalleryCard = Styled.nav`
  border-radius: 10px;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};;
  box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
  figure{
    margin-bottom: 0;
  }
  .gallery-single-content{
    padding: 18px 25px 20px;
    .gallery-single-title{
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    p{
      font-size: 13px;
      margin-bottom: 0px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
`;

const UsercardWrapper = Styled.nav`
  .user-card-pagination{
    margin: 15px 0 40px 0;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    @media only screen and (max-width: 991px){
      text-align: center;
    }
  }
`;

const UserTableStyleWrapper = Styled.nav`
  table{
    tbody{
      td{
        .user-info{
          .user-name{
            font-size: 14px;
          }
        }
        span.status-text{
          font-size: 12px;
          padding: 0 12.41px;
          line-height: 1.9;
          font-weight: 500;
          border-radius: 12px;
          text-transform: capitalize;
          display: inline-block !important;
          background: #ddd;
          &.active{
            background-color: ${({ theme }) => theme['success-color']}15;
            color: ${({ theme }) => theme['success-color']};
          }
          &.deactivate{
            background-color: ${({ theme }) => theme['warning-color']}15;
            color: ${({ theme }) => theme['warning-color']};
          }
          &.blocked{
            background-color: ${({ theme }) => theme['danger-color']}15;
            color: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
  .ant-table-pagination.ant-pagination{
    width: 100%;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    margin-top: 0 !important;
    align-items: center;
    padding-top: 30px;
    @media only screen and (max-width: 767px){
      text-align: center;
    }
  }
  .contact-table{
    table{
      tr{
        th,
        td{
          &:first-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          }
          &:last-child{
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
          }
        }
      }
      .table-actions{
        button{
          width: 32px;
          height: 32px;
          padding: 0;
          background-color: transparent;
          &:hover{
            background-color: transparent;
          }
          &.ant-btn-primary{
            &:hover{
              color: #ADB4D2;
            }
          }
        }
      }
      tbody >tr.ant-table-row-selected >td{
        background-color: ${({ theme }) => theme[theme.mainContent]['primary-background']}10;
      }
    }
  }
`;

const UserCard = Styled.div`
  text-align: center;
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
  .card{
    position: relative;
    box-shadow: 0 5px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}03;
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
        margin-bottom: 20px;
        width: 100%;
        border-radius: 50%;
        max-width: 150px;
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
      font-size: 16px;
      margin-bottom: 6px;
      font-weight: 500;
      a{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        &:hover{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .card__designation{
      font-size: 13px;
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .card__social{
      margin-top: 16px;
      a{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
        &.facebook span.fa{
          color: #3B5998;
        }
        &.twitter span.fa{
          color: #1DA1F2;
        }
        &.dribble span.fa{
          color: #C2185B;
        }
        &.instagram span.fa{
          color: #FF0300;
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
    .card__actions{
      margin: -5px;
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 1499px){
        flex-direction: column;
      }
      .ant-btn-white{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        &:hover{
          border: 1px solid ${({ theme }) => theme['primary-color']};
        }
      }
      button{
        font-size: 13px;
        padding: 0px 22.7px;
        height: 38px;
        border-radius: 6px;
        box-shadow: 0px 3px 5px ${({ theme }) => theme[theme.mainContent]['light-text']}05;
        margin: 5px;
        &:hover{
          color: #fff !important;
          background-color: ${({ theme }) => theme['primary-color']} !important;
          svg,
          i{
            color: #fff;
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

const FaqCategoryBox = Styled.div`
  .faq-badge{
    font-weight: 400;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
  }
  ul{
    li{
      a{
        width: 100%;
        display: inline-block;
        font-weight: 500;
        position: relative;
        padding: ${({ theme }) => (!theme.rtl ? '12px 0 12px 20px' : '12px 20px 12px 0')};
        transition: all .3s ease;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        &.active{
          padding-left: 28px;
          &:before{
            opacity: 1;
            visibility: visible;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -15px;
          }
          &:after{
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 5px;
          }
          &.primary{
            &:after{
              background: ${({ theme }) => theme['primary-color']};
            }
          }
          &.secondary{
            &:after{
              background: ${({ theme }) => theme['secondary-color']};
            }
          }
          &.success{
            &:after{
              background: ${({ theme }) => theme['success-color']};
            }
          }
          &.warning{
            &:after{
              background: ${({ theme }) => theme['warning-color']};
            }
          }
          &.info{
            &:after{
              background: ${({ theme }) => theme['info-color']};
            }
          }
          &.danger{
            &:after{
              background: ${({ theme }) => theme['danger-color']}5;
            }
          }
        }
        &:before{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -25px;
          top: 0;
          height: 100%;
          width: 2px;
          border-radius: 10px;
          opacity: 0;
          visibility: hidden;
          content: '';
          background: ${({ theme }) => theme['primary-color']};
          transition: all .3s ease;
        }
        &:after{
          position: absolute;
          ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
          top: 50%;
          transform: translatey(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          content: '';
          background: ${({ theme }) => theme['primary-color']}50;
          transition: all .3s ease;
        }
        &.secondary{
          &:after{
            background: ${({ theme }) => theme['secondary-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['secondary-color']};
          }
        }
        &.success{
          &:after{
            background: ${({ theme }) => theme['success-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['success-color']};
          }
        }
        &.warning{
          &:after{
            background: ${({ theme }) => theme['warning-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['warning-color']};
          }
        }
        &.info{
          &:after{
            background: ${({ theme }) => theme['info-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['info-color']};
          }
        }
        &.danger{
          &:after{
            background: ${({ theme }) => theme['danger-color']}50;
          }
          &:before{
            background: ${({ theme }) => theme['danger-color']};
          }
        }
      }
    }
  }
`;

const FaqSupportBox = Styled.div`
  text-align: center;
  .ant-card-body{
    padding: 30px 50px 40px 50px !important;
    @media only screen and (max-width: 1599px){
      padding: 25px !important;
    }
    @media only screen and (max-width: 991px){
      padding: 25px !important;
    }
    @media only screen and (max-width: 575px){
      padding: 15px !important;
    }
  }
  figure{
    margin-bottom: 30px;
    img{
      width: 100%;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  button{
    padding: 0 30px;
    border-radius: 6px;
    height: 44px;
  }
`;

const FaqWrapper = Styled.div`
  .ant-card{
    .ant-card-body{
      h1{
        font-weight: 500;
      }
    }
  }
  .ant-collapse{
    margin-top: 25px;
    &.ant-collapse-borderless{
      background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    &.ant-collapse-icon-position-left{
      .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
      }
    }
  }
  .ant-collapse{
    .ant-collapse-item{
      // border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      border-bottom: 1px solid #041E5F;
      &.ant-collapse-item-active{
        box-shadow: 0px 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
      }
      .ant-collapse-header{
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        padding: 18px 25px !important;
        border-radius: 0px !important;
        @media only screen and (max-width: 575px){        
          padding: ${({ theme }) => (!theme.rtl ? '15px 45px 15px 15px' : '15px 15px 15px 45px')} !important;
        }
        .ant-collapse-header-text{
          color: #041E5F;
          font-size: 20px;
        }
        .ant-collapse-arrow{
          position: inherit;
          width: 10px;
          height: 10px;
          top: 2px !important;
          transform: translateY(0) !important;
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
  }
  

  .ant-collapse-content{
    box-shadow: 0 15px 40px ${({ theme }) => theme[theme.mainContent]['light-text']}15;
    .ant-collapse-content-box{
      border-top: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']} !important;
      padding: 20px 25px 30px !important;
      P{
        font-size: 15px;
        margin-bottom: 35px;
        line-height: 1.667;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 12px;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      .panel-actions{
        button{
          height: 36px;
          padding: 0 15px;
          &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }
`;

const SearchResultWrapper = Styled.div`
  .ant-select{
    border-radius: 100px;
    background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
    @media only screen and (max-width: 575px){
      width: 100% !important;
    }
  }
  .ant-select-selector{
    height: 50px !important;
    .ant-select-selection-search{
      height: 50px;
      width: 100% !important;
      input{
        height: 46px !important;
        border-radius: 100px;
        background-color: transparent !important;
      }
    }
    .ant-input-affix-wrapper{
      border: 0 none;
      background-color: transparent !important;
    }
    .ant-select-selection-search-input {
      border-radius: 100px;
    }
  }
  .search-filter-menu{
    margin: 22px 0 20px;
    @media only screen and (max-width: 575px){
      text-align: center;
    }
    ul{
      li{
        display: inline-block;
        margin-bottom: 10px;
        &:not(:last-child){
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        }
        a{
          font-size: 13px;
          font-weight: 500;
          display: block;
          padding: 5px 15px;
          border-radius: 5px;
          color: ${({ theme }) => theme[theme.mainContent]['light-text']};
          box-shadow: 0 3px 6px ${({ theme }) => theme[theme.mainContent]['light-text']}05;
          background: #fff;
          &.active{
            color: #fff;
            background: ${({ theme }) => theme['primary-color']};
          }
        }
      }
    }
  }
`;

const ResultList = Styled.div`
  .result-list-top{
    max-width: 1000px;
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    margin-bottom: 20px;
    padding-bottom: 24px;
  }
  .search-found-text{
    font-size: 16px;
    margin-bottom: 0;
    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    .result-count{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
    }
    .result-keyword{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
    }
    .result-count,
    .result-keyword{
      font-weight: 600;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
  }
  .result-limit{
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
    margin-bottom: 0;
    color: ${({ theme }) => theme['light-color']};
    @media only screen and (max-width: 767px){
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
      margin-top: 10px;
    }
  }
  .result-list-content{
    border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    padding-bottom: 14px;
    margin-bottom: 30px;
    ul{
      li{
        &:not(:last-child){
          margin-bottom: 35px;
        }
        .result-list-title{
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
          .search-keyword{
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
          }
        }
        p{
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
  }
  .ant-pagination{
    @media only screen and (max-width: 575px){
      text-align: center;
    }
  }
`;

const MaintananceWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  img{
    margin-bottom: 72px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 30px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
  }
  p{
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
`;

const ErrorWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  img{
    margin-bottom: 100px;
    max-width: 400px;
    width: 100%;
    @media only screen and (max-width: 575px){
      margin-bottom: 40px;
    }
  }
  .error-text{
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 35px;
    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
  }
  p{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 26px;
    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
  }
  button{
    height: 44px;
  }
`;

const ComingsoonStyleWrapper = Styled.div`
  text-align: center;
  background: ${({ theme }) => theme[theme.mainContent]['white-background']};
  border-radius: 10px;
  padding: 75px 0 30px;
  margin-bottom: 30px;
  @media only screen and (max-width: 1150px){
    padding: 50px 0 6px;
  }
  @media only screen and (max-width: 991px){
    padding: 20px 0 0px;
  }
  @media only screen and (max-width: 575px){
    margin-top: 10px;
  }
  .ninjaDash-logo{
    margin-bottom: 35px;
    @media only screen and (max-width: 1150px){
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 767px){
      margin-bottom: 25px;
    }
    img{
      max-width: 170px;
    }
  }
  >.ant-card{
    box-shadow: 0 0;
  }
  .coming-soon-content{
    h1{
      font-size: 58px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 1299px){
        font-size: 48px;
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 991px){
        font-size: 40px;
        line-height: 1.45;
      }
      @media only screen and (max-width: 479px){
        font-size: 30px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    p{
      font-size: 17px;
      max-width: 100%;
      margin-top: 25px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      @media only screen and (max-width: 991px){
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 767px){
        font-size: 16px;
      }
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .countdwon-data{
    display: flex;
    justify-content: center;
    >span{
      &:not(:last-child){
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 50px;
        @media only screen and (max-width: 575px){
          margin-right: 20px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        }
      }
    }
  }
  .strikingDash-countdown{
    .countdown-time{
      font-size: 42px;
      font-weight: 600;
      line-height: 1.45;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 32px;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
      }
      @media only screen and (max-width: 375px){
        font-size: 20px;
      }
    }
    .countdown-title{
      font-size: 16px;
      font-weight: 400;
      display: block;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      @media only screen and (max-width: 375px){
        font-size: 15px;
      }
    }
  }
  .subscription-form{
    margin-top: 40px;
    @media only screen and (max-width: 991px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 1150px){
      margin-top: 35px;
    }
    .subscription-form-inner{
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 375px){
        flex-flow: column;
        margin-bottom: 20px;
      }
      .ant-form-item-control-input{
        margin-right: 20px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        @media only screen and (max-width: 375px){
          margin-right: 0;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-input{
          min-width: 320px;
          padding: 12px 20px;
          @media only screen and (max-width: 767px){
            min-width: 100%;
          }
          &::placeholder{
            color: #041E5F !important;
          }
        }
      }
      button{
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
  .coming-soon-social{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 25px;
    }
    @media only screen and (max-width: 767px){
      margin-top: 30px;
    }
    ul{
      margin-bottom: 30px;
      li{
        display: inline-block;
        &:not(:last-child){
          margin-right: 15px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          i,
          span,
          svg{
            color: #fff;
          }
          &.facebook{
            background-color: #3B5998;
          }
          &.twitter{
            background-color: #1DA1F2;
          }
          &.globe{
            background-color: #DD3E7C;
          }
          &.github{
            background-color: #23282D;
          }
        }
      }
    }
    p{
      font-size: 14px;
      color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
  }
`;

const AddUser = Styled.div`
  .form-title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 36px;
  }
  .add-user-bottom{
    margin-top: 20px;
    button + button{
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
    .ant-btn.ant-btn-light{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
      background: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    &.text-right{
      @media only screen and (max-width: 767px){
        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')} !important;
      }
    }
  }
  .card-nav{
    ul{
      display: flex;
      flex-wrap: wrap;
      margin: 0px -10px;
      @media only screen and (max-width: 575px){
        /* justify-content: center; */
      }
      li{
        margin: 4px 10px !important;
        @media only screen and (max-width: 575px){
          margin: 6px 10px !important;
        }
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 26px;
          @media only screen and (max-width: 575px){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          }
        }
        a{
          position: relative;
          padding: 22px 0;
          font-size: 14px;
          font-weight: 500;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          @media only screen and (max-width: 575px){
            padding: 0;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
            bottom: -3px;
            width: 100%;
            height: 2px;
            border-radius: 4px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background-color: ${({ theme }) => theme['primary-color']};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          &.active{
            color: ${({ theme }) => theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
            svg,
            img,
            i,
            span{
              color: ${({ theme }) => theme['primary-color']};
            }
          }
          svg,
          img,
          i,
          span{
            width: 16px;
            height: 16px;
            position: relative;
            top: 4px;
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
    }
  }

  /* Photo Upload */
  .photo-upload{
    position: relative;
    max-width: 260px;
    margin-bottom: 30px;
    .ant-upload-select{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 85px;
      bottom: 5px;
      z-index: 10;
      background-color: ${({ theme }) => theme['white-color']};
      span{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        z-index: -1;
        background-color: ${({ theme }) => theme['primary-color']};
      }
      svg,
      i,
      span{
        color: ${({ theme }) => theme['white-color']};
      }
      a{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    img{
      border-radius: 50%;
    }
    .info{
      background-color: transparent;
    }
    figcaption{
      ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
      .info{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }

  .user-work-form{
    .ant-picker{
      padding: 0 15px 0 0;
    }
  }
  .user-info-form{
    .ant-select-single .ant-select-selector .ant-select-selection-item{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
  .social-form{
    .ant-form-item-control-input-content{
      .ant-input-prefix{
        width: 44px;
        height: 44px;
        border-radius: 4px;
      }
    }
    .ant-form-item-control-input{
      height: 44px;
      .ant-input-affix-wrapper{
        &:hover,
        &:focus,
        &.ant-input-affix-wrapper-focused{
          border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        .ant-input{
          height: 42px;
          ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
      }
    }
    .ant-form-item {
      .ant-form-item-control-input {
        .ant-input-affix-wrapper{
          padding: 0 20px 0 10px;
        }
      }
    }
    .ant-input-prefix{
      position: relative;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: -11px;
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme['primary-color']};
        i,
        svg,
        span.fa{
          color: #fff;
          font-size: 16px;
        }
        .fa-facebook{
          background-color: #3B5998;
        }
        .fa-twitter{
          background-color: #38B8FF;
        }
        .fa-linkedin{
          background-color: #2CAAE1;
        }
        .fa-instagram{
          background-color: #AB017D;
        }
        .fa-github{
          background-color: #292929;
        }
        .fa-youtube{
          background-color: #FE0909;
        }
      }
    }
  }
`;
const ChangelogWrapper = Styled.div`
   .ant-card-head{
     .ant-card-head-title{
       .v-num{
        $: 0;
         font-size: 18px;
         color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
       }
       .sign{
         font-size: 18px;
         color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
         display: inline-block;
         margin: 0 8px;
       }
       .rl-date{
        $: 0;
         font-weight: 400;
         font-size: 16px;
       }
     }
   }
  .version-list{
    .version-list__single{
      &:not(:last-child){
        margin-bottom: 30px;
      }
      ul{
        li{
          position: relative;
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          &:not(:last-child){
            margin-bottom: 12px;
          }
          &:after{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            content: "";
          }
        }
        &.version-primary{
          li{
            &:after{
              background-color: ${({ theme }) => theme['primary-color']};
            }
          }
        }
        &.version-success{
          li{
            &:after{
              background-color: ${({ theme }) => theme['success-color']};
            }
          }
        }
        &.version-info{
          li{
            &:after{
              background-color: ${({ theme }) => theme['info-color']};
            }
          }
        }
      }
    }
    .version-list__top{
      .badge{
        font-size: 12px;
        line-height: 1.2;
        letter-spacing: 1.4px;
        font-weight: 500;
        display: inline-block;
        padding: 5px 8px;
        height: auto;
        border-radius: 4px;
        margin-bottom: 14px;
        color: #fff;
        &.badge-primary{
          background-color: ${({ theme }) => theme['primary-color']};
        }
        &.badge-info{
          background-color: ${({ theme }) => theme['info-color']};
        }
        &.badge-success{
          background-color: ${({ theme }) => theme['success-color']};
        }
      }
    }
  }

  .changelog-accordion{
    margin-top: 30px;
    .ant-collapse{
      background-color: transparent;
      border: 0 none;
    }
    .ant-collapse-item{
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      &:not(:last-child){
        margin-bottom: 20px;
      }
      &:last-child{
        border-radius: 6px;
        .ant-collapse-header{
          border-radius: 6px;
        }
      }
    }
    .ant-collapse-header{
      border-radius: 6px;
      padding: 20px 30px 18px 30px !important;
      @media only screen and (max-width: 575px){
        padding: 16px 20px 14px 20px !important;
      }
      .ant-collapse-arrow{
        position: static;
        top: 0 !important;
        svg,
        img{
          width: 14px;
        }
      }
      .v-num{
        font-size: 18px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        @media only screen and (max-width: 575px){
          font-size: 16px;
        }
      }
      .rl-date{
        font-size: 16px;
        font-weight: 400;
        @media only screen and (max-width: 575px){
          font-size: 14px;
        }
      }
    }
    .ant-collapse-content{
      border-radius: 0 0 6px 6px;
      > .ant-collapse-content-box{
        padding: 30px 30px 25px;
      }
    }
  }
`;
const VersionHistoryList = Styled.div`
  .history-title{
    font-size: 11px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
  }
  .v-history-list{
    li{
      display: flex;
      justify-content: space-between;
      &:not(:last-child){
        margin-bottom: 24px;
      }
      .version-name{
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      }
      .version-date{
        font-size: 14px;
        color: ${({ theme }) => theme[theme.mainContent]['light-gray-text']};
      }
    }
  }
`;

const TestimonialWrapper = Styled.div`
  position: relative;
  padding: 0 150px;
  .button-group {
      width: 100%;   
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      left: 0;
  }
`;

const TestimonialStyleWrapper = Styled.div`
  .ant-card{
    direction: ltr;
  }
  .ant-card-body{
    padding: 0 !important;
  }
  .testimonial-block{
    .swiper-button-prev,
    .swiper-button-next{
      width: 44px;
      height: 44px;
      border-radius: 50%;
      box-shadow: 0 3px 10px ${({ theme }) => theme[theme.mainContent]['dark-text']}16;
      @media only screen and (max-width: 991px){
        width: 35px;
        height: 35px;
      }
      &:after{
        line-height: 0;
      }
    }
    .testimonial-title{
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 50px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 24px;
      }
    }
    &.theme-1{
      padding: 60px 100px 75px 100px;
      @media only screen and (max-width: 1599px){
        padding: 60px 50px 75px 50px;
      }
      @media only screen and (max-width: 1399px){
        padding: 50px 25px 45px 25px;
      }
      .testimonial-title{
        margin-bottom: 0;
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-80%);
        z-index: 22;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
      }
      .swiper-button-prev{
        left: 10px;
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-left.png')}');
        }
      }
      .swiper-button-next{
        right: 10px;
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-right.png')}');
        }
      }
      .swiper-pagination{
        .swiper-pagination-bullet{
          width: 10px;
          height: 10px;
          background-color: #DCDDFA;
          opacity: 1;
          &.swiper-pagination-bullet-active{
            background-color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .swiper-container{
        padding: 40px 25px 60px;
      }
      .swiper-slide {
        text-align: center;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0 10px 20px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
        @media only screen and (max-width: 1399px){
          padding: 25px;
        }
        @media only screen and (max-width: 479px){
          padding: 25px 15px;
        }
        &.swiper-slide-active{
          box-shadow: 0 20px 50px ${({ theme }) => theme[theme.mainContent]['light-text']}20;
        }
      }
      .testimonial-block__single{
          figure{
            margin-bottom: 0;
            img{
              margin-bottom: 12px;
            }
          }
          .client-name{
            font-size: 15px;
            margin-bottom: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
          }
          .client-designation{
            font-size: 13px;
            font-weight: 400;
            opacity: .70;
            margin-bottom: 26px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
          .client-review{
            font-size: 16px;
            margin-bottom: 0;
            line-height: 1.75;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
          }
      }
    }
    &.theme-2{
      padding: 60px 100px 75px 100px;
      background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
      @media only screen and (max-width: 1399px){
        padding: 60px 40px 75px 40px;
      }
      @media only screen and (max-width: 991px){
        padding: 50px 70px 55px 70px;
      }
      @media only screen and (max-width: 575px){
        padding: 30px 30px 45px 30px;
      }
      @media only screen and (max-width: 375px){
        padding: 30px 0 45px 0;
      }
      .testimonial-title{
        @media only screen and (max-width: 991px){
          margin-bottom: 20px;
        }
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 22;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 991px){
          top: auto;
          bottom: -6px;
        }
      }
      .swiper-button-prev{
        left: 5px;
        @media only screen and (max-width: 991px){
          left: 42%;
        }
        @media only screen and (max-width: 575px){
          left: 36%;
        }
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-left.png')}');
        }
      }
      .swiper-button-next{
        right: 5px;
        @media only screen and (max-width: 991px){
          right: 42%;
        }
        @media only screen and (max-width: 575px){
          right: 36%;
        }
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-right.png')}');
        }
      }
      .swiper-container{
        padding: 0 20px;
        @media only screen and (max-width: 991px){
          padding: 30px 0 70px 0;
        }
      }
      .swiper-slide {
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-radius: 8px;
        padding: 40px;
        box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
        @media only screen and (max-width: 479px){
          padding: 24px;
        }
      }
      .testimonial-block__single{
        position: relative;
        .quotation{
          position: absolute;
          ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 40px;
          top: 40px;
          @media only screen and (max-width: 479px){
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 25px;
          }
          img{
            @media only screen and (max-width: 479px){
              max-width: 40px;
            }
          }
        }
      }
      .testimonial-block__author{
        direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        img{
          max-width: 70px;
          margin-right: 18px;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 18px;
          @media only screen and (max-width: 479px){
            max-width: 60px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
        .author-info{
          .client-name{
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 5px;
          }
          .client-designation{
            font-size: 13px;
            opacity: .70;
            margin-bottom: 0;
          }
        }
      }
      .testimonial-block__review{
        direction: ${({ theme }) => (theme.rtl ? 'rtl' : 'ltr')};
        p{
          margin-bottom: 0;
          line-height: 1.75;
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
    &.theme-3{
      padding-top: 95px;
      @media only screen and (max-width: 991px){
        padding-top: 42px;
      }
      .testimonial-title{
        margin-bottom: 0;
      }
      .swiper-pagination {
        position: absolute;
        height: fit-content;
        top: 45px;
        left: 50%;
        transform: translateX(-50%);
        @media only screen and (max-width: 575px){
          top: 20px;
        }
        .pagination-thumb{
          display: inline-block;
          width: auto;
          height: auto;
          opacity: .4;
          margin: 4px 0;
          img{
            max-width: 70px;
            @media only screen and (max-width: 991px){
              max-width: 40px;
            }
            @media only screen and (max-width: 479px){
              max-width: 25px;
            }
          }
          &.swiper-pagination-bullet-active{
            position: relative;
            z-index: 22;
            opacity: 1;
            img{
              transform: scale(1.4);
            }
          }
        }
      }
      .testimonial-block__single{
        padding: 175px 0 86px;
        @media only screen and (max-width: 991px){
          padding: 135px 30px 36px;
        }
        @media only screen and (max-width: 575px){
          padding: 80px 30px 40px;
        }
      }
      .testimonial-block__inner{
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }
      .testimonial-block__review{
        p{
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
      .testimonial-block__author{
        .author-info{
          margin-top: 8px;
        }
        .author-name{
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 3px;
        }
        .author-designation{
          opacity: .70;
          font-size: 14px;
        }
      }
    }
    &.theme-4{
      padding: 60px 100px 75px 100px;
      background-color: ${({ theme }) => theme[theme.mainContent]['main-background']};
      @media only screen and (max-width: 1599px){
        padding: 60px 60px 75px 60px;
      }
      @media only screen and (max-width: 991px){
        padding: 50px 30px 48px 30px;
      }
      @media only screen and (max-width: 375px){
        padding: 50px 0 48px 0;
      }
      .swiper-button-prev,
      .swiper-button-next{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 22;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        @media only screen and (max-width: 575px){
          top: auto;
          bottom: -6px;
        }
      }
      .swiper-button-prev{
        left: 100px;
        @media only screen and (max-width: 1599px){
          left: 50px;
        }
        @media only screen and (max-width: 575px){
          left: 36%;
        }
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-left.png')}');
        }
      }
      .swiper-button-next{
        right: 100px;
        @media only screen and (max-width: 1599px){
          right: 50px;
        }
        @media only screen and (max-width: 575px){
          right: 36%;
        }
        &:before{
          font-family: 'SF Pro Display', sans-serif;
          content: url('${require('../../static/img/icon/arrow-right.png')}');
        }
      }
      .swiper-container{
        @media only screen and (max-width: 575px){
          padding: 0 0 70px;
        }
      }
      .testimonial-block__inner{
        max-width: 1000px;
        margin: 0 auto;
        padding: 50px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
        border-radius: 6px;
        text-align: center;
        @media only screen and (max-width: 1599px){
          max-width: 570px;
          padding: 30px;
        }
        @media only screen and (max-width: 991px){
          max-width: 450px;
        }
      }
      .testimonial-block__author{
        img{
          max-width: 100px;
          margin-bottom: 26px;
        }
      }
      .author-info{
        margin-top: 18px;
        .client-name{
          font-size: 15px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .client-designation{
          font-size: 13px;
          opacity: .70;
          margin-bottom: 0;
        }
      }
      .testimonial-block__review{
        p{
          margin-bottom: 0;
          line-height: 1.75;
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
      }
    }
  }
  .testimonial-title{
    text-align: center;
  }
`;

const UserCarrdTop = Styled.div`
  .ant-page-header-heading-extra{
    .btn-add_new{
      margin-right: 15px;
      @media only screen and (max-width: 575px){
        margin-right: 6px;
      }
    }
    .action-btn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      color: ${({ theme }) => theme[theme.mainContent]['light-text']};
      @media only screen and (max-width: 575px){
        height: 30px;
        width: 30px;
      }
      @media only screen and (max-width: 375px){
        height: 28px;
        width: 28px;
      }
      &.active{
        background-color: #fff;
        color: ${({ theme }) => theme['primary-color']};
      }
      svg{
        width: 14px;
        height: 14px;
      }
    }
  }
`;

const SupportTopWrap = Styled.div`
  background-color: ${({ theme }) => theme['bg-color-light']};
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  margin-bottom: 50px;
  .ninjadash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .ninjadash_support-content{
    .ninjadash_support-content__title{
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 767px){
        font-size: 26px;
      }
    }
    p{
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .btn-ticket{
      margin-top: 15px;
      height: 46px;
      font-size: 14px;
      font-weight: 500;
      @media only screen and (max-width: 575px){
        margin-top: 0;
      }
    }
  }
  .ninjadash_support-img{
    margin-top: 50px;
    @media only screen and (max-width: 1150px){
      margin-top: 0;
    }
    img{
      width: 100%;
      @media only screen and (max-width: 575px){
        margin-top: 30px;
      }
    }
  }
`;

const SupportContentWrap = Styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B810;
  padding: 100px 0 50px 0;
  @media only screen and (max-width: 1599px){
    padding: 50px 0 20px 0;
  }
  @media only screen and (max-width: 1199px){
    margin-bottom: 30px;
  }
  .ninjadash-support-container{
    max-width: 1110px;
    margin: 0 auto;
    @media only screen and (max-width: 1599px){
      max-width: 990px;
    }
    @media only screen and (max-width: 1399px){
      max-width: 790px;
    }
    @media only screen and (max-width: 1150px){
      max-width: 100%;
      padding: 30px
    }
  }
  .ninjadash-support-link-item{
    max-width: 350px;
    margin: 0 auto 30px;
    padding: 30px;
    text-align: center;
    border-radius: 6px;
    transiiton: .35s;
    border: 1px solid ${({ theme }) => theme['border-color-light']};
    &:hover{
      box-shadow: 0 15px 25px #9299BB15;
      border-color: #fff;
    }
    .ninjadash-support-link-item__icon{
      height: 80px;
      width: 80px;
      margin: 0 auto 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &.primary{
        background-color: ${({ theme }) => theme['primary-color']};
      }
      &.success{
        background-color: ${({ theme }) => theme['success-color']};
      }
      &.info{
        background-color: ${({ theme }) => theme['info-color']};
      }
    }
    .ninjadash-support-link-item__title{
      font-size: 20px;
      font-weight: 500;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ninjadash-support-link-item__content{
      .btn-link{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background-color: #EFEFFE;
        border-radius: 20px; 
        margin: 36px auto 0;
        font-size: 15px;
        padding: 0 24.5px;
        width: fit-content;
      }
    }
  }
  .ninjadash_faq-block{
    margin-top: 70px;
    @media only screen and (max-width: 1150px){
      margin-top: 20px;
    }
    .ant-card{
      border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
      .ant-card-body{
        h1{
          color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
      }
    }
    .ant-collapse-item {
      &.ant-collapse-item-active{
        box-shadow: 0 0;
      }
      .ant-collapse-header{
        background-color: #fff !important;
        padding: 19.5px 25px !important
        .ant-collapse-arrow{
          color: #9299B8;
        }
      }
      .ant-collapse-content{
        box-shadow: 0 0;
      }
    }
  }
`;

const TermsConditionsStyle = Styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 575px){
    margin-top: 10px;
  }
  .ninjadash-term-condition-top{
    min-height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({ theme }) => theme[theme.mainContent]['primary-transparent']};
    @media only screen and (max-width: 991px){
      min-height: 240px;
    }
    @media only screen and (max-width: 475px){
      min-height: 140px;
    }
    .ninjadash-term-condition-top__title{
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 110px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 36px;
        margin-bottom: 100px;
      }
      @media only screen and (max-width: 767px){
        font-size: 30px;
        margin-bottom: 0;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
      }
    }
  }
  .ninjadash-term-condition-content{
    padding: 1px 50px 50px;
    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    box-shadow: 0 10px 30px rgba(173,181,217,.10);
    max-width: 770px;
    border-radius: 10px;
    margin: -125px auto auto;
    @media only screen and (max-width: 767px){
      max-width: 560px;
      margin: 30px auto auto;
    }
    @media only screen and (max-width: 575px){
      padding: 1px 30px 30px;
    }
    h3{
      font-size: 30px;
      font-weight: 600;
      margin: 50px 0 30px;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
      @media only screen and (max-width: 991px){
        font-size: 26px;
        margin: 40px 0 20px;
      }
      @media only screen and (max-width: 575px){
        font-size: 26px;
        margin: 30px 0 15px;
      }
    }
    p{
      font-size: 16px;
      line-height: 1.69;
      color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
  }
`;

const Background = Styled.div`
  background-image: url(${DashboardImg});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const WizardBlock = Styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 5%;
    padding-bottom: 5%;
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
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px) {
                    padding: 15px !important;
                }
            }
        }
    }
    
`;

const IdentityWrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #000;
    padding:10px 70px 10px 70px;
    .required-container {
      display: flex;
      flex-direction: column;
      background-color: rgba(47, 50, 65, 0.10);
      border-radius: 10px;
      padding: 8px 28px;
      margin: 12px 0px
    }
    .required-block {
      display: flex;
      align-items: center;
      padding: 4px;
    }
       .passport-btn{
             min-width: 200px;
             border-radius:10px;
             padding:10px 15px 10px 15px important;
             border:2px solid rgba(0, 66, 168, 1);
             color:rgba(0, 66, 168, 1);
             background-color: transparent;
       }
    .file-name{
      display: flex;
      margin-left : 5px;
      padding: 2px;
       align-items: center;
      border-radius: 6px;
      color: gray;

    }
    .choose-button {
      gap: 6px;
      min-width: 160px;
      border: 1px solid #0042A8;
      color: #0042A8;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 6px;
      padding: 8px;
      background-color:transparent
    }
    .choose-input {
      border: 1px solid transparent;
      border-radius: 10px;
      width: 400px;
      margin-right: 24px;
      background: rgba(47, 50, 65, 0.10);
      color: #0042A8
      border-radius: 6px;
      padding: 8px;
    }
    .img-container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .img-block {
      width: 229px;
      height: 256px;
      border-radius: 20px;
      background: rgba(47, 50, 65, 0.10);
      margin-bottom: 12px;
    }
    .input-checkbox {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: rgba(47, 50, 65, 0.10);
      margin-right: 10px
    }
    .ml-2{
      margin-left:6px;
    }
`;

const ReviewWrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align:center;
    padding: 10px;

    .warning{
      color: #AC0A0A;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
    }

    .title-first{
      color: #041E5F;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin: 32px 0px;
    }

    .input-wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .form-item{
      width: 46%;
    }

    .card-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 20px;
      background: rgba(47, 50, 65, 0.10);
      padding: 20px;
      cursor: pointer;
    }
    .title-icon-block {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
    }
    .title {
      color: rgba(47, 50, 65, 1);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      padding-left: 12px;
    }
    .img-container{
      width: 100%;
      height: 240px;
    }
    .error-msg{
      font-size: 15px;
      margin-top: 0px;
      margin-left: 10px;
      color: #ff0f0f;
    }
    .verification-block{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .proof-block{
      width: 100%;
      min-height: 100px;
      margin-right: 4px;
      border: 1px solid #041E5F;
      padding: 20px 8px 0px 8px;
    }
    .passport-block{
      width: 100%;
      min-height: 100px;
      margin-left: 4px;
      border: 1px solid #041E5F;
      padding: 20px 8px 0px 8px;
    }
`;

const WizardWrapper = Styled.div`
    color:#eee;
    &.ninjadash-wizard-page{
        padding: 25px 0;
        width: 107%;
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
          width: 100%;
         }
    }
    &.bordered-wizard{
        padding: 0;
    }
    .steps-action button.btn-next svg {
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .steps-action button.btn-prev svg {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-container > .ant-steps-item-tail{
        @media only screen and (max-width: 575px) {
            display: none;
        }
    }
    .ant-steps {
       text-align: -webkit-center;
        @media only screen and (max-width: 767px) {
            flex-flow: column;
            align-items: center;
        }
    }
    .ant-steps-item-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        @media only screen and (max-width: 991px) {
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                background: #C5CAE1;
                top: 35px !important;
                padding: 20px 0 8px !important;
            }
        }
        .ant-steps-item-content{
            @media only screen and (max-width: 480px) {
                min-height: auto !important;
            }
        }
    }
    .ant-steps-item-container::after {
        top: 25px !important;
        margin-left: 10px;
    }
  
    .steps-content{
        margin-top: 40px !important;
        @media only screen and (max-width: 1599px) {
            min-height: 252px !important;
        }
        @media only screen and (max-width: 1199px) {
            margin-top: 45px !important;
        }
        @media only screen and (max-width: 575px) {
            margin-top: 30px !important;
        }
      }
      .jaqrKl{
        width: 100% !important;
        display: flex !important;
      }
      .jaqrKl .steps-action {
        width: 44% !important;
      }
      // .jaqrKl .step-action-wrap .step-action-inner {
      //   width: 580px;
      //   padding: 0px 25px;
      // }
      .ant-btn-primary {
        margin-left: 12px !important;
      }
    .ant-steps-item-container{
        position: relative;
        &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 100%;
            top: 35px;
            color: #333;
            background-image: url(${require('../../static/img/progress.png')});
            width: 110%;
            height: 6px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent !important;
            content: '';
            @media only screen and (max-width: 1399px) {
                width: 120%;
            }
            @media only screen and (max-width: 991px) {
                display: none;
            }
        }
        .ant-steps-item-tail{
            &:after{
                height: 80%;
            }
        }
    }
    .wizard-step-item{
        .ant-steps-item-container{
            &:after{
                // background-image: url(${require('../../static/img/progress.png')});
            }
        }
    }
    .wizard-steps-item-active{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../../static/img/progress-active.png')});
            }
        }
    }
    .success-step-item,
    .ant-steps-item-finish{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../../static/img/progress-success.png')});
            }
        }
    }
    .ant-upload-list-item-name{
      max-width: 6.5rem;
    }
    .ant-steps-item{
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 25px !important' : '0 25px 0 0 !important')} ;
        @media only screen and (max-width: 767px) {
            padding: 0 !important;
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        &:last-child{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 45px !important;
            @media only screen and (max-width: 767px) {
                padding: 0 !important;
            }
            .ant-steps-item-container{
                &:after{
                    display: none;
                }
            }
        }
        &:last-child{
            @media only screen and (max-width: 991px) {
                flex: 1 1;
            }
        }
        .ant-steps-item-title{
            font-size: 15px;
            font-weight: 500;
            margin-top: 8px;
            padding-right: unset !important;
            
            color: ${({ theme }) => theme['gray-solid']} !important;
            @media only screen and (max-width: 1210px) {
                padding: ${({ theme }) => (!theme.rtl ? '0 0 0 20px' : '0 20px 0 0')};
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
            &:after{
                display: none;
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
        .ant-steps-item-icon{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border: 0 none;
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            box-shadow: 10px 0 20px ${({ theme }) => theme[theme.mainContent]['gray-text']}15;
            @media only screen and (max-width: 767px) {
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
            }
            .ant-steps-icon{
                font-size: 16px;
                font-weight: 500;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                @media only screen and (max-width: 767px) {
                    font-size: 15px;
                }
            }
        }
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                background-color: ${({ theme }) => theme['primary-color']};
                .ant-steps-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
                }
                svg{
                    color: #fff;
                }
            }
            .ant-steps-item-title{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']} !important;
            }
            &.ant-steps-item-finish{
                .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['light-text']}; !important;
                }
            }
        }
        &.ant-steps-item-finish{
            .ant-steps-item-icon{
                background: ${({ theme }) => theme['success-color']} !important;
                .ant-steps-icon{
                    color: #fff;
                }
                .ant-steps-finish-icon{
                    svg{
                        color: #fff;
                    }
                }
                
            }
        }
    }
    .basic-form-inner{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #000;
          @media only screen and (max-width: 575px){
            width: 100%
        }
        .ant-form-item{
            .ant-input-password.ant-input-affix-wrapper{
                background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            }
        }
        .ant-form-item-label{
            label{
                font-weight: 400;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
        .ant-form-item-control-input{
            .ant-input{
                padding: 12px 20px;
                background-color: transparent !important;
            }
        }
    }
    .steps-action{
        .btn-next{
            &:focus{
                background-color: ${({ theme }) => theme['primary-color']};
            }
        }
        button.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .atbd-form-checkout{
      margin-top:20px;
        .ant-input-affix-wrapper-rtl{
            input[type="password"]{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            }
        }
       h1{
            font-size: 20px;
            font-weight: 500;
            // margin-bottom: 46px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            @media only screen and (max-width: 991px){
                font-size: 18px;
                margin-bottom: 22px;
            }
            @media only screen and (max-width: 479px){
                font-size: 16px;
            }
       }
       .ant-form-item-label{
           label{
               font-size: 15px;
           }
       }
       input::placeholder{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
       .input-message{
           margin-top: -6px;
           display: inline-block;
           font-size: 13px;
           color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
       }

       .shipping-selection{
           > .ant-card{
               .ant-card-body{
                    border: 1px solid ${({ theme }) => theme['border-color-light']};
               }
           }
           .ant-card{
               .ant-card{
                   margin-bottom: 0 !important;
               }
           }
           .ant-radio-group {
               .ant-radio-wrapper{
                    display: flex;
                    align-items: flex-start;
                    span + span{
                        width: 100%;
                        min-height: 60px;
                    }
                   .ant-radio{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                    }
               }
           }
           .ant-form-item-control-input-content{
                input{
                    @media only screen and (max-width: 479px) {
                        width: 100% !important;
                        margin-bottom: 6px;
                    }
                }
               .input-leftText{
                   ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                   @media only screen and (max-width: 479px) {
                        display: block;
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
                    }
               }
           }
           .shipping-selection__card{
               .shipping-selection__card--inner{
                   background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                   border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
               }
               .ant-card .ant-card{
                   border: 0 none;
                   border-radius: 20px;
                   box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
               }
               .ant-radio-wrapper{
                    .ant-radio{
                        margin-top: 30px;
                    }
                    span + span{
                        padding: 0;
                    }
               }
               .cvv-wrap{
                   input{
                       max-width: 120px;
                   }
                   .input-leftText{
                       color: ${({ theme }) => theme['color-info']};
                   }
               }
            }
           .shipping-selection__paypal{
               margin-bottom: 20px;
               .ant-radio-wrapper{
                   span + span{
                       display: flex;
                       justify-content: space-between;
                       @media only screen and (max-width: 375px){
                            img{
                                display: none;
                            }
                        }
                   }
               }
           }
           .shipping-selection__paypal,
           .shipping-selection__cash{
                .ant-radio-wrapper{
                    align-items: center;
                    span + span{
                        font-size: 15px;
                        font-weight: 500;
                        padding: 0 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 10px;
                        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                    }
                }
           }
           .supported-card{
               align-items: center;
               justify-content: space-between;
               margin-bottom: 20px;
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
               .supported-card_logos{
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                   img + img{
                       ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                   }
               }
           }
       }
   }
   .profile-hints{
       p{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           font-size: 15px;
           span{
               color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
           }
       }
   }
   .atbd-finish-order{
       max-width: 540px;
       margin: 0 auto;
       padding: 30px;
       min-height: 248px;
       border-radius: 6px;
       border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
       h1,
       h2,
       h3,
       h4,
       h5,
       h6{
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
       }
       .ant-checkbox{
           &:hover{
               .ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['success-color']};
               }
           }
       }
       .ant-checkbox-checked{
           &:after{
                border-color: ${({ theme }) => theme['success-color']};
           }
           .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .ant-checkbox-input{
           &:focus + .ant-checkbox-inner{
            border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .checkbox-label{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
       }
   }
   .atbd-review-order{
       > .ant-card{
           > .ant-card-body{
               border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
           }
       }
       h1{
           font-size: 20px;
           font-weight: 500;
           margin-bottom: 45px;
           color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
           @media only screen and (max-width: 479px) {
                font-size: 16px;
                margin-bottom: 25px;
            }
       }

       .atbd-review-order__single{
           .ant-card{
               .ant-card-body{
                   background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
               }
           }
           .ant-radio-wrapper{
                display: flex;
                align-items: flex-start;
            }
            .ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px ${({ theme }) => theme['gray-solid']}10;
                }
            }
            h1{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .method-info{
                margin-top: -2px;
                font-weight: 500;
                color: color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                img{
                    margin-top: -4px;
                    max-width: 40px;
                }
            }
            .btn-addCard{
                font-weight: 500
                display: inline-block;
                font-size: 13px;
                margin-top: 20px;
                color: ${({ theme }) => theme['info-color']};
            }

            .table-cart{
                border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                .cart-single-t-price{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
                .ant-table{
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                }
                .ant-table-content{
                    padding-bottom: 10px;
                }
                thead{
                    display: none;
                }
                .ant-table-tbody{
                    .ant-table-row{
                        &:hover{
                            box-shadow: 0 0;
                            td{
                                background-color: ${({ theme }) =>
                                  theme[theme.mainContent]['main-background-light']} !important;
                            }
                        }
                    }
                    >tr >td{
                        padding: 8px 15px;
                        &:first-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                        }
                        &:last-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                    }
                }
            }
            .cart-single{
                .cart-single__info{
                    h1{
                        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                        margin-bottom: 8px;
                    }
                }
            }
       }

        .atbd-review-order__shippingTitle{
            h1{
                display: flex;
                margin-bottom: 30px;
                justify-content: space-between;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                a{
                    font-size: 14px;
                    display: inline-flex;
                    align-items: center;
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                    svg{
                        width: 14px;
                        height: 14px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                    }
                }
            }
        }

        .atbd-review-order__shippingInfo{
            .shipping-info-text{
                margin: -4px 12px 0;
                h1{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .btn-addNew{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['info-color']};
            }
        }
   }
   .invoice-summary-inner{
        .summary-total{
            margin-bottom: 0;
        }
   }
   .summary-list{
        margin: 20px 0 10px !important;
        .summary-list-text{
            font-size: 15px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
   }

   .checkout-successful{
       text-align: center;
        > .ant-card{
            > .ant-card-body{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        .ant-card {
            box-shadow: 0 10px 30px ${({ theme }) => theme[theme.mainContent]['light-text']}10;
            .ant-card{
                padding: 25px;
                    margin-bottom: 0 !important;
            }
        }
        .icon-success{
            width: 34px;
            height: 34px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: ${({ theme }) => theme['success-color']};
            svg{
                width: 18px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
   }
   .terms-condition-block {
    width: 107%;
    text-align: center;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    a {
      color: #9D9D9D;
    }
   }
`;

const SummaryWrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #000;
    padding:10px 70px 10px 70px;
`;

const MainStyle = Styled.div`
  width: 100%;
  max-height:100%;
  min-height:100vh;
  overflow: auto;
  background: linear-gradient(to right, #041E5F 50%, #FFF 50%);

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

@media (min-width: 768px) {
.left-container{
 width: 50%;
 background-color:#041E5F;
 float: left;
 max-height:100%;
 min-height:100vh;
 overflow: auto;
}

.right-container{
  position:relative;
  width: 50%;
  float: right;
  max-height:100%;
  min-height:100vh;
  overflow: auto;
  border-bottom: 1px solid #041E5F;

}

.left-main{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height:100%;
  min-height:100vh;
}

.left-heading{
  // display:flex;
  align-items: center;
  justify-content: center;
  color:white;
  line-height:70px;
  font-size:60px;
  font-weight:700;
  text-transform: uppercase;
  display: table-cell;
  vertical-align: middle;
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

const ContainerStyle = Styled.div`
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

const RightBlockStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
  max-height:100%;
  min-height:100vh;
  width:100%;

  .status-card{
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 66, 168, 0.50);
    border-radius: 20px;
    padding: 20px;
    color: #fff;
    cursor: pointer;
    border: 1px solid;
    border-color: rgba(0, 66, 168, 0.50);
  }

  .main{
      min-width:100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-text: center;
  }
  .valid{
    color:green;
  }
  .invalid{
    color:red
  }

  .ninjadash-authentication-top{
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .ninjadash-authentication-top__title{
      font-size: 30px;
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 0;
      color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .heading{
      color: #041E5F;
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    }
    .sub-heading{
      color: #041E5F;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.987px;
    }
    .heading5{
      color: #041E5F;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.987px;
      margin-top: 16px;
    }
    .status-block{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      p{
        color: #041E5F;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 27.987px;
        padding: 4px 24px;
        border-bottom: 1px solid #041E5F;
      }
      span{
        color: #FFB800;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 27.987px;
        padding-left: 4px;
        text-transform: uppercase;
      }
      .individual{
        color: #041E5F;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 27.987px;
      }
    }
    .overview-button{
      display: flex;
      padding: 6px 24px;
      justify-content: center;
      align-items: center;
      margin-top: 38px;
      background-color: #041E5F;
      color: #fff;
      cursor: pointer;
      border: 1px solid #041E5F;
    }
    .application-id{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 32px;
      border-bottom: 1px solid #041E5F;
      padding: 4px 24px;
      .status-text{
        color: #041E5F;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        padding-left: 4px;
        line-height: 27.987px;
      }
    }
    .support-mail{
      color: #9D9D9D;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.987px;
      letter-spacing: 0.48px;
      text-decoration-line: underline;
    }
    .top-desc{
      width: 100%;
      color: #041E5F;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      padding: 20px;
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
     background: transparent;
  }

  .ant-input::placeholder{
    background-color: transparent;
  }

   .ant-input-password{
     background: transparent;
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
        color: #041E5F;
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
          color: #041E5F !important;
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

const PaymentWrapper = Styled.div`
.pay-button {
  text-align: center;
  img {
    width: 80%;
  }
}
.payment-block {
  padding-bottom: 3rem !important;
}
`;
export {
  TestimonialWrapper,
  PricingCard,
  ListGroup,
  Badge,
  GalleryNav,
  UserCard,
  GalleryCard,
  UsercardWrapper,
  UserTableStyleWrapper,
  FaqCategoryBox,
  FaqSupportBox,
  FaqWrapper,
  SearchResultWrapper,
  ResultList,
  MaintananceWrapper,
  ErrorWrapper,
  ComingsoonStyleWrapper,
  AddUser,
  ChangelogWrapper,
  VersionHistoryList,
  TestimonialStyleWrapper,
  UserCarrdTop,
  SupportTopWrap,
  SupportContentWrap,
  TermsConditionsStyle,
  DashboardBanner,
  WizardBlock,
  WizardWrapper,
  Background,
  IdentityWrapper,
  ReviewWrapper,
  SummaryWrapper,
  ContainerStyle,
  RightBlockStyle,
  MainStyle,
  PaymentWrapper,
};
