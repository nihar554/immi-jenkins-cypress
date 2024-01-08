import React from 'react'
import { Link } from 'react-router-dom'

function CompanyMenu() {
  console.log('one')

  return (
    <div className="footer-product-menu">
      <p className="footer-menu-title typography-h4">Company</p>
      <ul>
        <li className="typography-body-regular-medium">
          <Link to="aboutus">About Us</Link>
        </li>
        <li className="typography-body-regular-medium">
          <Link to="coming-soon">Pressroom</Link>
        </li>
        <li className="typography-body-regular-medium">
          <Link to="coming-soon">Support Portal</Link>
        </li>
        <li className="typography-body-regular-medium">
          <Link to="careers">Careers</Link>
        </li>
      </ul>
    </div>
  )
}
export default CompanyMenu
