import React from 'react'
import { Col } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { UserCard } from './Style'
import { Cards } from '../../../components/cards/frame/cards-frame'

const ProductCards = React.memo(({ logo, icon, title, text, bordercolor, textcolor, routelink }) => {
  const borderColor = `card team-card ${bordercolor}`
  const textColor = `card__name typography-h3 ${textcolor}`
  return (
    <Col xxl={6} lg={6} sm={12} xs={24} className="bottom">
      <UserCard>
        <div className={borderColor}>
          <Link to={routelink}>
            <Cards headless className="borderless">
              <img src={logo} alt="" />
              <h1 className={textColor}>{title}</h1>
              <p
                className="card__designation typography-body-regular-medium"
                style={{ wordWrap: 'break-word', height: '6vh' }}
              >
                {text}
                {/* White-label product offering <br /> for your business */}
              </p>
              <div className="card__social">
                <Link className="btn-icon facebook" to={routelink}>
                  <img src={icon} alt="" />
                </Link>
              </div>
            </Cards>
          </Link>
        </div>
      </UserCard>
    </Col>
  )
})
ProductCards.propTypes = {
  logo: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  textcolor: PropTypes.string,
  bordercolor: PropTypes.string,
  routelink: PropTypes.string,
}
export default ProductCards
