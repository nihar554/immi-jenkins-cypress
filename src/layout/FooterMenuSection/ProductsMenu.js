import React from 'react'
import { Link } from 'react-router-dom'

function ProductsMenu() {
  return (
    <div className="footer-product-menu">
      <p className="typography-h4">Products</p>
      <ul className="typography-body-regular-medium">
        <li>
          <Link to="stablecoins">Stablecoins</Link>
        </li>
        <li>
          <Link to="commodities">Commodities</Link>
        </li>
        <li>
          <Link to="senatus">Senatus</Link>
        </li>
        <li>
          <Link to="asset-launchpad">Asset Launchpad</Link>
        </li>
      </ul>
    </div>
  )
}
export default ProductsMenu
