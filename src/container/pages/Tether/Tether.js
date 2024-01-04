import React, { useEffect } from 'react'
import { Button, Col, Row } from 'antd'
import { TypeAnimation } from 'react-type-animation'
import BrandLogoSection from './BrandLogoSection'
import {
  HeadTitle,
  BorderBottom,
  CapabilitySection,
  BrandSection,
  BenefitsSection,
  ImageTitle,
  InsightSection,
  BannerStyle
} from './Style'
import ProductCards from './ProductCards'
import BenefitsCards from './BenefitsCards'
import GalleryCardComponent from './GalleryCardComponent'
import Cryptocollection from '../../../static/img/images/teather-head.svg'
// import Heading from '../../../components/heading/heading';
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png'
import SenatusIcon from '../../../static/img/icons/senatus_blue.svg'
import AssetLanuchPadIcon from '../../../static/img/icons/asset_launchpad_orange.svg'
import StableconinsIcon from '../../../static/img/icons/stablecoins_blue.svg'
import CommoditesIcon from '../../../static/img/icons/comodities_green.svg'
import SenatusArrow from '../../../static/img/icons/left_arrow_blue.svg'
import AssetLanchpadArrow from '../../../static/img/icons/left_arrow_orange.svg'
import StablecoinsArrow from '../../../static/img/icons/left_arrow_purple.svg'
import CommoditiesArrow from '../../../static/img/icons/left_arrow_green.svg'
import BenefitsIcon1 from '../../../static/img/images/benefits-icon1.png'
import BenefitsIcon2 from '../../../static/img/images/benefits-icon2.png'
import BenefitsIcon3 from '../../../static/img/images/benefits-icon3.png'
import BenefitsIcon4 from '../../../static/img/images/benefits-icon4.png'
import { Main } from '../../styled'
import eliment from '../../../static/img/eliment.svg'
import eliment1 from '../../../static/img/eliment (1).svg'
import eliment2 from '../../../static/img/eliment (2).svg'
import eliment3 from '../../../static/img/eliment (3).svg'
import bitShape from '../../../static/img/bit-shape.svg'
import angel from '../../../static/img/angel.svg'
import dots from '../../../static/img/dots.svg'
import blueAngel from '../../../static/img/blue-angel.svg'
import vector from '../../../static/img/Vector (2).svg'

function Tether () {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal')

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

  return (
    <>
      <Main>
        <img src={eliment} alt="" className="mt-20 absolute none" />
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
                <h1 className="typography-h1">
                  Your business has <br />
                  evolved.{' '}
                  <TypeAnimation
                    sequence={[
                      'Now money has, too.', // Types 'One'
                      1000, // Waits 1s
                      // 'Two', // Deletes 'One' and types 'Two'
                      // 2000, // Waits 2s
                      // 'Two Three', // Types 'Three' without deleting 'Two'
                      () => {
                        console.log('Sequence completed')
                      }
                    ]}
                    wrapper="span"
                    cursor="true"
                    repeat={Infinity}
                    style={{ fontSize: '50px', display: 'inline' }}
                  />
                </h1>
                <p className="description typography-body-regular-medium">
                  Evolving the global financial system begins with building a new kind of digital currency. USDT
                  delivers money in a near-instant, at near-zero cost, and into the hands of more people in more places.
                </p>
                <Button className="fillup-btn typography-button-medium-medium">Get Started Now</Button>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={Cryptocollection} style={{ width: '40rem', height: '30rem' }} />
              </ImageTitle>
            </Col>
          </Row>
        </BannerStyle>
        <img src={eliment2} alt="" style={{ float: 'right', marginTop: '-17%' }} />
        <div
          style={{
            height: '503px',
            width: '99%',
            backgroundImage: `url(${BackgroundCorve})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundOrigin: 'content-box',
            transform: 'rotate(3deg)'
            // marginTop: '4%',
          }}
        />
        <BannerStyle>
          <CapabilitySection>
            <BorderBottom className="text-center">
              <h3 className="typography-h1 position border-bottom-center">
                Expanding the <span> capabilities of Tether</span>
              </h3>
            </BorderBottom>
            <p className="typography-body-regular-medium description">
              Expand your business at scale with Tether infrastructure that unlocks the power of digital assets.
            </p>
            <Row gutter={25}>
              <ProductCards
                logo={StableconinsIcon}
                icon={StablecoinsArrow}
                title="Stablecoins"
                text="White-label product offering for your business"
                bordercolor="border-purple card_hover_purple"
                textcolor="text-purple"
                routelink="stablecoins"
              />
              <ProductCards
                logo={CommoditesIcon}
                icon={CommoditiesArrow}
                title="Commodites"
                text="Issue your commodities as a token"
                bordercolor="border-green card_hover_green"
                textcolor="text-green"
                routelink="commodities"
              />
              <ProductCards
                logo={SenatusIcon}
                icon={SenatusArrow}
                title="Senatus"
                text="Peer to peer deals Never on a server"
                bordercolor="border-blue card_hover_blue"
                textcolor="text-blue"
                routelink="senatus"
              />
              <ProductCards
                logo={AssetLanuchPadIcon}
                icon={AssetLanchpadArrow}
                title="Asset Launchpad"
                text="Enterprise-class Bitcoin token launchpad"
                bordercolor="border-orange card_hover_orange"
                textcolor="text-orange"
                routelink="asset-launchpad"
              />
            </Row>
          </CapabilitySection>
        </BannerStyle>
        <img src={bitShape} alt="" style={{ float: 'right', marginTop: '-27%' }} className="none" />
        <img src={vector} alt="" className="absolute" style={{ marginTop: '5%' }} />
        <BrandSection>
          <h3 className="typography-h3">
            Trusted by Global <span> Institutions & Nation States</span>
          </h3>
          <BrandLogoSection />
        </BrandSection>
        <img src={angel} alt="" className="absolute" style={{ left: '2%', marginTop: '4%' }} />
        <BannerStyle className="reveal">
          <img src={eliment3} alt="" className="absolute" style={{ right: 0 }} />
          <BenefitsSection>
            <BorderBottom className="text-center reveal">
              <h3 className="typography-h1 position border-bottom-center">
                The future is <span> financially inclusive</span>
              </h3>
            </BorderBottom>
            <Row gutter={25} style={{ marginTop: '4%', gap: '7%' }} className="reveal">
              <BenefitsCards
                img={BenefitsIcon1}
                title="Solutions for Asset Managers"
                text="Harness  digital  asset  infrastructure"
                linktext="See How Asset Managers"
              />
              <BenefitsCards
                img={BenefitsIcon2}
                title="Solutions for Central Banks"
                text="Your bridge to dollar digital currency"
                linktext="See How Central Banks"
              />
              <BenefitsCards
                img={BenefitsIcon3}
                title="Solutions for Nation States"
                text="Your bridge to dollar digital currency"
                linktext="See How Nation States"
              />
              <BenefitsCards
                img={BenefitsIcon4}
                title="Solutions for Exchanges & Wallets"
                text="Grow your customer base & profitability"
                linktext="See How Exchanges & Wallets"
              />
            </Row>
            <img src={eliment1} alt="" style={{ right: 0 }} className="mt-20 absolute" />
            <img src={dots} alt="" className=" absolute" style={{ right: 0 }} />
          </BenefitsSection>
        </BannerStyle>
        <img src={vector} alt="" className="absolute" style={{ marginTop: '4%' }} />
        <img src={blueAngel} alt="" className="absolute" style={{ marginTop: '24%', left: '2%' }} />
        <BannerStyle>
          <InsightSection>
            <div style={{ float: 'right' }}>
              <img src={angel} alt="" />
            </div>

            <BorderBottom style={{ textAlign: 'center', marginTop: '4%' }} className="bottom">
              <h3 className="typography-h1 position border-bottom-center">
                Insights from our <span> executive team</span>
              </h3>
            </BorderBottom>
            <Row gutter={25} style={{ marginTop: '4%' }} className="bottom">
              <GalleryCardComponent
                img="https://www.deltecbank.com/wp-content/uploads/2022/08/coinwire-japan-iNOavZh6dQ8-unsplash-scaled.jpg"
                title="Empower Your Financial Ecosystem"
                text="Seamlessly integrate blockchain into your existing systems and provide your users with a reliable, decentralized medium of exchange that maintains a stable value."
              />
              <GalleryCardComponent
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVAei34A-b9uMKgsaWoL_lBxtTZIE2BwS0YMW0FtgBCKWjlzeU54W8Vy4hCrdtcgIUXo&usqp=CAU"
                title="Revolutionize P2P Interactions"
                text="Whether it's proposing new business deals or settling accounts, our solution enhances transparency and reduces transaction times. Connect, transact, and grow - all on your terms."
              />
              <GalleryCardComponent
                img="https://theislandnow.com/wp-content/uploads/2021/11/3.png"
                title="Launch Your Own Bitcoin Tokens"
                text="As a bridge between the traditional financial world and digital assets, our solution provides the stability of fiat currencies with the benefits of Bitcoin's blockchain technology."
              />
              <GalleryCardComponent
                img="https://www.newworldai.com/wp-content/uploads/2016/11/Blockchain.jpg"
                title="The Convergence of Money and the Internet"
                text="Digital currencies and blockchain represent a major evolution in money and the internet. Learn how helps businesses prepare for this shift in the new paradigm."
              />
            </Row>
          </InsightSection>
        </BannerStyle>
      </Main>
    </>
  )
}

export default Tether
