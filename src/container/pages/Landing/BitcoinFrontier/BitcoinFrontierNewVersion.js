import React from 'react'
import { BitcoinFrontierWrapperNewVersion } from './Style'
import BitcoinFrontierWizardNewVersion from './BitcoinFrontierWizardNewVersion'
import BitcoinFrontierRight from './BitcoinFrontierRight'

function BitcoinFrontierNewVersion () {
  return (
    <BitcoinFrontierWrapperNewVersion>
      <div className="container">
        <div className="left-container">
          <BitcoinFrontierWizardNewVersion />
        </div>
        <div className="right-container">
          <BitcoinFrontierRight />
        </div>
        <div className="clearfix" />
      </div>
    </BitcoinFrontierWrapperNewVersion>
  )
}
export default BitcoinFrontierNewVersion
