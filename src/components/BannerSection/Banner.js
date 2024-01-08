import PropTypes from 'prop-types'
import React from 'react'
// import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation'

function BannerSection(props) {
  const { firstWord, middleWord, lastWord, description } = props
  return (
    <>
      <h1 className="typography-h1">
        {firstWord}{' '}
        <TypeAnimation
          sequence={[
            middleWord,
            1000,
            () => {
              console.log('Sequence completed')
            },
          ]}
          wrapper="span"
          cursor="true"
          repeat={Infinity}
          style={{ fontSize: '50px', display: 'inline' }}
        />
      </h1>
      <p className="typography-h1" style={{ color: 'rgb(47, 50, 65)' }}>
        {lastWord}
      </p>
      <p className="description typography-body-regular-medium">{description}</p>
    </>
  )
}

BannerSection.propTypes = {
  firstWord: PropTypes.any,
  middleWord: PropTypes.any,
  lastWord: PropTypes.any,
  description: PropTypes.any,
}

export default BannerSection
