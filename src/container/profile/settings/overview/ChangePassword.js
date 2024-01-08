import React, { useState } from 'react'
import { Row, Col, Form, Input, message } from 'antd'
import { useTranslation } from 'react-i18next'
import { ChangePasswordWrapper } from './style'
import { Cards } from '../../../../components/cards/frame/cards-frame'
import { BasicFormWrapper } from '../../../styled'
import Heading from '../../../../components/heading/heading'
import { DataService } from '../../../../config/dataService/dataService'
import { Button } from '../../../../components/buttons/buttons'
import PassPopUp from '../../../../components/dropdown/PassPopUp'
import { checkPasswordValid } from '../../../../utility/utility'

function Password() {
  const { t } = useTranslation()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [btnText, setBtnText] = useState('Change Password')
  const [tooltip, setTooltip] = React.useState(false)
  const [submittable, setSubmittable] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const [isvalid, setisvalid] = React.useState(false)
  const [oldpassword, setoldPassword] = React.useState('')
  const [state1, setState1] = useState({
    minimumChar: false,
    specialCharValid: false,
    uppercaseValid: false,
    lowercaseValid: false,
    numberValid: false,
  })
  const watch = Form.useWatch([], form)
  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      (res) => {
        if (res.confirmPass && res.newPass && res.oldPass) {
          setSubmittable(true)
        } else {
          setSubmittable(false)
        }
      },
      () => {
        setSubmittable(false)
      },
    )
  }, [watch])
  React.useEffect(() => {
    if (
      !state1.lowercaseValid ||
      !state1.minimumChar ||
      !state1.numberValid ||
      !state1.specialCharValid ||
      !state1.uppercaseValid
    ) {
      setisvalid(false)
    } else {
      setisvalid(true)
    }
  }, [watch])
  const handleSubmit = () => {
    setLoading(true)
    setBtnText(t('Processing...'))
    const body = {
      oldPassword: oldpassword,
      newPassword: password,
    }
    DataService.post('/changePassword', body)
      .then((res) => {
        if (res.data.msg === 'PASSWORD_CHANGED') {
          message.success(t('changed_password_password_has_been_changed'))
          form.resetFields()
        } else if (res.data.errors.msg === 'WRONG_PASSWORD') {
          message.error(t('changed_password_incorrect_old_password'))
        }
        setBtnText(t('Change Password'))
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setBtnText(t('Change Password'))
        message.error(t('Something went wrong'))
      })
  }

  const validateCPassword = (rule, value, callback) => {
    if (value && value !== password) {
      callback('Password and Confirm password must be same.')
    } else {
      callback()
    }
  }

  const validatePassword = (rule, value, callback) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (regex.test(value)) {
      callback()
    } else {
      callback()
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    form.resetFields()
  }

  const areAllValidationsComplete = () => {
    if (
      state1.minimumChar &&
      state1.specialCharValid &&
      state1.lowercaseValid &&
      state1.numberValid &&
      state1.uppercaseValid
    ) {
      return true
    }
    return false
  }

  return (
    <ChangePasswordWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">{t('Password_Settings')}</Heading>
            <span>{t('Change_or_reset_your_account_password')}</span>
          </div>
        }
      >
        <BasicFormWrapper>
          <Row style={{ paddingLeft: '10px' }}>
            <Col lg={12} sm={20} xs={24}>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item name="oldPass" label={t('Old_Password')}>
                  <Input.Password placeholder="**********" onChange={(e) => setoldPassword(e.target.value)} />
                </Form.Item>
                <Form.Item
                  name="newPass"
                  label={t('New_Password')}
                  rules={[
                    { required: true, message: 'Please input your email!', type: 'password' },
                    { validator: validatePassword },
                  ]}
                >
                  <Input.Password
                    onBlur={() => setTooltip(false)}
                    onFocus={() => setTooltip(true)}
                    placeholder="**********"
                    onChange={(e) => {
                      setPassword(e.target.value)
                      checkPasswordValid(e.target.value, setState1)
                    }}
                  />
                </Form.Item>
                <div style={{ position: 'relative', marginTop: '-15px' }}>
                  {tooltip && !areAllValidationsComplete() ? <PassPopUp state={state1} /> : null}
                </div>
                <Form.Item
                  name="confirmPass"
                  label={t('Confirm_New_Password')}
                  rules={[
                    { required: true, message: 'Please input your email!', type: 'password' },
                    { validator: validateCPassword },
                  ]}
                >
                  <Input.Password placeholder="**********" />
                </Form.Item>
                <Form.Item>
                  <div className="setting-form-actions">
                    <Button
                      loading={loading}
                      disabled={loading || !submittable || !isvalid}
                      htmlType="submit"
                      type="primary"
                    >
                      {t(btnText)}
                    </Button>
                    &nbsp; &nbsp;
                    <Button size="default" onClick={handleCancel} type="light">
                      {t('Cancel')}
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </BasicFormWrapper>
      </Cards>
    </ChangePasswordWrapper>
  )
}

export default Password
