import Styled from 'styled-components';

const CitizenStyle = Styled.div`
margin-bottom: 20px;
margin-top: 20px;
position: relative;
width: 100%; /* Adjust width as needed */
height: 100%; /* Adjust height as needed */
overflow: hidden;
padding: 40px 0px;
video {
    &::-webkit-media-controls {
        display:none !important;
    }

    &::-webkit-media-controls-start-playback-button {
        display: none!important;
        -webkit-appearance: none;
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.content {
    position: relative;
    z-index: 1; /* Place content above the video */
    /* Add styles for your content as needed */
}
@media only screen and (max-width: 575px){
  margin-top: 10px;
}
.ninjadash-term-condition-top{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 30px;
  .ninjadash-term-condition-top__title{
    color: white;
    margin-bottom: 110px;
    font-size: 89px;
    font-style: normal;
    font-weight: 700;
    line-height: 99px; /* 111.236% */
    letter-spacing: -1.78px;
    text-transform: uppercase;
    @media only screen and (max-width: 991px){
      font-size: 80px;
      font-weight: 700;
      line-height: 100px;
      margin-bottom: 100px;
    }
    @media only screen and (max-width: 767px){
      font-size: 50px;
      font-weight: 700;
      line-height: 60px;
      margin-bottom: 0px;
      letter-spacing: 1.22px;
    }
    @media only screen and (max-width: 575px){
        font-size: 45px;
      font-weight: 700;
      line-height: 50px;
      margin-bottom: 0px;
      letter-spacing: 1.22px;
    }
  }
}
.ninjadash-term-condition-content{
  text-align: center;
  padding: 1px 30px 30px;
  max-width: 800px;
  border-radius: 10px;
  margin: -125px auto auto;
  
  @media only screen and (max-width: 767px){
    max-width: 560px;
    margin: 30px auto auto;
  }
  @media only screen and (max-width: 575px){
    padding: 1px 15px 30px;
    p {
        text-align: justify;
    }
  }
  h3{
    font-size: 30px;
    font-weight: 600;
    margin: 50px 0 30px;
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
    color: white;
    font-weight: 44;
    line-height: 30px;
    font-size: 20px;
  }
}
`;

const MainStyle = Styled.div`
    padding: 0px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    .ant-row {
        justify-content: center;
    }
    &.grid-boxed{
        padding: 0px 180px 20px;
        @media only screen and (max-width: 1599px){
            padding: 0px 130px 20px;
        }
        @media only screen and (max-width: 1399px){
            padding: 0px 50px 20px;
        }
        @media only screen and (max-width: 991px){
            padding: 0px 30px 20px;
        }
    }
    .doughnutchart-inner{
        position: relative;
        .doughnutchart-inner-text{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            line-height: 1;
            margin-bottom: 0px;
            display: inline-block;
            transform: translate(-50%, -50%);
            .doughnutchart-inner-content{
                font-size: 30px;
                font-weight: 600;
                line-height: 1;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                display: block;
            }
            .doughnutchart-inner-label{
                font-size: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        canvas{
            margin: 0 auto;
        }
    }
    .ant-switch{
        .anticon svg{
            color: #fff;
        }
    }
    /* ant breadcrumb */
    .ant-breadcrumb {
        a{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    .page-header-actions{
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            &:hover{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']} !important;
            }
        }
    }
    /* Card Title */
    .ant-card{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card{
        &.ninjadash-ghost-card{
            .ant-card-body{
                background: linear-gradient(90deg, rgb(95, 99, 242), rgb(255, 105, 165));
            }
        }
    }
    
    
    .ninjadash-card-nav{
        ul{
            display: flex;
            align-items: center;
            margin: 0 -10px 2px 0;
            margin: ${({ theme }) => (!theme.rtl ? '0 -10px 2px 0' : '0 0 2px -10px')};
            li{
                margin: 5px 0;
                a{
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 6px;
                    min-height: 30px;
                    padding: 0 12px;
                    transition: .3s;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    &:hover{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                &.ninjadash-active{
                    a{
                        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
    .ant-card-rtl .ant-card-extra{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        
    }
    .ant-tabs-tab span svg {        
        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
    }
    .ant-btn{
        &.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            &.btn-transparent,
            &.btn-outlined{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.btn-outlined:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    /* Pagination Style */
    .ant-pagination-item{
        border-radius: 4px;
    }
    .ant-pagination-item a{
        font-weight: 400;
    }
    .ant-pagination-next svg{
        fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }
    .ant-pagination-options .ant-select-selector{
        padding: 0 6.5px
    }
    .ant-pagination-options .ant-select .ant-select-arrow{
        svg{
            width: 10px;
            fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    /* Picker Under Input */
    .ant-form-item-control-input .ant-picker {
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')} !important;
    }
    /* progressbars */
    .ant-progress {
        display: inline-flex !important;
        align-items: center;
        .ant-progress-inner{
            /* background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; */
            background-color: transparent;
        }
        .ant-progress-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-progress-circle-trail{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }
    .ant-progress>div {
        display: flex;
        flex-direction: column;
    }
    .ant-progress .ant-progress-outer {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-progress .ant-progress-text {
        order: 0;
        align-self: flex-end;
        text-align: center;
    }
    .ant-progress-status-warning .ant-progress-bg {
        background: #fa8b0c;
    }
    /* progress bars */
    
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: 580px;
    }
    .w-100{
        width: 100%;
    }
    .product-sidebar-col{
        @media only screen and (max-width: 767px){
            order: 2;
        }
    }
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }
    
    /* ant checkbox */
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-radius: 4px;
            }
        }
  
    }
    .ant-checkbox-wrapper{
        &.ant-checkbox-wrapper-disabled{
            opacity: .5;
        }
    }
    .ant-alert-with-description .ant-alert-description{
        display: inline-block;
    }
    .ant-picker-calendar-header .ant-picker-calendar-year-select{
        @media only screen and (max-width: 400px){
            width: 50% !important;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-month-select{
        @media only screen and (max-width: 400px){
            width: calc(50% - 8px) !important
        }
    }
    /* Card Grid */
    .card-grid-wrap{
        .ant-card-grid{
            @media only screen and (max-width: 575px){
                width: 50% !important
            }
        }
    }
    .drawer-placement{
        @media only screen and (max-width: 400px){
            text-align: center;
        }
        .ant-radio-group{
            @media only screen and (max-width: 400px){
                margin-bottom: 15px;
            }
        }
    }
    .ant-drawer-content-wrapper{
        @media only screen and (max-width: 400px){
            width: 260px !important;
        }
        @media only screen and (max-width: 375px){
            width: 220px !important;
        }
    }
    .ant-input-affix-wrapper-focused{
        box-shadow: 0 0;
    }
    /* Taglist */
    .ant-tag{
        margin: 5px;
    }
    .taglist-wrap{
        margin: -5px;
        .ant-tag {
            line-height: 22px;
            padding: 0 10.2px;
            border: 0 none;
            margin: 5px;
            &.ant-tag-has-color{
                color: #fff !important;
            }
            &.ant-tag-magenta{
                color: #eb2f96;
            }
            &.ant-tag-red{
                color: #f5222d;
            }
            &.ant-tag-volcano{
                color: #fa541c;
            }
            &.ant-tag-orange{
                color: #fa8c16;
            }
            &.ant-tag-gold{
                color: #faad14;
            }
            &.ant-tag-line{
                color: #a0d911;
            }
            &.ant-tag-green{
                color: #a0d911;
            }
            &.ant-tag-cyan{
                color: #13c2c2;
            }
            &.ant-tag-blue{
                color: #1890ff;
            }
            &.ant-tag-geekbule{
                color: #2f54eb;
            }
            &.ant-tag-purple{
                color: #722ed1;
            }
        }
    }
    /* Timepicker List */
    .timepicker-list{
        margin: -5px;
        .ant-picker{
            margin: 5px;
        }
    }
    .account-card{
        .ant-card-head{
            .ant-card-extra{
                @media only screen and (max-width: 575px){
                   padding-top: 0 !important;
                }
            }
            
        }
                
    }
`;
const CardStyle = Styled.div`

img {
    width: 100%;
}

figure{
    border: 1px solid rgba(255, 255, 255, 0.49);
    background: #373F5E; 
    backdrop-filter: blur(9.60px)

    margin: 20px;
    padding: 10px;
    height: 440px;
        @media(max-width: 600px) {
            height: auto;
            padding: 4px;
            img {
                width: 94%;
            }
        }
    }
  .gallery-single-content{
    padding: 18px 25px 20px;
    .gallery-single-title{
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 2px;
    }
    h2 {
        text-align: center; 
        color: #E4C864; 
        font-size: 30px;
        word-wrap: break-word;
        line-height: 1;
    }
    p{
        text-align: center; 
        color: white; 
        font-size: 17px;  
        word-wrap: break-word;
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
            text-align: justify !important;
        }
    }
  }
`;

export { CitizenStyle, CardStyle, MainStyle };
