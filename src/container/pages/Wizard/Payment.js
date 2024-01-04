/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Col, Form, Row } from 'antd'
import propTypes from 'prop-types'
// import { useTranslation } from 'react-i18next';
// import InfoCard from '../../../components/cards/InfoCard';
import PayBitcoinActive from '../../../static/img/pay-bitcoin-active.svg'
import PayBitcoinInActive from '../../../static/img/pay-bitcoin-inactive.svg'
import PayUsdtActive from '../../../static/img/pay-usdt-active.svg'
import PayUsdtInActive from '../../../static/img/pay-usdt-inactive.svg'
import { PaymentWrapper } from '../style'

export default function Payment ({ form, setPaymentType, paymentType }) {
  // const { t } = useTranslation();
  return (
    <PaymentWrapper>
      <div className="atbd-form-checkout">
        <Row justify="center">
          <Col sm={22} xs={24}>
            <div className="create-account-form">
              <Form name="account" form={form}>
                <Row className="payment-block">
                  <Col xs={8}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="153" height="135" viewBox="0 0 153 135" fill="none">
                      <path
                        d="M49.9563 49.4926C57.5821 49.4926 63.7641 43.3106 63.7641 35.6848C63.7641 28.0589 57.5821 21.877 49.9563 21.877C42.3304 21.877 36.1484 28.0589 36.1484 35.6848C36.1484 43.3106 42.3304 49.4926 49.9563 49.4926Z"
                        stroke="#041E5F"
                      />
                      <path
                        d="M77.5711 77.1086C77.5711 84.7374 77.5711 90.9164 49.9555 90.9164C22.3398 90.9164 22.3398 84.7374 22.3398 77.1086C22.3398 69.4798 34.6978 63.3008 49.9555 63.3008C65.2131 63.3008 77.5711 69.4798 77.5711 77.1086Z"
                        stroke="#041E5F"
                      />
                      <path
                        d="M1.62891 56.3978C1.62891 30.3631 1.62891 17.3424 9.72029 9.25788C17.8048 1.1665 30.8255 1.1665 56.8602 1.1665H84.4758C110.51 1.1665 123.531 1.1665 131.616 9.25788C139.707 17.3424 139.707 30.3631 139.707 56.3978C139.707 82.4324 139.707 95.4532 131.616 103.538C123.531 111.629 110.51 111.629 84.4758 111.629H56.8602C30.8255 111.629 17.8048 111.629 9.72029 103.538C1.62891 95.4532 1.62891 82.4324 1.62891 56.3978Z"
                        stroke="#041E5F"
                      />
                      <path d="M118.997 56.3978H91.381M118.997 35.686H84.4771" stroke="#041E5F" />
                      <path
                        d="M120.396 69.3956L94.6211 80.0149V106.189C94.6211 120.215 123.388 133.61 123.388 133.61C123.388 133.61 152.154 120.215 152.154 106.189V80.0149L126.379 69.3956C125.431 69.0007 124.415 68.7974 123.388 68.7974C122.361 68.7974 121.344 69.0007 120.396 69.3956Z"
                        fill="white"
                        stroke="#041E5F"
                      />
                      <path
                        d="M134.107 95.7207H123.388V80.897L112.902 102.867H123.621V117.69L134.107 95.7207Z"
                        fill="white"
                        stroke="#041E5F"
                      />
                    </svg>
                  </Col>
                  <Col xs={14}>
                    <div className="" style={{ display: 'flex', flexDirection: 'column', marginBottom: '6%' }}>
                      <span className="payment-title">Freedom Passport</span>
                      <span className="payment-desc">Application Fee: 999 USD</span>
                    </div>
                  </Col>
                </Row>
                <Row justify="center" className="payment-block">
                  <Col xl={12} xxl={12}>
                    {/* <div
                      onClick={() => setPaymentType('bitcoin')}
                      style={
                        paymentType === 'bitcoin'
                          ? {
                              border: '1px solid #041E5F',
                              background: '#041E5F',
                              boxShadow: '2px 2px 11px 1px rgba(0, 0, 0, 0.35)',
                              marginTop: '2rem',
                              marginBottom: '2rem',
                              color: '#fff',
                              padding: '12px',
                              cursor: 'pointer',
                            }
                          : {
                              border: '1px solid #041E5F',
                              background: '#fff',
                              boxShadow: '2px 2px 11px 1px rgba(0, 0, 0, 0.35)',
                              marginTop: '2rem',
                              marginBottom: '2rem',
                              color: '#041E5F',
                              padding: '12px',
                              cursor: 'pointer',
                            }
                      }
                      className="payment-card-block"
                    >
                      <img src={BitcoinIcon} alt="" height="58" width="58" />
                      <span className="" style={{ fontSize: '24px', paddingLeft: '12px' }}>
                        {t('Pay by Bitcoin')}
                      </span>
                    </div> */}
                    <div className="pay-button" onClick={() => setPaymentType('bitcoin')}>
                      <img src={paymentType === 'bitcoin' ? PayBitcoinActive : PayBitcoinInActive} alt="" />
                    </div>
                  </Col>
                  <Col xl={12} xxl={12}>
                    {/* <div
                      onClick={() => setPaymentType('usdt')}
                      style={
                        paymentType === 'usdt'
                          ? {
                              border: '1px solid #041E5F',
                              background: '#041E5F',
                              boxShadow: '2px 2px 11px 1px rgba(0, 0, 0, 0.35)',
                              marginTop: '2rem',
                              marginBottom: '2rem',
                              color: '#fff',
                              padding: '12px',
                              cursor: 'pointer',
                            }
                          : {
                              border: '1px solid #041E5F',
                              background: '#fff',
                              boxShadow: '2px 2px 11px 1px rgba(0, 0, 0, 0.35)',
                              marginTop: '2rem',
                              marginBottom: '2rem',
                              color: '#041E5F',
                              padding: '12px',
                              cursor: 'pointer',
                            }
                      }
                      className="payment-card-block"
                    >
                      <img src={UsdtIcon} alt="" height="58" width="58" />
                      <span className="" style={{ fontSize: '24px', paddingLeft: '12px' }}>
                        {t('Pay by USDt')}
                      </span>
                    </div> */}
                    <div className="pay-button" onClick={() => setPaymentType('usdt')}>
                      <img src={paymentType === 'usdt' ? PayUsdtActive : PayUsdtInActive} alt="" />
                    </div>
                  </Col>
                  {/* <Col xl={12} xxl={12}>
                    <div
                      onClick={() => setPaymentType('tether')}
                      style={
                        paymentType === 'tether'
                          ? {
                              border: '2px solid #0042A8',
                            }
                          : {}
                      }
                      className="payment-card-block"
                    >
                      <img src={TetherIcon} alt="" />
                      <span className="" style={{ color: '#0042A8', fontSize: '24px', paddingLeft: '12px' }}>
                        {t('Pay by Tether')}
                      </span>
                    </div>
                  </Col> */}
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </PaymentWrapper>
  )
}

Payment.propTypes = {
  form: propTypes.object,
  paymentType: propTypes.string,
  setPaymentType: propTypes.func
}
