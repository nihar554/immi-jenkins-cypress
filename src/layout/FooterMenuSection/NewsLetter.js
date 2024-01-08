import React from 'react'
import { Button, Input, Space, Form, message } from 'antd'
import TwitterIcon from '../../static/img/icons/twitter.svg'
import LinkedinIcon from '../../static/img/icons/linkedin.svg'
import FbIcon from '../../static/img/icons/facebook.svg'
import YoutubeIcon from '../../static/img/icons/youtube.svg'
import { subscribeEmailServices } from '../../config/dataService/subscribeEmailServices'

function NewsLetter() {
  const [form] = Form.useForm()
  // const [email, setEmail] = useState();

  const handleSubmit = (value) => {
    subscribeEmailServices
      .createSubscribeEmail(value)
      .then(() => {
        form.resetFields()
        message.success('Subscribe email successfully')
      })
      .catch((error) => {
        if (error.response.data.errors.msg === 'SUBSCRIBE_EMAIL_ALREADY_EXISTS') {
          form.resetFields()
          message.success('Subscribe email successfully')
        } else {
          message.error(error.response.data.errors.msg)
        }
      })
  }

  return (
    <div className="footer-newsletter-menu">
      <div className="subscription">
        <p className="footer-menu-title typography-h4" style={{ marginLeft: '0px' }}>
          Subscribe to our NewsLetter
        </p>
        <Form form={form} onFinish={handleSubmit}>
          <Space.Compact style={{ width: '100%' }} className="input-btn-compact">
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Invalid Email!',
                },
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input name="email" placeholder="Type your email" />
            </Form.Item>
            {/* <Input /> */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space.Compact>
        </Form>
        <p className="typography-body-regular-small mt-20">
          Sign up for our monthly newsletter, where we’ll keep you up-to-date with the latest product updates.
        </p>
      </div>
      <div className="follow-us">
        <p className="footer-menu-title typography-h4" style={{ marginLeft: '0px' }}>
          Follow Us on Social
        </p>
        <ul className="d-flex" style={{ paddingLeft: '0px' }}>
          <li className="icon-single">
            <img src={TwitterIcon} alt="twiiter" />
          </li>
          <li className="icon-single">
            <img src={LinkedinIcon} alt="linkedin" />
          </li>
          <li className="icon-single">
            <img src={FbIcon} alt="facebook" />
          </li>
          <li className="icon-single">
            <img src={YoutubeIcon} alt="youtube" />
          </li>
          {/* <li className="icon-single"><span aria-hidden="true" className="fa fa-twitter-square fa-2x super-crazy-colors follow-icon" ></span></li>
                    <li className="icon-single"><span aria-hidden="true" className="fa fa-linkedin-square fa-2x super-crazy-colors follow-icon" ></span></li>
                    <li className="icon-single"><span aria-hidden="true" className="fa fa-facebook-square fa-2x super-crazy-colors follow-icon" ></span></li>
                    <li className="icon-single"><span aria-hidden="true" className="fa fa-youtube-play fa-2x super-crazy-colors follow-icon" ></span></li> */}
        </ul>
      </div>
    </div>
  )
}

export default NewsLetter
