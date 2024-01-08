import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Input, Select, message } from 'antd'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'
import { Cards } from '../../../../components/cards/frame/cards-frame'
import { Button } from '../../../../components/buttons/buttons'
import { BasicFormWrapper } from '../../../styled'
import Heading from '../../../../components/heading/heading'
import { DataService } from '../../../../config/dataService/dataService'

const { Option } = Select

function Profile({ state, setState }) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState('Update Profile')
  const [disableBtn, setDisableBtn] = useState(true)
  const [country, setCountry] = useState([])
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    const dataToSend = {
      ...state,
      ...values,
    }
    setLoading(true)
    setBtnText('Processing')
    DataService.patch('/profile', dataToSend)
      .then((res) => {
        if (res && res.status === 200) {
          setLoading(false)
          setBtnText('Updated')
          Cookies.set('user', res.data)
          message.success(t('Your profile has been updated'))
          setTimeout(() => {
            setBtnText('Update Profile')
            setState(res.data)
            setDisableBtn(true)
          }, 3000)
        } else {
          const errorMsg = typeof res.data.errors.msg === 'string' ? res.data.errors.msg : res.data.errors.msg[0].msg
          message.error(errorMsg)
          setLoading(false)
          setDisableBtn(false)
        }
      })
      .catch((err) => {
        setLoading(false)
        setDisableBtn(false)
        setBtnText('Update Profile')
        message.error(t('Something wrong'))
        console.log(err)
      })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    form.resetFields()
    setDisableBtn(true)
  }

  useEffect(() => {
    DataService.get('/country/all')
      .then((res) => {
        setCountry(res.data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, [])
  // const validatePhoneNumber = (rule, value, callback) => {
  //   const phoneRegex = /^[0-9]{10}$/;
  //   if (phoneRegex.test(value)) {
  //     callback();
  //   } else {
  //     callback('Please enter a valid 10-digit phone number.');
  //   }
  // };

  return (
    <Cards
      title={
        <div className="setting-card-title">
          <Heading as="h4">{t('Edit_Profile')}</Heading>
          <span>{t('Set_Up_Your_Personal_Information')}</span>
        </div>
      }
    >
      <Row justify="left">
        <Col xxl={20} xl={24} lg={24} xs={24}>
          <BasicFormWrapper>
            <Form
              form={form}
              name="editProfile"
              onFinish={handleSubmit}
              onValuesChange={() => {
                setDisableBtn(false)
              }}
            >
              <Row gutter={40}>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="firstName" initialValue={state.firstName} label={t('First_Name')}>
                    <Input placeholder={t('Enter_First_Name')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="lastName" initialValue={state.lastName} label={t('Last_Name')}>
                    <Input placeholder={t('Enter_Last_Name')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="userName" initialValue={state?.userName} label={t('Username')}>
                    <Input placeholder={t('Enter_Username')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="phoneNo" initialValue={state?.phoneNo} label={t('Phone_Number')}>
                    <Input placeholder={t('Enter_your_phone_number')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item
                    rules={[
                      {
                        type: 'email',
                        message: t('Please_enter_a_valid_email_address'),
                      },
                      {
                        required: true,
                        message: t('Email_is_required'),
                      },
                    ]}
                    name="email"
                    initialValue={state?.email}
                    label={t('Email_Address')}
                  >
                    <Input placeholder={t('Enter_Email')} disabled />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="country" initialValue={state?.country ? state?.country : ''} label={t('Country')}>
                    <Select style={{ width: '100%' }}>
                      <Option value="">Please Select</Option>
                      {country?.length &&
                        country?.map((item) => {
                          return <Option value={item.code}>{item.name}</Option>
                        })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="state" initialValue={state?.state ? state?.state : ''} label={t('State')}>
                    <Input placeholder={t('Enter_your_state')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="city" initialValue={state?.city ? state?.city : ''} label={t('City')}>
                    <Input placeholder={t('Enter_your_city')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="province"
                    initialValue={state?.province ? state?.province : ''}
                    label={t('Province')}
                  >
                    <Input placeholder={t('Enter_your_province')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="address1" initialValue={state?.address1} label={t('Address')}>
                    <Input.TextArea rows={2} placeholder={t('Enter_your_address')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="address2" initialValue={state?.address2} label={t('Address_2')}>
                    <Input.TextArea rows={2} placeholder={t('Enter_your_address')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="address3" initialValue={state?.address3} label={t('Address 3')}>
                    <Input.TextArea rows={2} placeholder={t('Enter_your_address')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <Form.Item name="zipcode" initialValue={state?.zipcode} label={t('Zip_Code')}>
                    <Input placeholder={t('Enter_your_zipcode')} />
                  </Form.Item>
                </Col>
                <Col xl={12} xxl={12} lg={12} sm={24} xs={24}>
                  <div className="setting-form-actions">
                    <Button loading={loading} size="default" htmlType="submit" type="primary" disabled={disableBtn}>
                      {t(btnText)}
                    </Button>
                    &nbsp; &nbsp;
                    <Button size="default" onClick={handleCancel} type="light">
                      {t('Cancel')}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </BasicFormWrapper>
        </Col>
      </Row>
    </Cards>
  )
}

Profile.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object,
}

export default Profile
