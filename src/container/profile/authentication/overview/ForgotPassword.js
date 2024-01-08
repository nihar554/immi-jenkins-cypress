/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Row, Col, message } from 'antd'
import { useTranslation } from 'react-i18next'
// import Cookies from 'js-cookie';
import { AuthFormWrap, LoginWrap } from './style'
import { DataService } from '../../../../config/dataService/dataService'

function ForgotPassword() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState({
    email: '',
  })
  const [loading, setLoading] = useState(false)
  const handleSubmit = async () => {
    try {
      const body = {
        email: state.email,
      }
      setLoading(true)
      const response = await DataService.post('/forgotOTP', body)
      if (response?.data?.success === true) {
        setLoading(false)
        navigate('/reset-password', { state: state.email })
        message.success(t('forgot_password_success'))
      } else if (response?.data?.errors?.msg === 'INVALID_DETAILS') {
        setLoading(false)
        message.error(t('forgot_password_invalid_email'))
      } else {
        message.error(response?.data?.errors.msg)
      }
    } catch (err) {
      setLoading(false)
      message.error(err?.response?.data?.errors.msg)
    }
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
                <Form name="forgotPass" onFinish={handleSubmit} layout="vertical" className="main">
                  <div className="ninjadash-authentication-top">
                    <h2 className="top-desc">{t('Forgot_Password')}</h2>
                  </div>
                  <div className="ninjadash-authentication-content">
                    <p className="forgot-text" style={{ textAlign: 'center' }}>
                      {t(
                        'Enter_the_email_address_you_used_when_you_joined_and_we’ll_send_you_instructions_to_reset_your_password',
                      )}
                      .
                    </p>
                    <Form.Item
                      name="email"
                      type="email"
                      rules={[{ required: true, message: t('forgot_password_email_required'), type: 'email' }]}
                    >
                      <Input
                        placeholder={t('Your_E-Mail_Address')}
                        className="material-input"
                        onChange={(e) => setState({ email: e.target.value })}
                        value={state.email}
                      />
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <button className="btn-reset" type="submit">
                        {loading ? t('Loading...') : t('Forgot_Password')}
                      </button>
                    </Form.Item>
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

export default ForgotPassword
