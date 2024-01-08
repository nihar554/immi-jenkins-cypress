import React from 'react'
import { Link } from 'react-router-dom'

function DevelopersMenu() {
  return (
    <div className="footer-product-menu">
      <p className="footer-menu-title typography-h4">Developers</p>
      <ul className="typography-body-regular-medium">
        <li>
          <Link to="coming-soon">Exchanges & Wallets</Link>
        </li>
      </ul>
    </div>
  )
}
export default DevelopersMenu
