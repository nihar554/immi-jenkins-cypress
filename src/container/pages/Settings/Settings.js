import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Switch, message } from 'antd'
import { HeadContainer, ProjectCard, NotificationWrapper } from './Style'
import useAnalyticsEventTracker from '../../../config/dataService/GoogleAnalyticsService'
import { Main } from '../../styled'
import { CardWrapper } from '../AssetLaunchPad/Style'
import { Cards } from '../../../components/cards/frame/cards-frame'
import waitlist from '../../../static/img/icons/setting-waitlist.svg'
import UserIcon from '../../../static/img/icons/user_with_blue_bg.svg'
import EditIcon from '../../../static/img/icons/edit.svg'
import email from '../../../static/img/icons/email-preference.svg'
import { DataService } from '../../../config/dataService/dataService'
import { getItem } from '../../../utility/localStorageControl'

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 0,
  padding: 0
}

function Settings () {
  const userInfo = getItem('userInfo')

  const [emailPreference, setEmailPreference] = useState({
    newsAndUpdates: false,
    notifications: false,
    personalizedEmails: false,
    surveysAndResearch: false
  })

  const updateEmailPreference = (updatedPreferences) => {
    setEmailPreference((prevPreferences) => ({
      ...prevPreferences,
      ...updatedPreferences
    }))
  }

  const getEmailPreference = async () => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const response = await DataService.get(`/emailPreference/${userInfo._id}`)
      const { newsAndUpdates, notifications, personalizedEmails, surveysAndResearch } = response.data
      setEmailPreference({
        newsAndUpdates,
        notifications,
        personalizedEmails,
        surveysAndResearch
      })
    } catch (error) {
      message.error(error?.response?.data?.errors.msg)
    }
  }

  useEffect(() => {
    getEmailPreference()
  }, [])

  const handleEmailPreference = async (values, title) => {
    try {
      const gaClickNewsAndUpdatesTracker = useAnalyticsEventTracker(
        'Settings',
        `Click on Email Preference in ${title}`,
        'Landed'
      )
      // Update the state instantly
      updateEmailPreference(values)
      gaClickNewsAndUpdatesTracker()
      // eslint-disable-next-line no-underscore-dangle
      await DataService.patch(`/emailPreference/${userInfo._id}`, values)
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <Main>
      <>
        <HeadContainer>
          <h1 className="typography-h1">Settings</h1>
          <Row gutter={25}>
            <Col sm={24} xs={24} lg={12}>
              <h3 className="typography-h3">Account</h3>

              <Cards headless bodyStyle={{ borderRadius: '20px' }}>
                <CardWrapper>
                  <div className="row" style={{ width: '100%' }}>
                    <div className="col-md-2">
                      <img src={UserIcon} alt="user" />
                    </div>
                    <div className="col-md-6">
                      <div className="product-single-description">
                        <h3 className="ninjadash-top-banner__title typography-h3">
                          {userInfo?.firstName} {userInfo?.lastName}
                        </h3>
                        <p className="ninjadash-top-banner__text typography-body-regular-medium">
                          @{userInfo?.firstName}.{userInfo?.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="product-single-info">
                        <Button type="primary" className="fillup-btn typography-body-medium-medium">
                          Switch Acconut
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </Cards>
            </Col>
            <Col sm={24} xs={24} lg={12}>
              <h3 className="typography-h3">Loyalty Credit</h3>

              <Cards headless bodyStyle={{ borderRadius: '20px' }}>
                <CardWrapper>
                  <div className="row" style={{ width: '100%' }}>
                    <div className="col-md-9">
                      <div className="product-single-description">
                        <h3 className="ninjadash-top-banner__title typography-h3">Loyalty Credit</h3>
                        <p className="ninjadash-top-banner__text typography-body-regular-medium">
                          Set up your Loyalty Credit
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="product-single-info">
                        <Button
                          type="primary"
                          className="fillup-btn typography-body-medium-medium"
                          style={{ width: '8rem' }}
                        >
                          Set Up
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </Cards>
            </Col>
          </Row>
        </HeadContainer>

        <ProjectCard>
          <Row gutter={25}>
            <Col sm={24} xs={24} lg={12}>
              <h3 className="ninjadash-top-banner__title typography-h3">Payment Method</h3>
              <Cards headless>
                <>
                  <div className="project-title">
                    <h3 className="ninjadash-top-banner__title typography-h3">Tether Payment</h3>
                  </div>
                  <p className="ninjadash-top-banner__text typography-body-regular-medium">
                    You can add, delete, or edit your payment methods via Tether Payments.
                    <br /> Any changes will update to your Loyalty account.
                  </p>
                </>
                <div className="project-bottom">
                  <div className="project-assignees d-flex">
                    <p className="ninjadash-top-banner__text typography-body-medium-large">Edit Payment Method</p>&nbsp;
                    <img src={EditIcon} alt="edit" className="edit" />
                  </div>
                </div>
              </Cards>
            </Col>
            <Col sm={24} xs={24} lg={12}>
              <h3 className="ninjadash-top-banner__title typography-h3">Waitlist</h3>
              <Cards headless>
                <img src={waitlist} className="mx-auto d-block" alt="waitlist" />

                <div className="project-bottom">
                  <div className="project-assignees">
                    <p className="ninjadash-top-banner__text typography-body-medium-large text-center">
                      You aren&apos;t on any wait lists right now.
                    </p>
                  </div>
                </div>
              </Cards>
            </Col>
          </Row>
        </ProjectCard>

        <NotificationWrapper>
          <h3 className="typography-h3">Email Preference</h3>
          <Row gutter={15}>
            <Col sm={24} xs={24} lg={9}>
              <img src={email} alt="email" />
            </Col>
            <Col sm={24} xs={24} lg={15}>
              <div className="notification-box-single">
                <div className="notification-body">
                  <Cards headless>
                    <nav>
                      <ul>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <h4 className="notification-list-single__title typography-h4">News and updates</h4>
                            <p className="typography-body-regular-medium">
                              Never miss out on updates, offers, and useful tips for getting the most out of our
                              products.
                            </p>
                          </div>
                          <Switch
                            checked={emailPreference?.newsAndUpdates}
                            onChange={(checked) =>
                              handleEmailPreference({ newsAndUpdates: checked }, 'News and updates')
                            }
                          />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <h4 className="notification-list-single__title typography-h4">Notifications</h4>
                            <p className="typography-body-regular-medium">
                              Get notifications when you&apos;ve left something, so you can easily pick up where you
                              left off.
                            </p>
                          </div>
                          <Switch
                            checked={emailPreference?.notifications}
                            onChange={(checked) => handleEmailPreference({ notifications: checked }, 'Notifications')}
                          />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <h4 className="notification-list-single__title typography-h4">Personalized emails</h4>
                            <p className="typography-body-regular-medium">
                              Stay in the know with personalized and relevant offers and info that are tailored to you.
                            </p>
                          </div>
                          <Switch
                            checked={emailPreference?.personalizedEmails}
                            onChange={(checked) =>
                              handleEmailPreference({ personalizedEmails: checked }, 'Personalized emails')
                            }
                          />
                        </li>
                        <li style={listStyle}>
                          <div className="notification-list-single">
                            <h4 className="notification-list-single__title typography-h4">Surveys and research</h4>
                            <p className="typography-body-regular-medium">
                              Get Company News, announcements, and product updates
                            </p>
                          </div>
                          <Switch
                            checked={emailPreference?.surveysAndResearch}
                            onChange={(checked) =>
                              handleEmailPreference({ surveysAndResearch: checked }, 'Surveys and research')
                            }
                          />
                        </li>
                      </ul>
                    </nav>
                  </Cards>
                </div>
              </div>
            </Col>
          </Row>
        </NotificationWrapper>
      </>
    </Main>
  )
}

export default Settings
