import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { HeadTitle, ImageTitle, BannerStyle } from '../About/Style';
// import Heading from '../../../components/heading/heading';
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png';
import NationStates from '../../../static/img/images/nationstates.svg';
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
                <h1 className="typography-h1">Nation States</h1>
                <p className="description typography-body-regular-medium">Upgrade your digital infrastructure</p>
                <p className="description typography-body-regular-medium">
                  Nation states have a crucial role in the stability and efficiency of their financial systems.
                  Stablecoins are one of the vehicles that may provide support to their financial infrastructure. These
                  have the potential to be used in several ways.
                </p>
                <p className="description typography-body-regular-medium">
                  Economic Stability: Stablecoins can provide a more stable and reliable form of digital currency, as
                  opposed to more volatile cryptocurrencies. This can be utilized as part of a program to contribute to
                  economic stability within a country.
                </p>
                <p className="description typography-body-regular-medium">
                  Financial Inclusion: Digital assets can be utilized as part of programs to increase financial
                  inclusion by providing citizens with access to secure and efficient digital payment solutions, even in
                  remote areas.
                </p>
                <p className="description typography-body-regular-medium">
                  Government Operations: Nation states have the potential capability to leverage stablecoins for various
                  government operations. This may include welfare disbursements and tax collection, wit the goals of
                  streamlining processes and reducing administrative costs.
                </p>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={NationStates} style={{ width: '40rem', height: '30rem', marginTop: 70 }} />
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
