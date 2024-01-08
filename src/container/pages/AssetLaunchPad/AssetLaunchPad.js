import React, { useEffect } from 'react'
import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { HeadTitle, BannerWrapper, HeadContainer, BorderBottom, BannerStyle } from './Style'
import BottomCard from './BottomCard'
import { Main } from '../../styled'
import useAnalyticsEventTracker from '../../../config/dataService/GoogleAnalyticsService'
import Cryptocollection from '../../../static/img/images/asset-launchpad-head.svg'
import OnePlatform from '../../../static/img/images/one-platform.png'
import TpLogo from '../../../static/img/logo_white.svg'
import DownCorve from '../../../static/img/images/background-corve-down.svg'
import blueAngel from '../../../static/img/blue-angel.svg'
import angel from '../../../static/img/angel.svg'
import BannerSection from '../../../components/BannerSection/Banner'
import BannerImage from '../../../components/BannerSection/BannerImage'

function AssetLaunchPad() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal,.scale-animation,.reveal-right,.reveal-top')

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        } else {
          element.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal()

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [])

  const gaEventTracker = useAnalyticsEventTracker('Asset issuance', 'Landed on Asset issuance ', 'Landed')
  useEffect(() => {
    gaEventTracker()
  }, [window.location.pathname])
  const gaClickIssueAssetNowTracker = useAnalyticsEventTracker('Asset issuance', 'Click on Issue Asset Now', 'Clicked')
  const gaClickIssueAssetNowPrototypeTracker = useAnalyticsEventTracker(
    'Asset issuance',
    'Click on Issue Asset Now (Prototype)',
    'Clicked',
  )
  const gaClickBridgePrototypeTracker = useAnalyticsEventTracker(
    'Asset issuance',
    'Click on Bridge (Prototype)',
    'Clicked',
  )

  return (
    <>
      <Main>
        <HeadContainer>
          <BannerStyle>
            <Row gutter={25}>
              <Col xxl={8} lg={8} sm={12} xs={24}>
                <HeadTitle>
                  <BannerSection
                    firstWord="Asset"
                    middleWord="issuance"
                    lastWord="made easy"
                    description={
                      <>
                        Issue and manage commodities on the favorite blockchain securely from an intuitive platform in a
                        single, seamless experience
                      </>
                    }
                  />
                  <Link
                    to="https://beta-rgb-asset-launchpad.pointsville.com"
                    target="_blank"
                    onClick={() => gaClickIssueAssetNowTracker()}
                  >
                    <Button className="fillup-btn typography-button-medium-medium">Issue Asset Now on RGB</Button>
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="https://beta-blockstream-launchpad.pointsville.com"
                    target="_blank"
                    onClick={() => gaClickIssueAssetNowPrototypeTracker()}
                  >
                    <Button className="fillup-btn typography-button-medium-medium">Issue Asset Now on Liquid</Button>
                  </Link>
                  <br />
                  <br />
                  <Link
                    to="https://www.figma.com/proto/jo0qMKYbEuxH6ZvrM1y70f/Tether-Plus?page-id=1943%3A41982&type=design&node-id=1943-41983&viewport=4878%2C1762%2C0.26&t=RljxPUhvID7MJ00h-8&scaling=scale-down-width&starting-point-node-id=1943%3A41983&hide-ui=1"
                    target="_blank"
                    onClick={() => gaClickBridgePrototypeTracker()}
                  >
                    <Button className="fillup-btn typography-button-medium-medium">Bridge (Prototype)</Button>
                  </Link>
                  <br />
                  <br />
                </HeadTitle>
              </Col>
              <Col xxl={16} lg={16} sm={12} xs={24}>
                <BannerImage img={Cryptocollection} />
                {/* <img
                  src={image}
                  alt=""
                  style={{
                    height: '100%',
                    width: '85%',
                    position: 'absolute',
                    marginTop: '20%',
                  }}
                /> */}
              </Col>
            </Row>
          </BannerStyle>
        </HeadContainer>
        <BannerWrapper className="ninjadash-top-banner ninjadash-top-banner-corporate">
          <div
            className="row"
            style={{
              backgroundImage: `url(${DownCorve})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              backgroundOrigin: 'content-box',
            }}
          >
            <img src={blueAngel} alt="" className=" absolute" style={{ marginTop: '-6%' }} />
            <img src={angel} alt="" className="absolute" style={{ left: '5%', marginTop: '2%' }} />
            <BannerStyle>
              <Row>
                <Col xxl={12} lg={8} sm={12} xs={24} className="reveal">
                  <figcaption className="figture-center">
                    <h2 className="ninjadash-top-banner__title typography-h2 text-center">
                      A one-stop <span>Platform</span>
                    </h2>
                    <p className="ninjadash-top-banner__text typography-body-regular-medium">
                      All the power of our programmatic token management API product rolled into a user-friendly
                      experience designed for managing the full asset lifecycle.
                    </p>
                  </figcaption>
                </Col>
                <Col xxl={12} lg={14} sm={12} xs={24} className="scale-animation">
                  <img
                    src={OnePlatform}
                    style={{ width: '50rem', marginLeft: '6rem' }}
                    alt="oneplatform"
                    className="PlateformLogo"
                  />
                </Col>
              </Row>
            </BannerStyle>
          </div>
        </BannerWrapper>

        <BorderBottom style={{ textAlign: 'center' }}>
          <h3 className="typography-h1 position border-bottom-center reveal-top">
            Self-Custody <span>Your Assets</span>
          </h3>
        </BorderBottom>
        <BannerWrapper className="ninjadash-top-banner ninjadash-top-banner-corporate" style={{ marginTop: '4%' }}>
          <div
            className="row"
            style={{
              backgroundImage: `url(${DownCorve})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left bottom',
              backgroundOrigin: 'content-box',
            }}
          >
            <BannerStyle>
              {/* <Row>
                <Col xxl={12} lg={12} sm={12} xs={24} className="reveal">
                  <img src={BitMaskLogo} style={{ width: '25rem' }} alt="Bitmasklogo" className="bitcoinLogo" />
                </Col>
                <Col xxl={12} lg={12} sm={12} xs={24} className="reveal-right">
                  <h2 className="ninjadash-top-banner__title typography-h2" style={{ width: '24%' }}>
                    BitMask
                  </h2>
                  <p className="ninjadash-top-banner__text typography-body-regular-medium">
                    Asset are fully supported by BitMask, our industry-leading Bitcoin and RGB wallet available for
                    mobile and desktop.
                  </p>
                </Col>
              </Row> */}
            </BannerStyle>
          </div>
        </BannerWrapper>
        <BannerStyle>
          <div className="ninjadash-nav-actions__settings">
            <Row gutter={25}>
              <BottomCard
                logo={TpLogo}
                text="Issuance an assets,upload your icon and perform proof of issuance in a matter of minutes."
                buttonTitle="Login"
              />
            </Row>
            <img
              src="https://cdn.discordapp.com/attachments/1127836185998393435/1136997900992385154/image.png"
              alt=""
              style={{
                height: '15em',
                width: '100%',
                // position: 'absolute',
                marginTop: '-8%',
              }}
            />
            <img src={blueAngel} alt="" className=" absolute" style={{ right: '16%' }} />
            <img src={angel} alt="" className="absolute" style={{ marginTop: '5%', right: 0 }} />
          </div>
        </BannerStyle>
      </Main>
    </>
  )
}

export default AssetLaunchPad
