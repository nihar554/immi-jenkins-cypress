import React from 'react'
import { Button, Col, Row } from 'antd'
import PropTypes from 'prop-types'
import { CardWrapper } from './Style'
import { Cards } from '../../../components/cards/frame/cards-frame'

const BottomCard = React.memo(({ logo, text, buttonTitle }) => {
  return (
    <Col sm={24} xs={24}>
      <Cards
        headless
        bodyStyle={{
          content: '',
          border: '3px dashed #53AE94',
          borderRadius: '20px',
        }}
      >
        <CardWrapper>
          <figcaption>
            <Row>
              <Col xxl={5} lg={5} sm={12} xs={24}>
                <img src={logo} width="88%" alt="" />
              </Col>
              <Col xxl={15} lg={15} sm={12} xs={24}>
                <p className="typography-h3 widthless " style={{ width: '80%' }}>
                  {text}
                </p>
              </Col>
              <Col xxl={4} lg={4} sm={12} xs={24}>
                <Button
                  type="primary"
                  className="fillup-btn right mt-10"
                  style={{ background: '#53AE94', width: '88%' }}
                >
                  {buttonTitle}
                </Button>
              </Col>
            </Row>
          </figcaption>
        </CardWrapper>
      </Cards>
    </Col>
  )
})
BottomCard.propTypes = {
  logo: PropTypes.string,
  text: PropTypes.string,
  buttonTitle: PropTypes.string,
}
export default BottomCard
