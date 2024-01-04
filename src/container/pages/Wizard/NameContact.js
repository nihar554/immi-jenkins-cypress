/* eslint-disable prefer-promise-reject-errors */
import React from 'react'
import { Col, DatePicker, Form, Input, Row, Select } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { BasicFormWrapper } from '../../styled'
import Heading from '../../../components/heading/heading'

function NameContact (props) {
  const { t } = useTranslation()
  const { form, setData, countries } = props
  const { Option } = Select

  const onChange = (value) => {
    setData((prev) => {
      return { ...prev, ...value }
    })
  }

  const handleChange = (date, dateString) => {
    console.log('Selected Date:', date)
    console.log('Formatted Date String:', dateString)
  }

  const onChangeSearch = (value) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  const validateMobileNumber = (_, value) => {
    // Regular expression for a simple mobile number validation
    const mobileNumberRegex = /^-?\d*(\.\d*)?$/

    if (mobileNumberRegex.test(value) || !value) {
      return Promise.resolve()
    }

    return Promise.reject('Please enter a valid mobile number.')
  }

  const validateName = (_, value) => {
    // Regular expression for a simple mobile number validation
    const mobileNumberRegex = /^[a-zA-Z\s]{0,200}$/

    if (mobileNumberRegex.test(value)) {
      return Promise.resolve()
    }

    return Promise.reject('Please enter a valid name.')
  }

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <BasicFormWrapper className="basic-form-inner">
      <div className="atbd-form-checkout">
        <Row justify="center">
          <Col sm={24} xs={24}>
            <Heading as="h5">{t('Name & Contact')}</Heading>
            <Form name="account" form={form} onValuesChange={onChange}>
              <Row gutter={30}>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="first_name"
                    label={t('First Name')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Your First Name'
                      },
                      {
                        validator: validateName
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your First Name')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="middle_name"
                    label={t('Middle Name')}
                    rules={[
                      {
                        validator: validateName
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your Middle Name')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="last_name"
                    label={t('Last Name')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Your Last Name'
                      },
                      {
                        validator: validateName
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your Last Name')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="dob"
                    label={t('Date of Birth')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Your Date of Birth'
                      }
                    ]}
                  >
                    <DatePicker
                      placeholder="YYYY-MM-DD"
                      onChange={handleChange}
                      format="YYYY-MM-DD"
                      disabledDate={(current) => {
                        const customDate = moment().format('YYYY-MM-DD')
                        return current && current >= moment(customDate, 'YYYY-MM-DD')
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="nationality"
                    label={t('Nationality')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Your Nationality'
                      }
                    ]}
                  >
                    <Select
                      showSearch
                      optionFilterProp="children"
                      placeholder="Please select your country"
                      onChange={onChangeSearch}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={countries}
                    />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    initialValue=""
                    name="gender"
                    label={t('Gender')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Your Gender'
                      }
                    ]}
                  >
                    <Select style={{ width: '100%' }}>
                      <Option value="">{t('Select one')}</Option>
                      <Option value="Male">{t('Male')}</Option>
                      <Option value="Female">{t('Female')}</Option>
                      {/* <Option value="other">{t('Other')}</Option> */}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Heading as="h5">{t('Contact Information')}</Heading>
              <Row gutter={25}>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="phone_country_code"
                    label={t('Phone Country Code')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter Your Country Code'
                      }
                    ]}
                  >
                    <Input placeholder={t('91')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="phone"
                    label={t('Mobile Number')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Enter Your Phone Number'
                      },
                      {
                        validator: validateMobileNumber
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter your mobile number')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item name="email" label={t('Email')}>
                    <Input placeholder={t('Enter Your Email Address')} disabled />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </BasicFormWrapper>
  )
}

NameContact.propTypes = {
  countries: PropTypes.array,
  form: PropTypes.object,
  setData: PropTypes.func
}
export default NameContact
