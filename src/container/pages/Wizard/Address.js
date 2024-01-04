import React, { useState } from 'react'
import { Button, Col, DatePicker, Form, Input, Row, Select, Upload, message } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { BasicFormWrapper } from '../../styled'
import Heading from '../../../components/heading/heading'
import ChooseFileIcon from '../../../static/img/icon/ChooseFileIcon'
import { validImageTypes } from '../../../utility/utility'

function Address (props) {
  const { t } = useTranslation()
  const { form, setData, countries, next, data } = props
  const [errorMsg, setErrorMsg] = useState('')

  const customRequest = async ({ file, onSuccess, onError }) => {
    try {
      if (!validImageTypes(file)) {
        message.error('Select only PDF or JPG or PNG image')
        onError('Select only PDF or JPG or PNG image')
        setErrorMsg('Select only PDF or JPG or PNG image')
        form.setFieldsValue({
          proof_of_res: undefined
        })
        return false
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const base64Data = e.target.result

        if (file.size <= process.env.REACT_APP_FILE_SIZE_LIMIT) {
          setData((prev) => {
            return { ...prev, ...{ proof_of_res_data: base64Data, proof_of_res_url: file } }
          })
          onSuccess()
          setErrorMsg('')
        } else {
          onError(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`)
          form.setFieldsValue({
            proof_of_res: undefined
          })
          setErrorMsg(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`)
        }
      }

      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Custom request error:', error)
      onError(error)
    }
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    if (e.fileList.length === 0) {
      return null
    }
    return e && e.fileList
  }

  const onChange = (value) => {
    setData((prev) => {
      return { ...prev, ...value }
    })
  }

  const onChangeSearch = (value) => {
    console.log(`selected ${value}`)
  }

  const onSearch = (value) => {
    console.log('search:', value)
  }

  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <BasicFormWrapper className="basic-form-inner">
      <Form name="account" form={form} onValuesChange={onChange} onFinish={next}>
        <div className="atbd-form-checkout">
          <Row justify="center">
            <Col sm={24} xs={24}>
              <Heading as="h5">{t('Address')}</Heading>
              <Row gutter={30}>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="resid_building_name"
                    label={t('Building Name / Number')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Building Name / Number'
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your Building Name / Number')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="resid_street"
                    label={t('Street Name')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Your Street Name'
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your Street Name')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="resid_city"
                    label={t('City Name')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Your City Name'
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your City Name')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="resid_zipcode"
                    label={t('ZIP / Post Code')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Input Your Area Name'
                      }
                    ]}
                  >
                    <Input placeholder={t('Enter Your Area Code')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item name="resid_state" label={t('State Name')}>
                    <Input placeholder={t('Enter Your State')} />
                  </Form.Item>
                </Col>
                <Col xl={8} xxl={8}>
                  <Form.Item
                    name="resid_country"
                    label={t('Country')}
                    rules={[
                      {
                        required: true,
                        message: 'Please Select Your Country Name'
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
              </Row>
            </Col>
          </Row>
          <Row gutter={30} style={{ marginTop: '15px' }}>
            <Col sm={24} xs={24}>
              <Heading as="h5">{t('Proof of residence')}</Heading>
            </Col>
            <Col xl={12} xxl={12}>
              <Form.Item name="proof_resid_type" label={t('Document Type')}>
                <Input disabled placeholder={t('Utility Bill')} />
              </Form.Item>
            </Col>
            <Col xl={12} xxl={12}>
              <Form.Item
                name="issue_date"
                label={t('Issue Date')}
                rules={[
                  {
                    required: true,
                    message: 'Please Select Your Issue Date'
                  }
                ]}
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  disabledDate={(current) => {
                    return (
                      current &&
                      (current > moment().endOf('day') || current < moment().subtract(6, 'months').startOf('day'))
                    )
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="reqiured">
            <div style={{ padding: '10px 15px 10px 15px', minHeight: '140px', marginBottom: '40px' }}>
              <h6 className="info-tag">{t('Upload Proof')}</h6>
              <h4>{t('Upload Proof of resident document')}</h4>
              <div>
                <Form.Item
                  name="proof_of_res"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: 'Please Upload Proof of Residence'
                    }
                  ]}
                >
                  <Upload
                    listType="picture"
                    accept=".jpg,.jpeg,.png,.pdf"
                    customRequest={customRequest}
                    maxCount={1}
                    onRemove={() =>
                      setData((prev) => {
                        return { ...prev, ...{ proof_of_res_data: '', proof_of_res_url: '' } }
                      })
                    }
                  >
                    {data?.proof_of_res_data
                      ? null
                      : (
                      <Button className="passport-btn">
                        <ChooseFileIcon /> Choose File
                      </Button>
                        )}
                  </Upload>
                </Form.Item>
                {errorMsg && (
                  <div style={{ fontSize: '15px', marginTop: '-36px', marginLeft: '10px', color: '#ff0f0f' }}>
                    File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </BasicFormWrapper>
  )
}

Address.propTypes = {
  countries: PropTypes.array,
  form: PropTypes.object,
  setData: PropTypes.func,
  next: PropTypes.func,
  data: PropTypes.string
}
export default Address
