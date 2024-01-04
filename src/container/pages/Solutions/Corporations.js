import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { HeadTitle, ImageTitle, BannerStyle } from '../About/Style'
import Corporations from '../../../static/img/images/corporations.svg'
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png'
import { Main } from '../../styled'
import eliment1 from '../../../static/img/eliment (1).svg'
import eliment2 from '../../../static/img/eliment (2).svg'

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
                <h1 className="typography-h1">Corporations</h1>
                <p className="description typography-body-regular-medium">Creating New Avenues with Technology</p>
                <p className="description typography-body-regular-medium">
                  Incorporating asset-backed tokens into corporate strategies can provide a range of potential
                  advantages. While these benefits may vary based on individual circumstances and the specific assets
                  involved, corporations may consider the following:
                </p>
                <p className="description typography-body-regular-medium">
                  Customizable Offerings: Asset-backed tokens can be customized to align with specific corporate goals
                  and strategies. Corporations have the flexibility to design tokens that meet their unique
                  requirements, whether related to loyalty programs, fractional ownership, or other use cases.
                </p>
                <p className="description typography-body-regular-medium">
                  Enhanced Liquidity Management: Asset-backed tokens can represent illiquid assets such as real estate,
                  oil reserves, or even loyalty points. These tokens, when tradable on secondary markets, can enhance
                  liquidity management strategies by allowing corporations to unlock value from otherwise illiquid
                  holdings.
                </p>
                <p className="description typography-body-regular-medium">
                  Cost-Efficient Financing: Asset-backed tokens may offer an avenue for corporations to access
                  alternative financing sources. By tokenizing assets, corporations can potentially secure financing by
                  collateralizing tokens, providing an alternative to traditional lending methods.
                </p>
                <p className="description typography-body-regular-medium">
                  Streamlined Asset Management: Digital tokens enable corporations to streamline the management of
                  various assets. Smart contracts can automate tasks related to asset utilization, tracking, and
                  reporting, potentially reducing administrative overhead.
                </p>
                <p className="description typography-body-regular-medium">
                  Increased Transparency: Blockchain technology provides a transparent and immutable record of asset
                  ownership and transactions. This transparency can enhance corporate governance, auditing processes,
                  and regulatory compliance.
                </p>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={Corporations} style={{ width: '40rem', height: '30rem', marginTop: 70 }} />
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
            transform: 'rotate(3deg)'
            // marginTop: '4%',
          }}
        />
      </Main>
    </>
  )
}

export default Tether
