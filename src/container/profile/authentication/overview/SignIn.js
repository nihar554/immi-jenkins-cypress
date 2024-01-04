/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState, useCallback } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Form, Input, Row, Col } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { AuthFormWrap, LoginWrap } from './style'
import { login } from '../../../../redux/authentication/actionCreator'
import { Checkbox } from '../../../../components/checkbox/checkbox'

function SignIn () {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.loading)
  const [form] = Form.useForm()
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const onChange = (checked) => {
    setState({ ...state, checked })
  }

  const handleSubmit = useCallback(
    (values) => {
      dispatch(
        login(values, (isLogin) => {
          if (isLogin) {
            navigate('/')
          } else {
            navigate('/verify-otp')
          }
        })
      )
    },
    [navigate, dispatch]
  )

  return (
    <LoginWrap>
      <div className="left-container">
        <div className="left-main">
          <h1 className="left-heading font-bold">
            {t('WELCOME')} {t('TO')} <br /> <span className="no-wrap">{t('EL_SALVADOR')}</span>
          </h1>
        </div>
      </div>
      <div className="right-container font-regular">
        <div className="right-main">
          <Row justify="center">
            <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
              <AuthFormWrap>
                <div className="main">
                  <div className="ninjadash-authentication-top">
                    <p className="top-desc">{t('Login_to_your_account')}</p>
                  </div>
                  <div className="ninjadash-authentication-content">
                    <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
                      <Form.Item
                        name="email"
                        rules={[{ message: t('Please_input_your_email'), required: true, type: 'email' }]}
                      >
                        <Input
                          placeholder={t('Your_E-Mail_Address')}
                          onChange={(e) => setState({ ...state, email: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item name="password" rules={[{ message: t('login_password_required'), required: true }]}>
                        <Input.Password
                          placeholder={t('Password')}
                          onChange={(e) => setState({ ...state, password: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item>
                        <div className="ninjadash-auth-extra-links">
                          <Checkbox onChange={onChange} checked={state.checked}>
                            {t('Keep_me_logged_in')}
                          </Checkbox>
                          <NavLink className="forgot-pass-link" to="/forgot-password">
                            {t('Forgot_password')}?
                          </NavLink>
                        </div>
                      </Form.Item>
                      <Form.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button className="btn-signin" type="submit">
                          {isLoading ? `${t('Loading')}...` : t('Sign_In')}
                        </button>
                      </Form.Item>
                    </Form>
                    <div className="ninjadash-authentication-bottom">
                      <p>
                        {t('Don`t_have_an_account')}?<Link to="/register">{t('Sign_up')}</Link>
                      </p>
                    </div>
                  </div>
                </div>
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

export default SignIn
