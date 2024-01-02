/* eslint-disable prefer-destructuring */
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthenticationWrap } from './overview/style';
// import logo from '../../../static/img/icon/both-logos.svg';
import logo1 from '../../../static/img/logo_dark.svg';
import logo2 from '../../../static/img/icon/branding-logo.svg';

import PoweredBy from '../../pages/Landing/PowerdBy';
import LandingHeader from '../../pages/Landing/Header';
import { LandingPage } from '../../pages/Landing/Style';

const AuthLayout = (WraperContent) => {
  return function () {
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <AuthenticationWrap>
          {pathname === '/contact' || pathname === '/faqs' || pathname === '/terms' ? (
            <LandingPage>
              <LandingHeader />
            </LandingPage>
          ) : (pathname === '/register' || pathname === '/login') && window.innerWidth < 700 ? (
            <LandingPage>
              <LandingHeader />
            </LandingPage>
          ) : (
            <div
              className="header"
              style={{ display: ['/welcome', '/about'].includes(window.location.pathname) ? 'none' : 'block' }}
            >
              <div className="wrapper">
                <div className="heding">
                  {window.innerWidth <= 991 ? (
                    <Link to="/" className="logo-block">
                      <img className="logo-image-main" alt="logo" src={logo1} />
                    </Link>
                  ) : (
                    <Link to="/" className="logo-block">
                      <img className="logo-image-main" alt="logo" src={logo1} />
                      <img className="logo-image-branding" alt="logo" src={logo2} />
                    </Link>
                    //    <Button type="link" onClick={toggleCollapsed}>
                    //    <img
                    //      src={require(`../static/img/icon/${collapsed ? 'left-bar.svg' : 'left-bar.svg'}`)}
                    //      alt="menu"
                    //    />
                    //  </Button>
                  )}
                  {/* <img src={require(`../../../static/img/extranjeria-logo.svg`).default} alt="" height="58.3" /> */}
                </div>
                <div className="buttons">
                  <button onClick={() => navigate(-1)} className="goooooo" type="button">
                    <svg width="92" height="8" viewBox="0 0 92 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.539024 3.64645C0.343765 3.84171 0.343765 4.15829 0.539024 4.35355L3.72101 7.53553C3.91627 7.7308 4.23285 7.7308 4.42811 7.53553C4.62337 7.34027 4.62337 7.02369 4.42811 6.82843L1.59969 4L4.42811 1.17157C4.62337 0.976311 4.62337 0.659728 4.42811 0.464466C4.23285 0.269204 3.91627 0.269204 3.72101 0.464466L0.539024 3.64645ZM91.8926 3.5L0.892578 3.5V4.5L91.8926 4.5V3.5Z"
                        fill="#041E5F"
                      />
                    </svg>{' '}
                    {t('Go Back')}
                  </button>
                </div>
              </div>
            </div>
          )}
          <main className="main-containt">
            <WraperContent />
          </main>
          <div
            className="bottom"
            style={pathname === '/terms' ? { position: 'fixed', bottom: 0 } : { position: 'static' }}
          />
          <PoweredBy />
        </AuthenticationWrap>
      </Suspense>
    );
  };
};

export default AuthLayout;
