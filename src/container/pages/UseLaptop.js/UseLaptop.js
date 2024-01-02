import React from 'react';
import { MobileViewStyle } from './Style';
import { LandingPage } from '../Landing/Style';
import LandingHeader from '../Landing/Header';
import LaptopImg from '../../../static/img/laptop-img.png';
import { LoginWrap } from '../../profile/authentication/overview/style';

export default function UseLaptop() {
  return (
    <LoginWrap>
      <LandingPage>
        <LandingHeader />
        <MobileViewStyle>
          <div className="banner">
            <h1>You’re a few steps away to get the FREEDOM VISA</h1>
            <img src={LaptopImg} alt="laptop-img" />
            <p>
              To proceed with your application, please <br />{' '}
              <b>visit our website using a desktop or laptop computer.</b>
            </p>
          </div>
        </MobileViewStyle>
      </LandingPage>
    </LoginWrap>
  );
}
