import { UilCircle } from '@iconscout/react-unicons'

import { Menu } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v'
import propTypes from 'prop-types'

function LandingMenuItems({ toggleCollapsed }) {
  const { t } = useTranslation()

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    }
  })

  const path = '/admin'

  const pathName = window.location.pathname
  const pathArray = pathName?.split(path)
  const mainPath = pathArray[1]
  const mainPathSplit = mainPath?.split('/')

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  )

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys)
  }

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([])
  }

  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to="https://www.elsalvador.travel/">
        {t('Visit_El_Salvador')}
      </NavLink>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
    getItem(
      <a href="/welcome#citizenship" onClick={toggleCollapsed}>
        {t('Freedom_Residency')}
      </a>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink
        onClick={toggleCollapsed}
        to="https://investinelsalvador.gob.sv/catalogo/en/investment-services-directory/"
      >
        {t('Re_Location_Services')}
      </NavLink>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink target="_blank" onClick={toggleCollapsed} to="/about">
        {t('About_Us')}
      </NavLink>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink target="_blank" onClick={toggleCollapsed} to="/contact">
        {t('Contact')}
      </NavLink>,
      'starter',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={`${path}/pages/starter`}>
          <UilCircle />
        </NavLink>
      ),
    ),
  ]

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  )
}

LandingMenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
}

export default LandingMenuItems
