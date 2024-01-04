import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SettingDropdwon } from './auth-info-style'
import Heading from '../heading/heading'
import { Popover } from '../popup/popup'

const MegaMenus = React.memo(({ data, title }) => {
  const content = (
    <SettingDropdwon>
      <div className="setting-dropdwon">
        <Row gutter="10">
          {data.map((item) => {
            return (
              <Col sm={12} xs={24}>
                <Link to={item.link}>
                  <figure className="setting-dropdwon__single d-flex">
                    <img alt="" src={item.icon} />
                    <figcaption>
                      <Heading as="h5">{item.heading}</Heading>
                      <p>{item.title}</p>
                    </figcaption>
                  </figure>
                </Link>
              </Col>
            )
          })}
        </Row>
      </div>
    </SettingDropdwon>
  )
  return (
    <Popover placement="bottomLeft" content={content} action="hover">
      <Link className="parent" style={{ color: '#2F3241' }}>
        {title}
        {/* <img src={ArrowDownIcon} className="menu-arrow-down" style={{ marginLeft:'5px', marginTop:'5px', alignSelf:'center' }} /> */}
      </Link>
    </Popover>
  )
})
MegaMenus.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string
}
export default MegaMenus
