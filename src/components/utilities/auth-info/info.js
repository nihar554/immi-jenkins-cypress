import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down'
import UilSignout from '@iconscout/react-unicons/icons/uil-signout'
import UilUser from '@iconscout/react-unicons/icons/uil-user'
import UilDashboard from '@iconscout/react-unicons/icons/uil-dashboard'
import { Avatar } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style'
import { Popover } from '../../popup/popup'
import Heading from '../../heading/heading'
import { Dropdown } from '../../dropdown/dropdown'
import { logOut } from '../../../redux/authentication/actionCreator'

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    flag: 'en'
  })
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()
  const { flag } = state

  const SignOut = (e) => {
    e.preventDefault()
    dispatch(logOut(() => navigate('/')))
  }

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src={require('../../../static/img/avatar/profileImage.png')} style={{ width: '32px' }} alt="" />
          <figcaption>
            <Heading as="h5">
              {JSON.parse(Cookies.get('user'))?.firstName &&
                `${JSON.parse(Cookies.get('user'))?.firstName} ${JSON.parse(Cookies.get('user'))?.lastName}`}
            </Heading>
            <p>
              {JSON.parse(Cookies.get('user'))?.role && JSON.parse(Cookies.get('user'))?.role === 'USER'
                ? 'Applicant'
                : 'Admin'}
            </p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <a href="/password">
              <UilUser /> {t('profile')}
            </a>
          </li>
          <li>
            <a href="/">
              <UilDashboard /> {t('Dashboard')}
            </a>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} to="#">
          <UilSignout /> {t('Sign Out')}
        </Link>
      </div>
    </UserDropDwon>
  )

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault()
    setState({
      ...state,
      flag: value
    })
    i18n.changeLanguage(value)
  }

  const country = (
    <NavAuth>
      <Link onClick={(e) => onFlagChangeHandle('en', e)} to="#">
        <img src={require('../../../static/img/flag/en.png')} alt="" />
        <span>English</span>
      </Link>
      {/* <Link onClick={(e) => onFlagChangeHandle('esp', e)} to="#">
        <img src={require('../../../static/img/flag/esp.png')} alt="" />
        <span>Spanish</span>
      </Link>
      <Link onClick={(e) => onFlagChangeHandle('ar', e)} to="#">
        <img src={require('../../../static/img/flag/ar.png')} alt="" />
        <span>Arabic</span>
      </Link> */}
    </NavAuth>
  )

  return (
    <InfoWraper>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__language">
        <Dropdown placement="bottomRight" content={country} trigger="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <img height={15} src={require(`../../../static/img/flag/${flag}.png`)} alt="" />
          </Link>
        </Dropdown>
      </div>
      <div className="ninjadash-nav-actions__item ninjadash-nav-actions__author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link to="#" className="ninjadash-nav-action-link">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
            <span className="ninjadash-nav-actions__author--name">
              {JSON.parse(Cookies.get('user'))?.firstName &&
                `${JSON.parse(Cookies.get('user'))?.firstName} ${JSON.parse(Cookies.get('user'))?.lastName}`}
            </span>
            <UilAngleDown />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  )
})

export default AuthInfo
