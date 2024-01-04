/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import propTypes from 'prop-types'

export default function ReviewCard ({ title, setState, state, Icon }) {
  return (
    <div
      className="card-block"
      style={{ marginBottom: '12px' }}
      onClick={() => {
        if (title === 'Name & Contact') {
          setState({ ...state, current: 0 })
        } else if (title === 'Address') {
          setState({ ...state, current: 1 })
        } else {
          setState({ ...state, current: 2 })
        }
      }}
    >
      <div className="title-icon-block">
        <Icon />
        <span className="title">{title}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <circle opacity="0.15" cx="25" cy="25" r="25" fill="#2F3241" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.5035 33.6211C20.8843 33.0707 20.8285 32.1226 21.3789 31.5034L26.4931 25.75L21.3789 19.9966C20.8285 19.3774 20.8843 18.4293 21.5035 17.8789C22.1226 17.3285 23.0707 17.3843 23.6211 18.0035L29.6211 24.7535C30.1263 25.3218 30.1263 26.1782 29.6211 26.7465L23.6211 33.4965C23.0707 34.1157 22.1226 34.1715 21.5035 33.6211Z"
          fill="#2F3241"
        />
      </svg>
    </div>
  )
}

ReviewCard.propTypes = {
  title: propTypes.string,
  state: propTypes.object,
  setState: propTypes.func,
  Icon: propTypes.func
}
