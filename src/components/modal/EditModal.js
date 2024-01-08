import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Select, message, Input } from 'antd'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { DataService } from '../../config/dataService/dataService'

export default function EditModal({ isModalOpen, setIsModalOpen, selelectedRow, getUsersApplicationDetails }) {
  const [form] = Form.useForm()
  const { t } = useTranslation()
  const { Option } = Select
  const [loading, setLoading] = useState(false)
  const [submittable, setSubmittable] = React.useState(false)
  const [bitfinexUrl, setBitfinexUrl] = useState('')
  const [data, setData] = useState()

  // Watch all values
  const watch = Form.useWatch([], form)

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      },
    )
  }, [watch])

  useEffect(() => {
    console.log('selected row', selelectedRow)
    if (
      selelectedRow?.paymentDetails?.paymentType &&
      selelectedRow?.paymentDetails?.TransactionId &&
      selelectedRow?.paymentDetails?.residentType
    ) {
      form.setFieldValue('residentType', selelectedRow.paymentDetails.residentType)
      form.setFieldValue('paymentType', selelectedRow.paymentDetails.paymentType)
      form.setFieldValue('TransactionId', selelectedRow.paymentDetails.TransactionId)
    } else {
      form.setFieldValue('residentType', '')
      form.setFieldValue('paymentType', '')
      form.setFieldValue('TransactionId', '')
    }
  }, [selelectedRow])

  const handleUpdate = () => {
    if (data.paymentType === '') {
      message.error('Please choose the payment type')
      return
    }
    const body = {
      email: selelectedRow.email,
      name: selelectedRow.name,
      phoneNumber: selelectedRow.phoneNumber,
      paymentDetails: {
        residentType: data.residentType,
        paymentType: data.paymentType,
      },
    }
    setLoading(true)
    DataService.patch(`/userApplications/${selelectedRow._id}`, body)
      .then(async () => {
        const nationData = await DataService.get(`/country/code/${selelectedRow.nationality}`)
        const countryData = await DataService.get(`/country/code/${selelectedRow.resid_country}`)
        const invoiceData = {
          // amount: 0.1,
          amount: String(data.amount),
          currency: 'USD',
          payCurrencies: data.paymentType === 'BTC' ? ['BTC'] : ['UST-ETH'],
          // orderId: 'admintest',
          duration: 259200,
          // webhook: `${process.env.REACT_APP_API_ENDPOINT}bitfinex/updatePayment`,
          // redirectUrl: 'https://example.com/checkout/order123',
          nationality: nationData.data.name,
          residCountry: countryData.data.name,
          residStreet: selelectedRow.resid_street,
          residZipCode: selelectedRow.resid_zipcode,
          residBuildingNo: selelectedRow.resid_building_name,
          residCity: selelectedRow.resid_city,
          fullName: selelectedRow.name,
          email: selelectedRow.email,
          paymentType: 'PassportPayment',
          userId: selelectedRow.userId,
        }
        console.log('invoice data', invoiceData)
        await DataService.post('/bitfinex/submitInvoice', invoiceData)
          .then((resInvoice) => {
            if (resInvoice.status === 201) {
              const url = `https://pay.bitfinex.com/gateway/order/${resInvoice.data}`
              setBitfinexUrl(url)
            } else {
              message.error('Please validate your data.')
            }
            // const windowFeatures = 'width=600,height=800,resizable,scrollbars';
            // window.open(url, '_blank', windowFeatures);
            setLoading(false)
          })
          .catch(() => {
            setLoading(false)
          })

        // setIsModalOpen(false);
        getUsersApplicationDetails()
        form.resetFields()
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const handleChange = (value) => {
    setData((prev) => {
      return { ...prev, ...value }
    })
  }

  useEffect(() => {
    if (!isModalOpen) {
      setBitfinexUrl('')
    }
  }, [isModalOpen])

  const validateNumber = (rule, value, callback) => {
    const upperLimit = Number(process.env.REACT_APP_APPLICATION_FEE)
    const regexPattern = `^(?!0\\d)(\\d{1,3}(\\.\\d+)?|${upperLimit}(\\.0+)?)$`
    const regex = new RegExp(regexPattern)
    if (!value || (value > 0 && value <= process.env.REACT_APP_APPLICATION_FEE && regex.test(value))) {
      callback()
    } else {
      callback(t(`Please enter a number between 1 and ${process.env.REACT_APP_APPLICATION_FEE}`))
    }
  }

  return (
    <Modal
      width="30%"
      title={bitfinexUrl ? 'Success' : 'Update'}
      open={isModalOpen}
      footer={null}
      onCancel={() => {
        setIsModalOpen(false)
        form.resetFields()
      }}
    >
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
      ) : (
        <Form
          layout="vertical"
          className="add-new-wallet"
          form={form}
          onValuesChange={handleChange}
          onFinish={handleUpdate}
        >
          <div className="d-flex justify-content-center">
            <Form.Item
              name="residentType"
              label={t('Select Resident Type')}
              style={{ width: '100%' }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select style={{ width: '100%' }}>
                <Option value="">{t('Select one')}</Option>
                <Option value="Freedom Visa">{t('Freedom Visa')}</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="d-flex justify-content-center">
            <Form.Item
              name="paymentType"
              label={t('Select Payment Type')}
              style={{ width: '100%' }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select style={{ width: '100%' }}>
                <Option value="">{t('Select one')}</Option>
                <Option value="BTC">{t('Pay by BTC')}</Option>
                <Option value="USDt">{t('Pay by USDt')}</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="d-flex justify-content-center">
            <Form.Item
              name="amount"
              label={t('Amount')}
              style={{ width: '100%' }}
              rules={[
                {
                  required: true,
                  message: 'Please Input Amount',
                },
                { validator: validateNumber },
              ]}
            >
              <Input placeholder={t('Amount')} />
            </Form.Item>
          </div>
          {/* <Form.Item
          name="TransactionId"
          label={t('Transaction Id')}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder={t('Enter Your Transaction Id')} />
        </Form.Item> */}
          <Button type="primary" htmlType="submit" disabled={loading || !submittable || !form.getFieldValue('amount')}>
            {loading ? 'Loading...' : 'Submit Payment'}
          </Button>
        </Form>
      )}
    </Modal>
  )
}

EditModal.propTypes = {
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  // form: PropTypes.any,
  selelectedRow: PropTypes.any,
  getUsersApplicationDetails: PropTypes.func,
}
