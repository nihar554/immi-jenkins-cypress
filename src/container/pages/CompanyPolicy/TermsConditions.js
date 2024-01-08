import React from 'react'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'antd'
import { AuthFormWrap, LoginWrap } from './Style'
import termsconditions from '../../../demoData/terms-conditions.json'
import { LandingPage } from '../Landing/Style'
import LandingHeader from '../Landing/Header'

function TermsConditions() {
  const { t } = useTranslation()
  return (
    <LandingPage>
      <LandingHeader />
      <LoginWrap>
        <div>
          <div className="left-container">
            <div className="left-main">
              <h1 className="left-heading">TERMS & CONDITIONS</h1>
            </div>
          </div>
          <div className="right-container">
            <div className="right-main">
              <Row justify="center">
                <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                  <AuthFormWrap>
                    <div className="main">
                      <div className="ninjadash-term-condition-content para-padding">
                        {/* <h3>TERMS & CONDITIONS</h3> */}
                        {termsconditions.map((data, index) => {
                          return (
                            <>
                              <h3>
                                {index > 0 ? `${index}.` : ''} {t(data.name)}
                              </h3>
                              <p className="">{t(data.description)}</p>
                            </>
                          )
                        })}
                        <p>{t('Last update')}: Dec 7, 2023</p>
                      </div>
                    </div>
                  </AuthFormWrap>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </LoginWrap>
    </LandingPage>
  )
}

export default TermsConditions
