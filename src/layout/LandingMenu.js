import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { TopMenuStyle } from './Style'

function LandingMenu () {
  const { t } = useTranslation()

  // const path  = '/admin';

  useLayoutEffect(() => {
    const active = document.querySelector('.ninjadash-top-menu a.active')
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper')
      const hasSubMenuLeft = active.closest('.has-subMenu-left')
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active')
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active')
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active')
      }
    }
    window.addEventListener('load', active && activeDefault)
    return () => window.removeEventListener('load', activeDefault)
  }, [])

  return (
    <TopMenuStyle>
      <div className="ninjadash-top-menu">
        <ul>
          <li>
            <Link to="https://www.elsalvador.travel/" target="_blank">
              {t('Visit_El_Salvador')}
            </Link>
          </li>
          <li>
            <a href="/welcome#citizenship">{t('Freedom_Residency')}</a>
          </li>
          <li>
            <Link to="https://investinelsalvador.gob.sv/catalogo/en/investment-services-directory/" target="_blank">
              {t('Re_Location_Services')}
            </Link>
          </li>
          <li>
            <Link to="/about" target="_blank">
              {t('About_Us')}
            </Link>
          </li>
          <li>
            <Link to="/contact" target="_blank">
              {t('Contact')}
            </Link>
          </li>
        </ul>
      </div>
    </TopMenuStyle>
  )
}

export default LandingMenu
