import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Col, Row, Spin } from 'antd'
import { ContainerStyle, MainStyle, RightBlockStyle } from './style'
import PoweredBy from './Landing/PowerdBy'
import { DataService } from '../../config/dataService/dataService'

function Dashboard () {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [applicationDetails, setApplicationDetails] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    DataService.get('/userApplications/user?sort=createdAt&order=-1&limit=1 ')
      .then((res) => {
        setLoading(false)
        setApplicationDetails(res.data)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="spin">
        <Spin />
      </div>
    )
  }
  return (
    <>
      <ContainerStyle>
        <MainStyle>
          {applicationDetails && applicationDetails.length
            ? (
            <>
              <div className="left-container">
                <div className="left-main">
                  <h1 className="left-heading">
                    {t('YOUR')} <br /> <span className="no-wrap">{t('application')}</span>
                    <br /> <span className="no-wrap">{t('status')}</span>
                  </h1>
                </div>
              </div>
              <div className="right-container">
                <div className="right-main">
                  <Row justify="center">
                    <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                      <RightBlockStyle>
                        <div className="main">
                          <div className="ninjadash-authentication-top" style={{ textAlign: 'center' }}>
                            <h1 className="heading">Thanks for applying</h1>
                            <p className="sub-heading">
                              We are currently reviewing your information. This process normally takes a few weeks. In
                              the meantime you can check the status of your application below.{' '}
                            </p>
                            <h5 className="heading5">General information</h5>
                            <div className="status-block">
                              <p>
                                Application Status:
                                <span>{applicationDetails[0]?.applicationStatus.toUpperCase() || 'N/A'}</span>
                              </p>
                              <p>
                                Application Type:
                                <span className="individual">{applicationDetails[0]?.type_account || 'N/A'}</span>
                              </p>
                            </div>
                            <div className="application-id">
                              Application ID:{' '}
                              <span className="status-text">{applicationDetails[0]?.applicationId || 'N/A'}</span>
                            </div>
                            <button
                              type="button"
                              className="overview-button"
                              onClick={() => navigate('/user-application-details', { state: { isAdmin: false } })}
                            >
                              Application Overview
                            </button>
                            <p className="sub-heading" style={{ position: 'absolute', bottom: '0' }}>
                              For further questions please contact{' '}
                              <span className="support-mail">support@adoptingelsalvador.gob.sv</span>
                            </p>
                          </div>
                        </div>
                      </RightBlockStyle>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
              )
            : (
            <>
              <div className="left-container">
                <div className="left-main">
                  <h1 className="left-heading">
                    {t('WELCOME')} {t('TO')} <br /> <span className="no-wrap">{t('EL_SALVADOR')}</span>
                  </h1>
                </div>
              </div>
              <div className="right-container">
                <div className="right-main">
                  <Row justify="center">
                    <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                      <RightBlockStyle>
                        <div className="main">
                          <div className="ninjadash-authentication-top" style={{ textAlign: 'center' }}>
                            <p className="top-desc">{t('Thank_you_for_Your_Registration')}</p>
                            <button
                              className="top-button"
                              type="button"
                              onClick={() => navigate('wizard')}
                              style={{ marginTop: '0px' }}
                            >
                              {t('Apply_for_Immigration')}
                            </button>
                          </div>
                        </div>
                      </RightBlockStyle>
                    </Col>
                  </Row>
                </div>
              </div>
            </>
              )}
        </MainStyle>
        <div className="bottom" />
        <PoweredBy />
      </ContainerStyle>
    </>
  )
}

export default Dashboard
