/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react'
import { Row, Col, Form, Input, Button, message } from 'antd'

import ReCAPTCHA from 'react-google-recaptcha'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthFormWrap, LoginWrap } from './style'

import { register } from '../../../../redux/authentication/actionCreator'
import { Checkbox } from '../../../../components/checkbox/checkbox'
import PassPopUp from '../../../../components/dropdown/PassPopUp'
import { checkPasswordValid } from '../../../../utility/utility'

function SignUp() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const recaptcha = useRef()
  const isLoading = useSelector((state) => state?.auth?.loading)
  const [tooltip, setTooltip] = React.useState(false)
  // const [isvalid, setisvalid] = React.useState(false);
  const [state, setState] = useState({
    minimumChar: false,
    specialCharValid: false,
    uppercaseValid: false,
    lowercaseValid: false,
    numberValid: false,
  })
  const [password, setPassword] = React.useState('')

  const [form] = Form.useForm()

  const onChange = () => {
    navigate('/verify-otp')
  }

  const areAllValidationsComplete = () => {
    if (
      state.minimumChar &&
      state.specialCharValid &&
      state.lowercaseValid &&
      state.numberValid &&
      state.uppercaseValid
    ) {
      return true
    }
    return false
  }

  const handleSubmit = (values) => {
    if (process.env.REACT_APP_IS_RECAPTCHA_ENABLED === 'true') {
      const captchaValue = recaptcha.current.getValue()
      const body = {
        ...values,
        passportCountry: 'IND',
        roleId: 'USER',
        captcha: captchaValue,
      }
      if (!captchaValue) {
        message.error(t('registration_captcha_required'))
      } else {
        dispatch(register(body, onChange))
      }
    } else {
      const body = {
        ...values,
        passportCountry: 'IND',
        roleId: 'USER',
      }
      dispatch(register(body, onChange))
    }
  }

  const validateCPassword = (rule, value, callback) => {
    if (value && value !== password) {
      callback(t('registration_confirm_password_invalid'))
    } else {
      callback()
    }
  }

  const validatePassword = (rule, value, callback) => {
    // Password validation rules
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (regex.test(value)) {
      callback() // Validation passed
    } else {
      if (value) {
        callback(t('registration_password_strong'))
      }
      callback(t('registration_password_required'))
    }
  }

  return (
    <LoginWrap>
      <div className="left-container">
        <div className="left-main">
          <h1 className="left-heading font-bold">
            {t('YOU`RE_A_FEW')} <br /> {t('STEPS_AWAY')} <br /> {t('TO_THE')} <br />
            {t('FREEDOM')} <br /> {t('PASSPORT')}{' '}
          </h1>
        </div>
      </div>
      <div className="right-container font-regular">
        <div className="right-main">
          <Row justify="center">
            <Col>
              <AuthFormWrap>
                <div className="main">
                  <div className="ninjadash-authentication-top">
                    <p className="top-desc">{t('Register_your_account')}</p>
                  </div>
                  <div className="ninjadash-authentication-content">
                    <Form form={form} name="register" onFinish={handleSubmit} layout="vertical">
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Form.Item
                          name="firstName"
                          style={{ width: '48%' }}
                          rules={[{ required: true, message: t('registration_first_name_required') }]}
                        >
                          <Input
                            placeholder={t('First_Name')}
                            onKeyPress={(event) => {
                              if (!/[a-zA-Z]/.test(event.key)) {
                                event.preventDefault()
                              }
                            }}
                          />
                        </Form.Item>
                        <Form.Item
                          name="lastName"
                          style={{ width: '48%' }}
                          rules={[{ required: true, message: t('registration_last_name_required') }]}
                        >
                          <Input
                            placeholder={t('Last_Name')}
                            onKeyPress={(event) => {
                              if (!/[a-zA-Z]/.test(event.key)) {
                                event.preventDefault()
                              }
                            }}
                          />
                        </Form.Item>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Form.Item
                          name="email"
                          style={{ width: '100%' }}
                          rules={[{ required: true, message: t('registration_email_required'), type: 'email' }]}
                        >
                          <Input placeholder={t('Your_E-Mail_Address')} />
                        </Form.Item>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Form.Item style={{ width: '48%' }} name="password" rules={[{ validator: validatePassword }]}>
                          <Input.Password
                            placeholder={t('Password')}
                            onBlur={() => setTooltip(false)}
                            onFocus={() => setTooltip(true)}
                            onChange={(e) => {
                              setPassword(e.target.value)
                              checkPasswordValid(e.target.value, setState, state)
                            }}
                          />
                        </Form.Item>

                        <Form.Item
                          name="confirmPassword"
                          style={{ width: '48%' }}
                          rules={[
                            { required: true, message: t('registration_confirm_password_required') },
                            { validator: validateCPassword },
                          ]}
                        >
                          <Input.Password placeholder={t('Confirm Password')} />
                        </Form.Item>
                      </div>

                      <div style={{ position: 'relative' }}>
                        {tooltip && !areAllValidationsComplete() ? <PassPopUp state={state} /> : null}
                      </div>

                      <div
                        className="ninjadash-auth-extra-links checkbox-input"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <Form.Item
                          name="checked"
                          valuePropName="checked"
                          rules={[
                            {
                              validator: async (_, checked) => {
                                if (!checked) {
                                  return Promise.reject(new Error(t('registration_temrs_condition_required')))
                                }
                              },
                            },
                          ]}
                        >
                          <Checkbox>
                            {t('I_have_read_and_understood_the')}&nbsp;
                            <Link to="/terms" target="_blank" className="terms-condition">
                              Terms and Conditions
                            </Link>
                          </Checkbox>
                        </Form.Item>
                      </div>
                      {process.env.REACT_APP_IS_RECAPTCHA_ENABLED === 'true' ? (
                        <div className="recaptcha-block">
                          <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} />
                        </div>
                      ) : (
                        <></>
                      )}
                      <Form.Item className="recaptcha-signup-block">
                        <Button className="btn-create" htmlType="submit" type="primary" size="large">
                          {isLoading ? 'Loading...' : 'Sign Up'}
                        </Button>
                      </Form.Item>
                    </Form>
                    <div className="ninjadash-authentication-bottom">
                      <p className="no-wrap">
                        {t('Need_help_accessing_your_account')}? | {t('Already a user')}?
                        <Link to="/login">{t('Log In')}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </AuthFormWrap>
            </Col>
          </Row>
        </div>
        <Link to="/terms" target="_blank" className="bottom-terms">
          Terms & Conditions
        </Link>
      </div>
    </LoginWrap>
  )
}

export default SignUp
