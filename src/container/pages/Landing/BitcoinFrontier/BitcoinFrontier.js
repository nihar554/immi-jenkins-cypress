import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { useNavigate } from 'react-router'
import { BitcoinFrontierWizardBlock, BitcoinFrontierWrapper } from './Style'
import MobileBitcoinFrontier from './MobileView/MobileBitcoinFrontier'
import Steper from './Steper'

function BitcoinFrontier() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <BitcoinFrontierWrapper>
      <div className="center">
        <h1 className="font-bold">{t('JOIN_THE_ARK')}</h1>
        <h1 className="font-bold freedom-text">{t('OF_FREEDOM')}</h1>
        <div className="descripion">
          <p className="font-regular">
            {t(
              'As_the_trailblazer_in_adopting_Bitcoin_as_legal_tender,_El_Salvador_offers_unparalleled_advantages_for_enthusiasts_of_the_cryptocurrency_and_forward-thinking_entrepreneurs._Enjoy_the_freedom_of_using_Bitcoin_effortlessly,_complemented_by_tax_laws_that_support_your_ventures.',
            )}
          </p>
        </div>
      </div>
      <br />
      <div>
        <BitcoinFrontierWizardBlock>
          <MobileBitcoinFrontier />
          <Steper />
        </BitcoinFrontierWizardBlock>
      </div>
      <div className="center">
        <Button
          onClick={() => {
            navigate('/register')
          }}
        >
          {t('Start_the_Process')}
        </Button>
      </div>
    </BitcoinFrontierWrapper>
  )
}
export default BitcoinFrontier
