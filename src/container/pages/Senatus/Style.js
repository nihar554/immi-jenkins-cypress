import Styled from 'styled-components';

const BannerStyle = Styled.div`
    padding: 0px 170px 20px;
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
`;
const HeadContainer = Styled.div`
background-image: url(${require('../../../static/img/images/background-corve.png')});
background-size: 20rem 50rem;
background-repeat: no-repeat;
background-position: left center;
background-origin: content-box;
img{
    @media only screen and (max-width: 567px){
        width:25rem !important;
        margin-left: -61px !important;}
    }
`;

const HeadTitle = Styled.div`
    height: 90%;
    padding-top: 7rem;
    width: 100%;
    h1 {
        display: table-cell;
        vertical-align: middle;
        font-size: 50px;
        font-weight: 600;
        line-height: 55px;
        color:${({ theme }) => theme[theme.mainContent]['black-color']};
        span {
            color:${({ theme }) => theme[theme.mainContent]['blue-color']};
        }
    }
    .bottom-padding {
        padding-bottom: 60px
    }
    .description {
        margin-top: 2rem;
        color: ${({ theme }) => theme[theme.mainContent]['black-color']};
        white-space: nowrap;
    }
    .fillup-btn {
        background: ${({ theme }) => theme[theme.mainContent]['blue-color']};
        text-decoration:none;
    }
`;

const DownloadSection = Styled.div`
    padding: 0px 170px 20px;
    @media only screen and (max-width: 1199px){
     padding: 0px 15px;
    }
    .bottom-padding {
        padding-bottom: 60px
    }
    .bottom {
        @media (max-width: 767px) {
        margin-bottom: 20px;
        }
      }
    .windows-section {
        border: 2px solid;
        border-color: ${({ theme }) => theme[theme.mainContent]['blue-color']} !important;
        .card__name {
            color: ${({ theme }) => theme[theme.mainContent]['blue-color']} !important;
        }
        .card__social .fillup-btn {
            background: ${({ theme }) => theme[theme.mainContent]['blue-color']} !important;
            text-decoration:none;
        }
        .alpha-label {
            color: rgb(255, 255, 255);
            font-size: 12px;
            background: ${({ theme }) => theme[theme.mainContent]['blue-color']} !important;
            height: 25px;
            width: 21%;
            margin: 0px 0px 0px auto;
            border-bottom-left-radius: 25px;
            border-top-right-radius: 10px;
            position: absolute;
            right: 0px;
            top:0px;

        }
    }
    .mac-section {
        border: 2px solid;
        border-color: ${({ theme }) => theme[theme.mainContent]['orange-color']} !important;
        .card__name {
            color: ${({ theme }) => theme[theme.mainContent]['orange-color']} !important;
        }
        .card__social .fillup-btn {
            background: ${({ theme }) => theme[theme.mainContent]['orange-color']} !important;
            text-decoration:none;
        }
        .alpha-label {
            color: rgb(255, 255, 255);
            font-size: 12px;
            background: ${({ theme }) => theme[theme.mainContent]['orange-color']} !important;
            height: 25px;
            width: 21%;
            margin: 0px 0px 0px auto;
            border-bottom-left-radius: 25px;
            border-top-right-radius: 10px;
            position: absolute;
            right: 0px;
            top:0px;
        }
    }
    .linux-section {
        border: 2px solid;
        border-color: ${({ theme }) => theme[theme.mainContent]['purple-color']} !important;
        .card__name {
            color: ${({ theme }) => theme[theme.mainContent]['purple-color']} !important;
        }
        .card__social .fillup-btn {
            background: ${({ theme }) => theme[theme.mainContent]['purple-color']} !important;
            text-decoration:none;
        }
        .alpha-label {
            color: rgb(255, 255, 255);
            font-size: 12px;
            background: ${({ theme }) => theme[theme.mainContent]['purple-color']} !important;
            height: 25px;
            width: 21%;
            margin: 0px 0px 0px auto;
            border-bottom-left-radius: 25px;
            border-top-right-radius: 10px;
            position: absolute;
            right: 0px;
            top:0px;
        }
    }
`;

export { HeadContainer, HeadTitle, DownloadSection, BannerStyle };
