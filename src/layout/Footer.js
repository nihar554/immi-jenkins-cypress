import React from 'react'
import { Col, Row } from 'antd'
import { FooterStyle } from './Style'
import ProductsMenu from './FooterMenuSection/ProductsMenu'
import SolutionsMenu from './FooterMenuSection/SolutionMenu'
import InsightsMenu from './FooterMenuSection/InsightsMenu'
import CompanyMenu from './FooterMenuSection/CompanyMenu'
import NewsLetter from './FooterMenuSection/NewsLetter'
import DevelopersMenu from './FooterMenuSection/DevelopersMenu'

function Footer() {
  return (
    <FooterStyle className="admin-footer">
      <Row gutter={25}>
        <Col className="gutter-row" lg={18}>
          <Row gutter={{ xs: 6, sm: 6, md: 24, lg: 16 }}>
            <Col className="gutter-row" md={4} lg={4} xs={24}>
              <ProductsMenu />
            </Col>
            <Col className="gutter-row" md={4} lg={4} xs={24}>
              <SolutionsMenu />
            </Col>
            <Col className="gutter-row" md={4} lg={4} xs={24}>
              <InsightsMenu />
            </Col>
            <Col className="gutter-row" md={4} lg={4} xs={24}>
              <DevelopersMenu />
            </Col>
            <Col className="gutter-row" md={4} lg={4} xs={24}>
              <CompanyMenu />
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" lg={6}>
          <NewsLetter />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row responsive" sm={24} lg={8} xs={24}>
          <img
            width={200}
            height={60}
            style={{ marginTop: '-2rem' }}
            src={require('../static/img/logo_dark.svg').default}
            alt="logo_dark"
          />
        </Col>
        <Col className="gutter-row" sm={24} lg={10} xs={24}>
          <p className="admin-footer__copyright typography-body-regular-medium">@ 2023 Powered by Tether.</p>
        </Col>
      </Row>
    </FooterStyle>
  )
}

export default Footer
