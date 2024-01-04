import React from 'react'
import { Steps } from 'antd'
import { useTranslation } from 'react-i18next'

function BitcoinFrontierWizardNewVersion () {
  const { t } = useTranslation()

  return (
    <>
      <Steps
        labelPlacement="vertical"
        direction="vertical"
        items={[
          {
            title: 'Initiating the Evaluation Process',
            description: (
              <div className="step-block-desription">
                <div className="content" style={{ paddingRight: '10%' }}>
                  <ul style={{ display: 'block' }}>
                    <li>
                      <strong className="font-bold">{t('Registration')}: </strong>
                      <span>{t('Register_your_application_through_the_online_portal.')}</span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Fee_Payment')}: </strong>
                      <span>
                        {t('Submit_a_non-refundable_application_fee_of')}
                        <strong className="line font-bold"> {t('999_USD_in_Bitcoin_(BTC)')}</strong>
                        {t('or_USDt_to_commence_the_evaluation_process.')}
                      </span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Processing')}: </strong>
                      <span>{t('Your_application_will_be_meticulously_reviewed')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: 'Proceeding upon Approval',
            description: (
              <div className="step-block-desription">
                <div className="content" style={{ paddingRight: '10%' }}>
                  <ul style={{ display: 'block' }}>
                    <li>
                      <strong className="font-bold">{t('Approval_Notification')}: </strong>
                      <span>
                        {t('Upon_successful_evaluation,_you_will_receive_an_official_notification_via_email.')}
                      </span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Instruction_Link')}: </strong>
                      <span>{t('The_email_will_contain_a_secure_link_directing_you_to_a_payment_portal.')}</span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Fund_Transfer')}: </strong>
                      <span>
                        {t('Fund_Transfer_details')}
                        <strong className="line font-bold">{t('Fund_Transfer_details_bold')}</strong>
                      </span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Processing')}: </strong>
                      <span>{t('Your_payment_will_be_processed_and_verified.')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          },
          {
            title: 'Receiving Freedom Passport',
            description: (
              <div className="step-block-desription">
                <div className="content" style={{ paddingRight: '10%' }}>
                  <ul style={{ display: 'block' }}>
                    <li>
                      <strong className="font-bold">{t('Residency_Visa_Issuance')}: </strong>
                      <span>{t('Upon_completion_of_the_payment_process,_the_residency_visa_will_be_issued.')}</span>
                    </li>
                    <li>
                      <strong className="font-bold">{t('Delivery_Options')}: </strong>
                      <span>{t('You_can_choose_to_receive_your_residency_visa_by_post_or_collect_it_in_person')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
        ]}
      />
    </>
  )
}
export default BitcoinFrontierWizardNewVersion
