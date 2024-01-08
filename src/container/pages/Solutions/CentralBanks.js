import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { HeadTitle, ImageTitle, BannerStyle } from '../About/Style'
// import Heading from '../../../components/heading/heading';
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png'
import CentralBanks from '../../../static/img/images/centralbanks.svg'
import { Main } from '../../styled'
// import eliment from '../../../static/img/eliment.svg';
import eliment1 from '../../../static/img/eliment (1).svg'
import eliment2 from '../../../static/img/eliment (2).svg'

function Tether() {
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
                <h1 className="typography-h1">Central Banks</h1>
                <p className="description typography-body-regular-medium">A Bridge to Digital Currency</p>
                <p className="description typography-body-regular-medium">
                  Price Stability: Over the past years, stablecoins provided a reliable store of value when compared to
                  volatile cryptocurrencies. Additionally, as stablecoins tend to be pegged to hard currencies, they can
                  be a more stable currency than many local currencies, thus offering a tool to central banks to manage
                  inflation risks.
                </p>
                <p className="description typography-body-regular-medium">
                  Efficient Payment Systems: Stablecoins enable a new form of payment system. If established with
                  adequate security, this can facilitate faster and more cost-effective domestic and cross-border
                  transactions.
                </p>
                <p className="description typography-body-regular-medium">
                  Reserve Diversification: Central banks can diversify foreign exchange reserves with new digital
                  assets. Stablecoins can reduce reliance on traditional currencies and assist in currency risk
                  management.
                </p>
                <p className="description typography-body-regular-medium">
                  Transparency and Regulatory Oversight: Blockchain technology enables improved transparency and better
                  oversight. Central banks can use our tools to maintain regulatory ensure stability and integrity over
                  financial networks.
                </p>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={CentralBanks} style={{ width: '40rem', height: '30rem', marginTop: 70 }} />
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
  )
}

export default Tether
