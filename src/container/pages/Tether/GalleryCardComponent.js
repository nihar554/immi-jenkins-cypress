import React from 'react'
import { Col } from 'antd'
import PropTypes from 'prop-types'
import { GalleryCard } from './Style'
import Heading from '../../../components/heading/heading'

const GalleryCardComponent = React.memo(({ img, title, text }) => {
  return (
    <Col xxl={6} lg={8} sm={12} xs={24} md={8}>
      <GalleryCard>
        <figure>
          <div className="zoom-img">
            <img style={{ width: '100%', height: '12rem' }} src={img} alt="" />
          </div>

          <figcaption>
            <div className="gallery-single-content">
              <Heading className="gallery-single-title" as="h4">
                {title}
              </Heading>
              <p className="gallery-single-text">{text.length > 170 ? `${text.substring(0, 170)}......` : text}</p>
            </div>
          </figcaption>
        </figure>
      </GalleryCard>
    </Col>
  )
})
GalleryCardComponent.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
export default GalleryCardComponent
