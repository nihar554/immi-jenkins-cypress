import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Row, Col, Skeleton, Spin } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SettingWrapper } from './overview/style'
import { PageHeader } from '../../../components/page-headers/page-headers'
import { Main } from '../../styled'
import { Cards } from '../../../components/cards/frame/cards-frame'
import { DataService } from '../../../config/dataService/dataService'
import { Background } from '../../pages/style'

const Profile = lazy(() => import('./overview/Profile'))
// const Account = lazy(() => import('./overview/Account'));
const Password = lazy(() => import('./overview/ChangePassword'))
// const SocialProfiles = lazy(() => import('./overview/SocialProfile'));
const Notification = lazy(() => import('./overview/Notification'))
const AuthorBox = lazy(() => import('./overview/ProfileAuthorBox'))
// const CoverSection = lazy(() => import('../overview/CoverSection'));

const AWS = require('aws-sdk')

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET
const AWS_ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY

export const s3 = new AWS.S3({
  Bucket: S3_BUCKET,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: 'eu-central-1',
})

function Settings() {
  const { t } = useTranslation()
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)

  const PageRoutes = [
    {
      path: '/',
      breadcrumbName: t('dashboard'),
    },
    {
      path: 'profile',
      breadcrumbName: t('My Profile'),
    },
  ]

  const getUserProfile = () => {
    setLoading(true)
    DataService.get('/profile')
      .then((res) => {
        setState(res.data)
        // if (res?.data?.profilepic) {
        //   const key = res?.data?.profilepic?.split('amazonaws.com/')[1];
        //   if (key) {
        //     const params = {
        //       Bucket: S3_BUCKET,
        //       Key: key,
        //       Expires: 300,
        //     };
        //     const profilePic = s3.getSignedUrl('getObject', params);
        //     console.log('res?.profilepic', profilePic);
        //     setState((prev) => {
        //       return { ...prev, ...{ profilePic } };
        //     });
        //   }
        // }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <>
      {loading ? (
        <div className="spin">
          <Spin />
        </div>
      ) : (
        <>
          <Background />
          <Main>
            <PageHeader className="ninjadash-page-header-main" title={t('My Profile')} routes={PageRoutes} />
            <Row gutter={25} style={{ marginTop: '10px' }}>
              <Col xxl={6} lg={8} md={10} xs={24}>
                <Suspense
                  fallback={
                    <Cards headless>
                      <Skeleton avatar />
                    </Cards>
                  }
                >
                  <AuthorBox setState={setState} state={state} />
                </Suspense>
              </Col>
              <Col xxl={18} lg={16} md={14} xs={24}>
                <SettingWrapper>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton avatar />
                      </Cards>
                    }
                  >
                    {/* <CoverSection /> */}
                  </Suspense>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton paragraph={{ rows: 20 }} />
                      </Cards>
                    }
                  >
                    <Routes>
                      <Route index element={<Profile setState={setState} state={state} />} />
                      <Route path="profile" element={<Profile setState={setState} state={state} />} />
                      {/* <Route path="account" element={<Account />} /> */}
                      <Route path="password" element={<Password />} />
                      {/* <Route path="social" element={<SocialProfiles />} /> */}
                      <Route path="notification" element={<Notification />} />
                    </Routes>
                  </Suspense>
                </SettingWrapper>
              </Col>
            </Row>
          </Main>
        </>
      )}
    </>
  )
}

export default Settings
