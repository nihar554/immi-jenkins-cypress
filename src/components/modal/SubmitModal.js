import React, { useState } from 'react'
import { Form, Modal, Row, Col, message } from 'antd'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
// import InfoCard from '../cards/InfoCard';
import { Button } from '../buttons/buttons'
import BitcoinIcon from '../../static/img/bitcoin-icon.png'
import UsdtIcon from '../../static/img/usdt-icon.png'
import { DataService } from '../../config/dataService/dataService'

export default function SubmitModal({
  isModalOpen,
  setIsModalOpen,
  // isResident,
  // setIsResident,
  details,
  paymentType,
  setPaymentType,
  getUserPaymentDetails,
}) {
  const [loading, setLoading] = useState(false)
  const [bitfinexUrl, setBitfinexUrl] = useState('')
  const submitInvoice = async () => {
    const invoiceData = {
      amount: process.env.REACT_APP_APPLICATION_FEE,
      currency: 'USD',
      payCurrencies: paymentType === 'bitcoin' ? ['BTC'] : ['UST-ETH'],
      // orderId: 'order123',
      duration: 86400,
      // webhook: `${process.env.REACT_APP_API_ENDPOINT}bitfinex/updatePayment`,
      // redirectUrl: 'https://example.com/checkout/order123',
      nationality: details.nationality,
      residCountry: details.resid_country,
      residStreet: details.resid_street,
      residZipCode: details.resid_zipcode,
      residBuildingNo: details.resid_building_name,
      residCity: details.resid_city,
      fullName: `${`${details.first_name} ${details.middle_name ? details.middle_name : ''} ${details.last_name}`}`,
      email: JSON.parse(Cookies.get('user')).email,
      paymentType: 'ApplicationPayment',
    }
    await DataService.post('/bitfinex/submitInvoice', invoiceData)
      .then((resInvoice) => {
        if (resInvoice.status === 201) {
          const url = `https://pay.bitfinex.com/gateway/order/${resInvoice.data}`
          setBitfinexUrl(url)
          const windowFeatures = 'width=600,height=800,resizable,scrollbars'
          window.open(url, '_blank', windowFeatures)
        } else {
          message.error('Please validate your data.')
        }
        setLoading(false)
        getUserPaymentDetails()
      })
      .catch(() => {
        message.error('Please validate your data.')
        getUserPaymentDetails()
        setLoading(false)
      })
  }
  const { t } = useTranslation()
  return (
    <Modal
      width="50%"
      //   title={bitfinexUrl ? 'Success' : 'Update'}
      open={isModalOpen}
      footer={null}
      onCancel={() => {
        setIsModalOpen(false)
      }}
    >
      <div>
        <div className="atbd-form-checkout">
          {bitfinexUrl ? (
            <div className="justify-content-center flex-col">
              <h3 className="">{t('You have submitted the Application.')}</h3>
              <p className="">
                {t('After completing the payment through ')}{' '}
                <a target="_blank" href={bitfinexUrl} rel="noreferrer">
                  {t('this link')}
                </a>
                {t(' the application review process will begin.')}
              </p>
            </div>
          ) : (
            <Row justify="center">
              <Col sm={22} xs={24}>
                <div className="create-account-form">
                  <Form name="account">
                    {/* <Row gutter={15}>
                      <Col xs={12}>
                        <InfoCard
                          text={t('Buy Resident Card')}
                          icon="UilAward"
                          type="info"
                          counter={t('Application Fee: 120 USD')}
                          isResident={isResident}
                          setIsResident={setIsResident}
                        />
                      </Col>
                      <Col xs={12}>
                        <InfoCard
                          isResident={isResident}
                          setIsResident={setIsResident}
                          text={t('Buy Citizenship')}
                          icon="UilAward"
                          type="info"
                          counter={t('Application Fee: 240 USD')}
                        />
                      </Col>
                    </Row> */}
                    <Row justify="center" gutter={25}>
                      <Col xl={12} xxl={12}>
                        <div
                          onClick={() => setPaymentType('bitcoin')}
                          onKeyDown={() => {}}
                          role="button"
                          tabIndex={0}
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
                        </div>
                      </Col>
                      <Col xl={12} xxl={12}>
                        <div
                          onClick={() => setPaymentType('usdt')}
                          onKeyDown={() => {}}
                          role="button"
                          tabIndex={0}
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
                        </div>
                      </Col>
                    </Row>
                    <Row justify="center" gutter={25}>
                      <Button type="primary" load={loading} onClick={() => submitInvoice()}>
                        Submit Payment
                      </Button>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </Modal>
  )
}

SubmitModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  // isResident: PropTypes.string,
  // setIsResident: PropTypes.func,
  paymentType: PropTypes.string,
  setPaymentType: PropTypes.func,
  details: PropTypes.object,
  getUserPaymentDetails: PropTypes.func,
}
