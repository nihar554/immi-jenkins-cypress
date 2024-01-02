import React, { useState } from 'react';
import { Form, Modal, Row, Col, Typography, message } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { DataService } from '../../config/dataService/dataService';
import { Button } from '../buttons/buttons';

const { Text } = Typography;

export default function ReissueModal({ isReissue, setIsReissue, invoiceData }) {
  const [loading, setLoading] = useState(false);
  const [bitfinexUrl, setBitfinexUrl] = useState('');
  const { t } = useTranslation();

  const submitInvoice = async () => {
    const data = {
      amount: invoiceData.amount,
      currency: invoiceData.currency,
      payCurrencies: invoiceData.payCurrencies,
      // orderId: invoiceData.orderID,
      duration: invoiceData.duration,
      // webhook: `${process.env.REACT_APP_API_ENDPOINT}bitfinex/updatePayment`,
      // redirectUrl: 'https://example.com/checkout/order123',
      nationality: invoiceData.customerInfo.nationality,
      residCountry: invoiceData.customerInfo.residCountry,
      residStreet: invoiceData.customerInfo.residStreet,
      residZipCode: invoiceData.customerInfo.residZipCode,
      residBuildingNo: invoiceData.customerInfo.residBuildingNo,
      residCity: invoiceData.customerInfo.residCity,
      fullName: invoiceData.customerInfo.fullName,
      email: invoiceData.customerInfo.email,
      paymentType: 'ApplicationPayment',
      userId: invoiceData.userId,
    };
    await DataService.post('/bitfinex/submitInvoice', data)
      .then((resInvoice) => {
        if (resInvoice.status === 201) {
          const url = `https://pay.bitfinex.com/gateway/order/${resInvoice.data}`;
          setBitfinexUrl(url);
          const windowFeatures = 'width=600,height=800,resizable,scrollbars';
          window.open(url, '_blank', windowFeatures);
        } else {
          message.error('Please validate your data.');
        }
        setLoading(false);
      })
      .catch(() => {
        message.error('Please validate your data.');
        setLoading(false);
      });
  };
  return (
    <Modal
      width="50%"
      //   title={bitfinexUrl ? 'Success' : 'Update'}
      open={isReissue}
      footer={null}
      onCancel={() => {
        setIsReissue(false);
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
                {t(', the application review process will begin.')}
              </p>
            </div>
          ) : invoiceData ? (
            <Row justify="center">
              <Col sm={22} xs={24}>
                <div className="create-account-form">
                  <Row gutter={30}>
                    <Col xl={8} xxl={8}>
                      <Form.Item
                        name="amount"
                        label={t('Amount')}
                        rules={[
                          {
                            required: true,
                            message: 'Please Input Amount',
                          },
                        ]}
                      >
                        <Text>{invoiceData.amount}</Text>
                      </Form.Item>
                    </Col>
                    <Col xl={8} xxl={8}>
                      <Form.Item
                        name="currency"
                        label={t('Currency')}
                        rules={[
                          {
                            required: true,
                            message: 'Please Input Currency',
                          },
                        ]}
                      >
                        <Text>{invoiceData.currency}</Text>
                      </Form.Item>
                    </Col>
                    <Col xl={8} xxl={8}>
                      <Form.Item
                        name="pay-currency"
                        label={t('Pay Currency')}
                        rules={[
                          {
                            required: true,
                            message: 'Please Input Pay Currency',
                          },
                        ]}
                      >
                        {invoiceData.payCurrencies.map((item) => (
                          <Text>{item}</Text>
                        ))}
                      </Form.Item>
                    </Col>
                  </Row>
                  <div className="division" />
                  <Row gutter={30}>
                    <Button type="primary" load={loading} onClick={() => submitInvoice()}>
                      Submit Payment
                    </Button>
                  </Row>
                </div>
              </Col>
            </Row>
          ) : (
            <Row justify="center">
              <Col sm={22} xs={24}>
                <div className="create-account-form">
                  There is an issue for revoking the original invoice, please retry
                </div>
              </Col>
            </Row>
          )}
        </div>
      </div>
    </Modal>
  );
}

ReissueModal.propTypes = {
  isReissue: PropTypes.bool,
  setIsReissue: PropTypes.func,
  invoiceData: PropTypes.object,
};
