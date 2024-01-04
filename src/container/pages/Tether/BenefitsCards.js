import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductCard } from './Style'
import Heading from '../../../components/heading/heading'

// import { Main } from '../../styled';

const BenefitsCards = React.memo(({ img, text, title, linktext }) => {
  return (
    <Col lg={11}>
      <ProductCard className="list-view">
        <div className="product-list">
          <Row gutter={15}>
            <Col md={6} xs={24}>
              <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
            </Col>
            <Col md={18} xs={24}>
              <div className="product-single-description d-flex">
                <p className="description typography-body-regular-large">{title}</p>
              </div>
              <Heading as="h2" className="typography-h3">
                {text}
              </Heading>
              <Link className="typography-h4">{linktext}</Link>
            </Col>
          </Row>
        </div>
      </ProductCard>
    </Col>
  )
})
BenefitsCards.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  linktext: PropTypes.string
}
export default BenefitsCards
