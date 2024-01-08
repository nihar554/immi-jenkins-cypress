import { Col, Row } from 'antd'
import React from 'react'
import QatarIcon from '../../../static/img/icons/qatar.svg'
import BSEIcon from '../../../static/img/icons/bse.png'
import ElSalvadoreIcon from '../../../static/img/icons/elsalv.png'
import GeorgiaIcon from '../../../static/img/icons/georgia.png'
import VanEckIcon from '../../../static/img/icons/vaneck.png'
import NasdaqIcon from '../../../static/img/icons/nasdaq.png'

function BrandLogoSection() {
  return (
    <Row gutter={25} className="brand-logo-row image-container">
      {/* <Col  lg={4} sm={12} xs={24}>
              <img src={BarclaysIcon} width='125px'/>
            </Col> */}
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={QatarIcon} width="160px" height="50px" alt="" className="first-image image-logo" />
      </Col>
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={NasdaqIcon} width="160px" height="50px" alt="" className="second-image image-logo" />
      </Col>
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={VanEckIcon} width="160px" height="50px" alt="" className="third-image image-logo" />
      </Col>
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={BSEIcon} width="130px" alt="" className="four-image image-logo" />
      </Col>
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={ElSalvadoreIcon} width="100px" alt="" className="five-image image-logo" />
      </Col>
      <Col lg={3} sm={12} xs={12} md={3} className="logo-bottom">
        <img src={GeorgiaIcon} width="100px" alt="" className="six-image image-logo" />
      </Col>
    </Row>
  )
}

export default BrandLogoSection
