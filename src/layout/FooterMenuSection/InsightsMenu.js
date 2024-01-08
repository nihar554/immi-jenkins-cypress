import React from 'react'
import { Link } from 'react-router-dom'

function InsightsMenu() {
  return (
    <div className="footer-product-menu">
      <p className="footer-menu-title typography-h4">Insights</p>
      <ul className="typography-body-regular-medium">
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="coming-soon">Customer Stories</Link>
        </li>
      </ul>
    </div>
  )
}
export default InsightsMenu
