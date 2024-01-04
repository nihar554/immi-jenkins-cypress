/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Button, Col, Input, Layout, Row, message } from 'antd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'
import PoweredBy from './PowerdBy'
import { FooterStyle } from '../../../layout/Style'
// import icons from '../../../static/img/footer-social-icons.png';
import icons from '../../../static/img/icon/twitter-x.svg'
import footerLogo from '../../../static/img/icon/footer-logo.svg'
import { DataService } from '../../../config/dataService/dataService'
import { getItem } from '../../../utility/localStorageControl'

const { Content } = Layout
function LandingFooter () {
  const { t } = useTranslation()
  const userInfo = getItem('access_token')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    try {
      if (email) {
        setLoading(true)
        const response = await DataService.post('/newsletter/subscribe', { email })
        if (response && response.data && response.data.subscribedAt) {
          message.success(t('subscribed_thank_subscribe'))
          setLoading(false)
          setEmail(null)
        } else {
          if (response?.data?.errors?.msg === 'EMAIL_ALREADY_SUBSCRIBED') {
            message.error(t('subscribed_email'))
          } else {
            message.error(t('subscribed_Invalid_Email'))
          }
          setLoading(false)
        }
      } else {
        message.error(t('subscribed_please_enter_email'))
        setLoading(false)
      }
    } catch (error) {
      console.error(error) // Handle the error
      setLoading(false)
    }
  }

  return (
    <Layout className={userInfo ? 'atbd-main-layout login-footer' : 'atbd-main-layout'}>
      <Content>
        <FooterStyle className="admin-footer">
          <Row>
            <Col className="col-1" md={12} xl={4} xs={12}>
              <ul>
                <li>
                  <NavLink to="https://www.elsalvador.travel/" target="_blank">
                    {t('Visit_El_Salvador')}
                  </NavLink>
                </li>
                <li>
                  <a href="/welcome#citizenship">{t('Freedom_Residency')}</a>
                </li>
                <li>
                  <NavLink
                    to="https://investinelsalvador.gob.sv/catalogo/en/investment-services-directory/"
                    target="_blank"
                  >
                    {t('Re_Location_Services')}
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col className="col-2" md={12} xl={4} xs={12}>
              <ul>
                <li>
                  <NavLink to="/about" target="_blank">
                    {t('About_Us')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" target="_blank">
                    {t('Contact_Us')}
                  </NavLink>
                </li>
                <li>
                  <a href="/welcome#faq">{t('FAQs')}</a>
                </li>
              </ul>
            </Col>
            <Col className="col-3" md={12} xl={4} xs={12}>
              <ul>
                <li>
                  <NavLink to="/terms" target="_blank">
                    Terms & Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://twitter.com/adoptinges" target="_blank">
                    Follow us <img src={icons} alt="" className="social-icons" />
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col className="col-4" md={12} xl={4} xs={12}>
              <img src={footerLogo} alt="" className="social-icons" />
            </Col>
            <Col className="col-5" md={24} xl={8} xs={24}>
              <div className="admin-footer__links">
                <span className="lable">{t('Be_part_of_the_Freedom_Community')}</span>
                <div className="d-flex subscribtion">
                  <Input
                    className="footer-input"
                    placeholder="satoshi@yourmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={handleSubscribe}>{loading ? 'Loading...' : 'Subscribe'}</Button>
                </div>
              </div>
            </Col>
          </Row>
        </FooterStyle>
        <PoweredBy />
      </Content>
    </Layout>
  )
}

export default LandingFooter
