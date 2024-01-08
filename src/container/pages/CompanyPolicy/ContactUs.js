import React from 'react'
import { Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import { AuthFormWrap, LoginWrap, AboutUsWrap } from '../../profile/authentication/overview/style'
import OfficialSeal from '../../../static/img/landing/OfficalSeal.svg'
import { getItem } from '../../../utility/localStorageControl'
import { LandingPage } from '../Landing/Style'
import LandingHeader from '../Landing/Header'

function ContactUs() {
  const { t } = useTranslation()
  const userInfo = getItem('access_token')
  return (
    <LandingPage>
      <LandingHeader />
      <LoginWrap>
        <div style={{ marginTop: userInfo ? '0px' : '80px' }}>
          <div className="left-container">
            <div className="left-main">
              <h1 className="left-heading">{t('Contact_Us')}</h1>
            </div>
          </div>
          <div className="right-container">
            <Row justify="center">
              <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                <AuthFormWrap>
                  <AboutUsWrap>
                    <div className="main">
                      <div className="ninjadash-term-condition-content">
                        <img width="60%" src={OfficialSeal} alt="" />
                        <p className="">{t('Contact_Us_Thank_you_title')}</p>
                        <p className="">{t('Contact_Us_Reach_out_title')}</p>
                        <p className="">
                          <u>
                            <b>support@adoptingelsalvador.gob.sv</b>
                          </u>
                        </p>
                      </div>
                    </div>
                  </AboutUsWrap>
                </AuthFormWrap>
              </Col>
            </Row>
          </div>
        </div>
      </LoginWrap>
    </LandingPage>
  )
}

export default ContactUs
