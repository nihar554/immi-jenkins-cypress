// import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Button, Layout } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import { Scrollbars } from '@pezhmanparsaee/react-custom-scrollbars'
// import Search from '../../../components/utilities/auth-info/Search';
import LandingMenu from '../../../layout/LandingMenu'
import LandingMenuItems from '../../../layout/LandingMenueItems'
import { Dropdown } from '../../../components/dropdown/dropdown'
import { NavAuth } from '../../../components/utilities/auth-info/auth-info-style'
import { LayoutContainer, TopMenuSearch } from '../../../layout/Style'
import AuthInfo from '../../../components/utilities/auth-info/info'
import { getItem } from '../../../utility/localStorageControl'

const { theme } = require('../../../config/theme/themeVariables')

const { Header, Sider } = Layout
const topMenu = true
const layoutMode = 'lightMode'
const ChangeLayoutMode = true
const rtl = false
const left = !rtl ? 'left' : 'right'
const SideBarStyle = {
  margin: '63px 0 0 0',
  padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
  overflowY: 'auto',
  height: '100vh',
  position: 'fixed',
  [left]: 0,
  zIndex: 988,
}

const SideBarStyle1 = {
  margin: '0px 0 0 0',
  padding: `${!rtl ? '20px 20px 55px 0' : '20px 0 55px 20px'}`,
  overflowY: 'auto',
  height: '100vh',
  position: 'fixed',
  [left]: 0,
  zIndex: 988,
}

function LandingHeader() {
  const Navigate = useNavigate()
  const userInfo = getItem('access_token')
  const { pathname } = useLocation()
  const { i18n, t } = useTranslation()
  const [state, setState] = useState({
    flag: i18n.language,
  })
  const [collapsed, setCollapsed] = useState(true)
  const { flag } = state

  const onFlagChangeHandle = (value, e) => {
    e.preventDefault()
    setState({
      ...state,
      flag: value,
    })
    i18n.changeLanguage(value)
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const toggleCollapsedMobile = () => {
    if (window.innerWidth <= 990) {
      setCollapsed(!collapsed)
    }
  }
  const renderView = ({ style }) => {
    const customStyle = {
      marginRight: 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    }
    return <div style={{ ...style, ...customStyle }} />
  }

  const renderThumbVertical = ({ style }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
      [left]: '2px',
    }
    return <div style={{ ...style, ...thumbStyle }} />
  }

  const renderThumbHorizontal = ({ style }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: ChangeLayoutMode ? '#ffffff16' : '#F1F2F6',
    }
    return <div style={{ ...style, ...thumbStyle }} />
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
    <LayoutContainer>
      <Layout className="layout">
        <Header>
          <div className="ninjadash-header-content d-flex" style={{ justifyContent: 'space-around' }}>
            <div className="ninjadash-header-content__left" style={{ background: '#FFF' }}>
              <div className="navbar-brand align-cener-v">
                <Link
                  className={topMenu && window.innerWidth > 991 ? 'ninjadash-logo top-menu' : 'ninjadash-logo'}
                  to="/welcome"
                >
                  <img src={require('../../../static/img/logo_dark.svg').default} alt="" />
                </Link>
                <Button type="link" className="mobile-menu-icon" onClick={toggleCollapsed}>
                  <img
                    src={require(`../../../static/img/icon/${collapsed ? 'left-bar.svg' : 'left-bar.svg'}`)}
                    alt="menu"
                  />
                </Button>
              </div>
            </div>
            <div className="ninjadash-header-content__right d-flex">
              <div className="ninjadash-navbar-menu d-flex align-center-v">
                {topMenu && window.innerWidth > 991 ? <LandingMenu /> : null}
              </div>
              <div className="ninjadash-nav-actions">
                {topMenu && userInfo && window.innerWidth > 991 && (
                  <TopMenuSearch>
                    <div className="top-right-wrap d-flex">
                      <span />
                      <AuthInfo />
                    </div>
                  </TopMenuSearch>
                )}
              </div>
            </div>
            <div className="buttons" style={{ display: userInfo ? 'none' : 'block' }}>
              <Button onClick={() => Navigate('/register')} className="register" type="button">
                {t('Sign_up')}
              </Button>
              <Button onClick={() => Navigate('/login')} className="login" type="button">
                {t('Login')}
              </Button>
              <span
                className="ninjadash-nav-actions__item ninjadash-nav-actions__language"
                style={{ marginLeft: '12px' }}
              >
                <Dropdown placement="bottomRight" content={country} trigger="click">
                  <Link to="#" className="ninjadash-nav-action-link">
                    <img height={15} src={require(`../../../static/img/flag/${flag}.png`)} alt="" />
                  </Link>
                </Dropdown>
              </span>
            </div>
          </div>
        </Header>
      </Layout>
      <Layout>
        {!topMenu || window.innerWidth <= 991 ? (
          <ThemeProvider theme={theme}>
            <Sider
              width={280}
              style={pathname === '/login' || pathname === '/register' || userInfo ? SideBarStyle1 : SideBarStyle}
              collapsed={collapsed}
              theme={layoutMode === 'lightMode' ? 'light' : 'dark'}
            >
              <Scrollbars
                className="custom-scrollbar"
                autoHide
                autoHideTimeout={500}
                autoHideDuration={200}
                renderThumbHorizontal={renderThumbHorizontal}
                renderThumbVertical={renderThumbVertical}
                renderView={renderView}
                renderTrackVertical={(props) => <div {...props} className="ninjadash-track-vertical" />}
              >
                <LandingMenuItems topMenu={topMenu} toggleCollapsed={toggleCollapsedMobile} />
              </Scrollbars>
            </Sider>
          </ThemeProvider>
        ) : null}
      </Layout>
    </LayoutContainer>
  )
}

export default LandingHeader
