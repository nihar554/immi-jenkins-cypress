import React from 'react';
import { useTranslation } from 'react-i18next';

function Block1() {
  const { t } = useTranslation();
  return (
    <div className="block-container">
      <div className="block-icon">
        <span>1</span>
      </div>
      <div className="block-title">
        <span>Initiating the Evaluation Process</span>
      </div>
      <div className="step-block">
        <div className="content" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <ul style={{ display: 'block' }}>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Approval_Notification')}: </strong>
              <span>{t('Upon_successful_evaluation,_you_will_receive_an_official_notification_via_email.')}</span>
            </li>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Instruction_Link')}: </strong>
              <span>{t('The_email_will_contain_a_secure_link_directing_you_to_a_payment_portal.')}</span>
            </li>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Fund_Transfer')}: </strong>
              <span>{t('Complete_the_required_payment_in_BTC_or_USDt.')}</span>
            </li>
            <li style={{ listStyleType: 'decimal', marginBottom: '0.5rem' }}>
              <strong>{t('Processing')}: </strong>
              <span>{t('Your_payment_will_be_processed_and_verified.')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Block1;
