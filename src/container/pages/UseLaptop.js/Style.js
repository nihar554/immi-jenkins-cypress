import Styled from 'styled-components';

const MobileViewStyle = Styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .banner{
        width: 100%;
        min-height: 350px;
        background: #041E5F;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        padding: 0px 32px;
        position: relative;
    }
    h1{
        color: #fff;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 34px;
        text-transform: uppercase;
    }
    img{
        object-fit: cover;
        width: 100%;
        height: auto;
        position: absolute;
        top: 140px;
    }
    p{
        width: 36%;
        color: #041E5F;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        left: calc(100vw - 40%);
        top: 390px;
        position: absolute;
        text-align: right;
    }
`;

export { MobileViewStyle };
