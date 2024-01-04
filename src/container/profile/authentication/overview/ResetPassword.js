/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Input, Row, Col, message, Button } from 'antd'
import { useTranslation } from 'react-i18next'
// import Cookies from 'js-cookie';
import { AuthFormWrap, LoginWrap } from './style'
import { DataService } from '../../../../config/dataService/dataService'
import PassPopUp from '../../../../components/dropdown/PassPopUp'
import { checkPasswordValid } from '../../../../utility/utility'

function ResetPassword () {
  const navigate = useNavigate()
  const location = useLocation()
  const [form] = Form.useForm()
  const { t } = useTranslation()
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  })
  const [loading, setLoading] = useState(false)
  const [tooltip, setTooltip] = React.useState(false)
  const [state1, setState1] = useState({
    minimumChar: false,
    specialCharValid: false,
    uppercaseValid: false,
    lowercaseValid: false,
    numberValid: false
  })

  const handleSubmit = async () => {
    try {
      const body = {
        email: location.state,
        password: state.password,
        otp: Number(state.otp)
      }
      setLoading(true)
      const response = await DataService.post('/resetPassword', body)
      response.data = typeof response.data === 'string' ? JSON.parse(response?.data) : response?.data
      if (response?.status === 200) {
        navigate('/login')
        setLoading(false)
        message.success(t('reset_password_success'))
      } else {
        message.error(t('reset_password_otp_invalid'))
        setLoading(false)
      }
    } catch (err) {
      message.error(t('reset_password_otp_invalid'))
      setLoading(false)
    }
  }

  const resendOTP = async () => {
    try {
      const body = {
        email: location.state
      }
      const response = await DataService.post('/resendVerificationCode', body)
      if (response?.data?.success === false) {
        message.error(response?.data?.errors.msg)
      } else {
        message.success(t('reset_password_resend_otp_success'))
      }
    } catch (err) {
      message.error(err?.response?.data?.errors.msg)
    }
  }

  const validateCPassword = (rule, value, callback) => {
    if (value && value !== state.password) {
      callback(t('reset_password_confirm_password_invalid'))
    } else {
      callback()
    }
  }

  const validatePassword = (rule, value, callback) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (regex.test(value)) {
      callback()
    } else {
      if (value) {
        callback(t('reset_password_password_strong'))
      }
      callback(t('reset_password_password_required'))
    }
  }

  const areAllValidationsComplete = () => {
    if (
      state1.minimumChar &&
      state1.specialCharValid &&
      state1.lowercaseValid &&
      state1.numberValid &&
      state1.uppercaseValid
    ) {
      return true
    }
    return false
  }

  return (
    <LoginWrap>
      <div className="left-container">
        <div className="left-main">
          <h1 className="left-heading font-bold">
            {t('YOU`RE_A_FEW')} <br /> {t('STEPS_AWAY')} <br /> {t('TO_THE')} <br />
            {t('FREEDOM')} <br /> {t('RESIDENCY')}{' '}
          </h1>
        </div>
      </div>
      <div className="right-container font-regular">
        <div className="right-main">
          <Row justify="center">
            <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
              <AuthFormWrap>
                <Form form={form} name="forgotPass" onFinish={handleSubmit} layout="vertical" className="main">
                  <div className="ninjadash-authentication-top">
                    <h2 className="top-desc">{t('Reset_Password')}</h2>
                  </div>
                  <div className="ninjadash-authentication-content">
                    <p className="forgot-text" style={{ textAlign: 'center' }}>
                      {t('Enter_below_details_and_click_on_submit')}.
                    </p>
                    <Form.Item name="password" rules={[{ validator: validatePassword }]}>
                      <Input.Password
                        className="material-input"
                        placeholder={t('New Password')}
                        onBlur={() => setTooltip(false)}
                        onFocus={() => setTooltip(true)}
                        onChange={(e) => {
                          setState({ ...state, password: e.target.value })
                          checkPasswordValid(e.target.value, setState1)
                        }}
                        value={state.password}
                      />
                    </Form.Item>
                    <div style={{ position: 'relative' }}>
                      {tooltip && !areAllValidationsComplete() ? <PassPopUp state={state1} /> : null}
                    </div>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: t('reset_password_confirm_password_required') },
                        { validator: validateCPassword }
                      ]}
                    >
                      <Input.Password
                        className="material-input"
                        placeholder={t('Confirm Password')}
                        onChange={(e) => setState({ ...state, confirmPassword: e.target.value })}
                        value={state.confirmPassword}
                      />
                    </Form.Item>
                    <Form.Item name="text" rules={[{ required: true, message: t('reset_password_otp_required') }]}>
                      <Input
                        className="material-input"
                        placeholder="OTP"
                        onChange={(e) => setState({ ...state, otp: e.target.value })}
                        value={state.otp}
                        type="text"
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault()
                          }
                        }}
                      />
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Button className="btn-reset" htmlType="submit" type="primary" size="large">
                        {loading ? 'Loading...' : t('Reset_Password')}
                      </Button>
                    </Form.Item>
                    <div
                      className=""
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <p className="" />
                      <p className="forgot-pass-link" style={{ cursor: 'pointer' }} onClick={resendOTP}>
                        {t('Resend_OTP')}
                      </p>
                    </div>
                  </div>
                  <div className="ninjadash-authentication-bottom">
                    <p className="return-text">
                      {t('Return_to')} <Link to="/login">{t('Sign_In')}</Link>
                    </p>
                  </div>
                </Form>
              </AuthFormWrap>
            </Col>
          </Row>
        </div>
        <p onClick={() => navigate('/terms')} className="bottom-terms">
          Terms & Conditions
        </p>
      </div>
    </LoginWrap>
  )
}

export default ResetPassword
