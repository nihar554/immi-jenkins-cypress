import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { HeadTitle, ImageTitle, BannerStyle } from '../About/Style';
// import Heading from '../../../components/heading/heading';
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png';
import FinancialFirms from '../../../static/img/images/financialfirms.svg';
import { Main } from '../../styled';
// import eliment from '../../../static/img/eliment.svg';
import eliment1 from '../../../static/img/eliment (1).svg';
import eliment2 from '../../../static/img/eliment (2).svg';

function Tether() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <>
      <Main>
        <BannerStyle>
          <div className="text-center">
            <img src={eliment1} alt="" className="mt-20 absolute" />
          </div>
          <div style={{ float: 'right' }}>
            <img src={eliment1} alt="" className="mt-20 absolute" />
          </div>

          <Row gutter={25}>
            <Col xxl={12} lg={12} sm={12} xs={24}>
              <HeadTitle>
                <h1 className="typography-h1">Financial Firms</h1>
                <p className="description typography-body-regular-medium">Elevating Digital Asset Infrastructure</p>
                <p className="description typography-body-regular-medium">
                  Real World Assets: Launch Real World assets with stablecoin technology to meet your oganization’s
                  product and business needs.
                </p>
                <p className="description typography-body-regular-medium">
                  Risk Mitigation: Stablecoins may provide a stable and reliable store of value within a portfolio,
                  offering asset managers a tool to mitigate risk during periods of market volatility.
                </p>
                <p className="description typography-body-regular-medium">
                  Liquidity Management: Firms have the potential to quickly move in and out of stablecoins to manage
                  liquidity efficiently, especially when navigating rapidly changing market conditions.
                </p>
                <p className="description typography-body-regular-medium">
                  Cross-Border Transactions: Stablecoins may facilitate international investment by eliminating the need
                  for complex currency conversions and reducing transaction costs.
                </p>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={FinancialFirms} style={{ width: '40rem', height: '30rem', marginTop: 70 }} />
              </ImageTitle>
            </Col>
          </Row>
        </BannerStyle>
        <img src={eliment2} alt="" style={{ float: 'right', marginTop: '-17%' }} />
        <div
          style={{
            height: '250px',
            width: '99%',
            backgroundImage: `url(${BackgroundCorve})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundOrigin: 'content-box',
            transform: 'rotate(3deg)',
            // marginTop: '4%',
          }}
        />
      </Main>
    </>
  );
}

export default Tether;
