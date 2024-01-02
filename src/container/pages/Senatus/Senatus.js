import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { HeadContainer, HeadTitle, DownloadSection, BannerStyle } from './Style';
import { Main } from '../../styled';
import Cryptocollection from '../../../static/img/images/senatus-head.svg';
import Heading from '../../../components/heading/heading';
import { UserCard } from '../Tether/Style';
import useAnalyticsEventTracker from '../../../config/dataService/GoogleAnalyticsService';
import { Cards } from '../../../components/cards/frame/cards-frame';
import WindowsIcon from '../../../static/img/icons/windows.svg';
import MacIcon from '../../../static/img/icons/mac.svg';
import LinuxIcon from '../../../static/img/icons/linux.svg';
import DownloadIcon from '../../../static/img/icons/download.svg';
import BannerSection from '../../../components/BannerSection/Banner';

function Senatus() {
  const data = [
    {
      section: 'windows-section',
      title: 'Windows',
      icon: WindowsIcon,
      description: '',
      download_link: 'https://pv-images-alpha.s3.us-west-2.amazonaws.com/senatus/senatus-win.exe',
    },
    {
      section: 'mac-section',
      title: 'Mac',
      icon: MacIcon,
      description: '',
      download_link: 'https://pv-images-alpha.s3.us-west-2.amazonaws.com/senatus/senatus-mac.dmg',
    },
    {
      section: 'linux-section',
      title: 'Linux',
      icon: LinuxIcon,
      description: '',
      download_link: 'https://pv-images-alpha.s3.us-west-2.amazonaws.com/senatus/senatus-linux.deb',
    },
  ];
  const gaEventTracker = useAnalyticsEventTracker('Senatus', `Landed on Senatus `, 'Landed');
  useEffect(() => {
    gaEventTracker();
  }, [window.location.pathname]);
  const gaClickGetStartedTracker = useAnalyticsEventTracker('Senatus', `Click on Senatus get started`, 'Clicked');
  const gaClickDownloadTracker = useAnalyticsEventTracker('Senatus', `Click on Senatus Download`, 'Clicked');

  return (
    <>
      <Main>
        <HeadContainer>
          <BannerStyle>
            <Row gutter={25}>
              <Col lg={10} sm={12} xs={24}>
                <HeadTitle>
                  <BannerSection
                    firstWord="Senatus:"
                    middleWord="Peer to Peer deals, voting and proposals"
                    description="Easy, direct and transparent. Never on a server."
                  />
                  <Link
                    type="primary"
                    className="fillup-btn"
                    to="https://holepunch.pointsville.com/pear-tools/pear-proposals"
                    target="_blank"
                    onClick={() => gaClickGetStartedTracker()}
                  >
                    Get Started
                  </Link>
                </HeadTitle>
              </Col>
              <Col lg={14} sm={12} xs={24} md={24}>
                <img alt="" src={Cryptocollection} style={{ width: '59rem' }} />
              </Col>
              <img
                src="https://cdn.discordapp.com/attachments/1127836185998393435/1136997900992385154/image.png"
                alt=""
                style={{
                  height: '100%',
                  width: '85%',
                  position: 'absolute',
                  marginTop: '20%',
                }}
              />
            </Row>
          </BannerStyle>
        </HeadContainer>
        <DownloadSection>
          <Row className="bottom-padding" gutter={25} style={{ marginTop: '0%' }}>
            <Col xxl={6} lg={3} sm={12} xs={24} />
            {data.map((item) => {
              return (
                <Col xxl={4} lg={6} sm={12} xs={24} className="bottom">
                  <UserCard>
                    <div className={`card team-card ${item.section}`}>
                      <Cards headless className="borderless">
                        <figure>
                          <img src={item.icon} alt="" />
                          <figcaption>
                            <Heading className="card__name typography-h3" as="h4">
                              {item.title}
                            </Heading>
                            <span className="card__designation typography-body-regular-medium">{item.description}</span>
                            <div className="card__social">
                              <Link
                                className="fillup-btn "
                                to={item.download_link}
                                onClick={() => gaClickDownloadTracker()}
                              >
                                DownLoad &nbsp;
                                <img src={DownloadIcon} alt="" />
                              </Link>
                            </div>
                          </figcaption>
                        </figure>
                      </Cards>
                      <div className="alpha-label">Alpha</div>
                    </div>
                  </UserCard>
                </Col>
              );
            })}
            <Col xxl={6} lg={3} sm={12} xs={24} />
          </Row>
        </DownloadSection>
      </Main>
    </>
  );
}

export default Senatus;
