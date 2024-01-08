import React from 'react'
import { Link } from 'react-router-dom'

function SolutionsMenu() {
  return (
    <div className="footer-solution-menu">
      <p className="footer-menu-title typography-h4">Solutions</p>
      <ul className="typography-body-regular-medium">
        <li>
          <Link to="financial-firms">Financial Firms</Link>
        </li>
        <li>
          <Link to="central-banks">Central Banks</Link>
        </li>
        <li>
          <Link to="nation-states">Nation States</Link>
        </li>
        <li>
          <Link to="corporations">Corporations</Link>
        </li>
      </ul>
    </div>
  )
}
export default SolutionsMenu
