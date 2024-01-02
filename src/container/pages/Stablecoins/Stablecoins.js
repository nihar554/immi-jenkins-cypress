import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { HeadTitle, HeadContainer, BannerStyle } from './Style';
import useAnalyticsEventTracker from '../../../config/dataService/GoogleAnalyticsService';
import { Main } from '../../styled';
import Cryptocollection from '../../../static/img/images/asset-launchpad-head.svg';
import BannerSection from '../../../components/BannerSection/Banner';
import BannerImage from '../../../components/BannerSection/BannerImage';

function AssetLaunchPad() {
  const gaEventTracker = useAnalyticsEventTracker('Stablecoin', `Landed on Stablecoin `, 'Landed');

  useEffect(() => {
    gaEventTracker();
  }, [window.location.pathname]);
  const gaClickGetStartedTracker = useAnalyticsEventTracker('Stablecoin', `Click on Stablecoin get started`, 'Clicked');
  const gaClickOtherBlockchainsTracker = useAnalyticsEventTracker(
    'Stablecoin',
    `Click on Stablecoin Other Blockchains`,
    'Clicked',
  );

  return (
    <>
      <Main>
        <HeadContainer>
          <BannerStyle>
            <Row gutter={25}>
              <Col xxl={8} lg={8} sm={12} xs={24}>
                <HeadTitle>
                  <BannerSection
                    firstWord="Stablecoin"
                    middleWord="Token Management"
                    lastWord="made easy"
                    description={
                      <>
                        Issue and manage commodities on the favorite blockchain securely from an intuitive platform in a
                        single, seamless experience
                      </>
                    }
                  />
                  <Link
                    to="https://beta-stablecoins.pointsville.com"
                    className="fillup-btn typography-button-medium-medium"
                    target="_blank"
                    onClick={() => gaClickGetStartedTracker()}
                  >
                    Get Started
                  </Link>{' '}
                  &nbsp;
                  <Link
                    to="http://localhost:3050/token/supply"
                    className="fillup-btn bg-blue typography-button-medium-medium"
                    target="_blank"
                    onClick={() => gaClickOtherBlockchainsTracker()}
                  >
                    Other Blockchains
                  </Link>
                </HeadTitle>
              </Col>
              <Col xxl={16} lg={16} sm={12} xs={24}>
                <BannerImage img={Cryptocollection} style={{ width: '56rem' }} />
              </Col>
              {/* <img
                src="https://cdn.discordapp.com/attachments/1127836185998393435/1136997900992385154/image.png"
                alt=""
                style={{
                  height: '100%',
                  width: '85%',
                  position: 'absolute',
                  marginTop: '20%',
                }}
              /> */}
            </Row>
          </BannerStyle>
        </HeadContainer>
      </Main>
    </>
  );
}

export default AssetLaunchPad;
