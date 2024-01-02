import { Col, Form, Input, Row } from 'antd';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthFormWrap, LoginWrap } from './style';
import { verifyOTP } from '../../../../redux/authentication/actionCreator';

function OtpVerify() {
  const { t } = useTranslation();
  // const user = useSelector((state) => state.auth.data.user);
  const userData = JSON.parse(Cookies.get('user_data'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.auth?.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    otp: '',
    email: '',
    id: '',
  });

  const onSuccess = () => {
    navigate('/login');
  };

  const handleSubmit = useCallback(
    (values) => {
      const dataToSend = {
        otp: values.otp,
        email: userData?.email,
      };
      dispatch(verifyOTP(dataToSend, () => onSuccess()));
    },
    [navigate, dispatch],
  );

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
            <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
              <AuthFormWrap>
                <div className="main">
                  <div className="ninjadash-authentication-top">
                    <p className="top-desc">Verify OTP, sent to your email</p>
                  </div>
                  <div className="ninjadash-authentication-content">
                    <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
                      <Form.Item
                        name="otp"
                        rules={[{ message: 'Verify your OTP', required: true }]}
                        // label="One-Time-Password"
                      >
                        <Input
                          className="material-input"
                          placeholder="OTP"
                          onChange={(e) => setState({ ...state, otp: e.target.value })}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}
                      >
                        <button className="btn-signin" type="submit">
                          {isLoading ? 'Loading...' : 'Submit'}
                        </button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </AuthFormWrap>
            </Col>
          </Row>
        </div>
      </div>
    </LoginWrap>
  );
}

export default OtpVerify;
