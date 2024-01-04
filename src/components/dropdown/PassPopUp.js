import React from 'react'
import propTypes from 'prop-types'
import { PassPopUpStyle } from './dropdown-style'

const valid = {
  color: '#1CD94B',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '25px'
}

const invalid = {
  color: 'red',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '25px'
}

export default function PassPopUp ({ state }) {
  return (
    <PassPopUpStyle>
      <div
        style={{
          padding: '0px 20px',
          paddingBottom: '15px'
        }}
      >
        <div className="msg-container d-flex justify-content-between">
          <h6>
            <p id="letter" style={state.lowercaseValid ? valid : invalid}>
              1- A <b>lowercase</b> letter
            </p>
          </h6>
          <h6>
            <p id="number" style={state.specialCharValid ? valid : invalid}>
              4- A <b>special characters</b>&nbsp;&nbsp;&nbsp;
            </p>
          </h6>
        </div>
        <div className="msg-container d-flex justify-content-between">
          <h6>
            <p id="capital" style={state.uppercaseValid ? valid : invalid}>
              2- A <b>capital (uppercase)</b> letter
            </p>
          </h6>
          <h6>
            <p id="length" style={state.minimumChar ? valid : invalid}>
              5- Minimum <b>8 characters</b>
            </p>
          </h6>
        </div>
        <div className="msg-container d-flex justify-content-between">
          <h6>
            <p id="number" style={state.numberValid ? valid : invalid}>
              3- A <b>number</b>
            </p>
          </h6>
        </div>
      </div>
    </PassPopUpStyle>
  )
}

PassPopUp.propTypes = {
  state: propTypes.object
}
