import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { HeadTitle, HeadContainer, BannerStyle } from './Style'
import useAnalyticsEventTracker from '../../../config/dataService/GoogleAnalyticsService'
import { Main } from '../../styled'
import Cryptocollection from '../../../static/img/images/asset-launchpad-head.svg'
import BannerSection from '../../../components/BannerSection/Banner'
import BannerImage from '../../../components/BannerSection/BannerImage'

function AssetLaunchPad () {
  const gaEventTracker = useAnalyticsEventTracker('Commodities', 'Landed on Commodities', 'Landed')
  useEffect(() => {
    gaEventTracker()
  }, [window.location.pathname])
  const gaClickGetStartedTracker = useAnalyticsEventTracker(
    'Commodities',
    'Click on Commodities get started',
    'Clicked'
  )
  const gaClickOtherClientsTracker = useAnalyticsEventTracker(
    'Commodities',
    'Click on Commodities Other Clients',
    'Clicked'
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
                    firstWord="Commodities"
                    middleWord="Token Management"
                    lastWord="made easy"
                    description={
                      <>
                        Issue and manage commodities on Bitcoin and other blockchains. An intuitive platform for a
                        single, seamless experience.
                      </>
                    }
                  />
                  <Link
                    to="https://beta-commodities.pointsville.com/"
                    className="fillup-btn typography-button-medium-medium"
                    target="_blank"
                    onClick={() => gaClickGetStartedTracker()}
                  >
                    Get Started
                  </Link>{' '}
                  &nbsp;
                  <Link
                    to="https://beta-vaneck.pointsville.com"
                    className="fillup-btn bg-blue typography-button-medium-medium"
                    target="_blank"
                    onClick={() => gaClickOtherClientsTracker()}
                  >
                    Other Clients
                  </Link>
                </HeadTitle>
              </Col>
              <Col xxl={16} lg={16} sm={12} xs={24}>
                <BannerImage img={Cryptocollection} />
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
  )
}

export default AssetLaunchPad
