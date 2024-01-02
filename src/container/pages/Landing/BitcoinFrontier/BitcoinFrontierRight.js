import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

function BitcoinFrontierRight() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="description-block">
      <h1 className="font-bold">
        {t('JOIN_THE')} <br /> {t('ARK_OF')} <br /> {t('FREEDOM')}
      </h1>
      <p>
        As the trailblazer in adopting Bitcoin as legal tender, El Salvador offers unparalleled advantages for
        enthusiasts of the cryptocurrency and forward-thinking entrepreneurs. Enjoy the freedom of using Bitcoin
        effortlessly, complemented by tax laws that support your ventures.
      </p>
      <h2 className="family-block-title">Family friendly</h2>
      <p>
        The Adopting El Salvador Program is a <strong className="font-bold">fast track</strong> to the Salvadoran
        passport for you, your spouse and children under the age of 18, at the cost of{' '}
        <strong className="font-bold">1,000,000 USD in BTC or USDt.</strong> Your investment will contribute to El
        Salvador’s economic renaissance program to fuel the country’s growth.{' '}
      </p>
      <Button
        onClick={() => {
          navigate('/register');
        }}
      >
        {t('Start_Process')}
      </Button>
    </div>
  );
}

export default BitcoinFrontierRight;
