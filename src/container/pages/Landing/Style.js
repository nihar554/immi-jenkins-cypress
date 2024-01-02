import Styled from 'styled-components';

const LandingPage = Styled.div`
    height: 100%;
    width: 100%;
    .login{
        width: 123px;
        margin-right:8px;
        border:2px solid var(--El-Salvador-Blue, #041E5F);
        border-radius:0px;
        background:transparent;
        color: var(--El-Salvador-Blue, #041E5F);
        font-weight: 500;
        vertical-align: text-top;
    }
    
    .register{
        width: 123px;
        margin-right:8px;
        border: 2px solid var(--El-Salvador-Blue, #041E5F);
        border-radius:0px;
        color: white;
        font-weight: 500;
        background-color: var(--El-Salvador-Blue, #041E5F);
        vertical-align: text-top;
    }
    .select{
        padding: 5px;
        margin-right:8px;
        border: none;
        background: transparent;
        color: #0042A8;
        cursor: pointer;
    }

    .buttons {
        padding-top: 0px;
    }

@media (min-width: 768px) {
    .header{
        padding: 20px;
        padding-left: 120px;
        padding-right: 120px;
        width: 100%;
        background:transparent;
    }
    .ninjadash-header-content .ninjadash-header-content__right {
        flex: 1;
        .ninjadash-navbar-menu {
            margin: auto;
        }
    }
    
    .buttons{
        gap:10px
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

    button{
        cursor: pointer;
    }

    .wrapper{
        display: flex;
        justify-content: space-between;
    }

    .main-containt{
        padding-top : 100px;
        padding-left : 120px;
    }

    h1{
       color: #0042A8;
       font-weight: 500;
       font-size : 50px;

    }
    .mob-buttons{
        display:none;
    }
}
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        .ant-layout .ant-layout-header {
            padding: 0px !important;
        }
        .ninjadash-header-content .ninjadash-header-content__left .ninjadash-logo img {
            max-width: 170px;
            width: 100%;
        }
        .ninjadash-header-content .ninjadash-header-content__left .navbar-brand button {
            order : 0;
        }
        .ninjadash-header-content .ninjadash-header-content__left .navbar-brand .mobile-menu-icon img  {
            margin : 0px;
            height: 20px;
        }
        .ninjadash-header-content .ninjadash-header-content__left {
            padding: 10px 20px 0px 8px;
            width: 100%;
        }
        .admin-footer {
            .ant-row {
                align-items: normal !important;
            }
            ul {
                margin-bottom: 1em !important;
            }
        }
        .admin-footer .admin-footer__links {
            margin-top: 5px !important;
            position: relative !important;
            .subscribtion {
                display: block;
                span.lable {
                    font-size: 17px;
                    text-transform: capitalize;
                }
                input {
                    margin-top: 10px;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .ant-layout .ant-layout-header {
            padding: 0px !important;
            .buttons {
                display: none;
                .register ,.login, .ninjadash-nav-actions__language {
                    display: none;
                }
            }
        }
        .ninjadash-header-content .ninjadash-header-content__right {
            display: none !important;
        }
        .ninjadash-header-content .ninjadash-header-content__left {
            width: 100% !important;
        }
        .ninjadash-header-content .ninjadash-header-content__left .navbar-brand button {
            order : 0 !important;
        }
        .ninjadash-header-content .ninjadash-header-content__left .ninjadash-logo img {
            max-width: 170px;
            width: 100%;
        }
        .ninjadash-header-content .ninjadash-header-content__left .navbar-brand .mobile-menu-icon img  {
            margin : 0px;
            height: 20px;
        }
    }
    @media (max-width: 768px) {
        h1{
            color: #0042A8;
            font-weight: 500;
            font-size : 35px;
        }
       .main-containt{
            padding-top:100px;
            display:flex;
            justify-content:center;
            align-items:center;
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
     .mob-buttons{
        padding-top:180px;
        display:flex;
        justify-content:center;
        align-items;center;
        
    }
    }

    .ninjadash-authentication-top .join-title {
        padding-top: 5rem;    
    }
    .ninjadash-authentication-content {
        padding-top: 1rem;    
    }
    header {
        position: fixed;
        width: 100%;
        top: 0px;
        background: rgb(255, 255, 255);
        border-bottom: 1px solid rgb(4, 30, 95);

        .ninjadash-top-menu ul li a {
            color: rgb(4, 30, 95);
        }
        .mobile-menu-icon {
            display: none;
            @media (max-width: 1024px) {
                display: block;
            }
        }
    }
    .ant-layout .ant-layout-header {
        padding: 5px 45px 0px 45px;
        height: 85px;
    }
    .admin-footer {
        background-color: #081237;
        .ant-row {
            align-items: center;
        }
        ul {
            margin-bottom: 0em;
        }
        ul li a {
            color : ${({ theme }) => theme[theme.mainContent]['white-text']};
            font-size: 16px;
        }
        .admin-footer__links {
            margin: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            text-align: left;
            width: 100%;
            .lable {
                text-wrap: nowrap;
                padding-left: 10px;
                padding-right: 10px;
                padding-top: 10px;
                color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                font-size: 16px;
            }
            input {
                width: 50%;
                background: rgb(8, 18, 55);
                height: 2rem;
                border-radius: 0px;
                margin-left: 10px;
                margin-right: 10px;
            }
            button {
                border-radius: 0px;
            }
            /* Media Query for low resolution  Tablets, Ipads */
            @media (max-width: 1024px) {
                position: relative;
                top:0; 
                transform: none;
                .col-1 {

                }
            }
        }

        /* Media Query for low resolution Ipads */
        @media only screen and (min-width: 320px) and (max-width: 1024px) {
            ul li a {
                font-size: 14px;
                line-height: 30px;
            }
            .ant-row {
                align-items: normal;
                .col-1 {
                    margin-bottom: 2rem;
                }
                .col-2 {
                    padding-left: 10px;
                }
                .col-3 {
                    margin-bottom: 2rem;
                }
            }
        }
        @media only screen and (min-width: 520px) and (max-width: 1024px) {
            padding-left: 10rem;
        }
    }
`;

export { LandingPage };
