import React from 'react'
import { useTranslation } from 'react-i18next'

function Block3() {
  const { t } = useTranslation()
  return (
    <div className="block-container">
      <div className="block-icon">
        <span>3</span>
      </div>
      <div className="block-title">
        <span>Receiving Freedom Visa</span>
      </div>
      <div className="step-block">
        <div className="content" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <ul style={{ display: 'block' }}>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Residency_Visa_Issuance')}: </strong>
              <span>{t('Upon_completion_of_the_payment_process,_the_residency_visa_will_be_issued.')}</span>
            </li>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Delivery_Options')}: </strong>
              <span>{t('You_can_choose_to_receive_your_residency_visa_by_post_or_collect_it_in_person')}</span>
            </li>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Path_to_Citizenship')}: </strong>
              <span>{t('Path_to_Citizenship_details')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Block3
