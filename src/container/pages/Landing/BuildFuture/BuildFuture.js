import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { BuildFutureWrapper } from './Style';
// import DashVideo from '../../../../static/video/build-future.MP4';

function BuildFuture() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BuildFutureWrapper>
      <div className="video-background">
        {window.innerWidth >= 900 ? (
          <video autoPlay playsInline muted loop className="myVideo">
            <source src={`${process.env.REACT_APP_S3_CLOUDFRONT_URL}/3rd_section.mp4`} type="video/mp4" />
          </video>
        ) : (
          <video autoPlay playsInline muted loop className="myVideo">
            <source src={`${process.env.REACT_APP_S3_CLOUDFRONT_URL}/3rd_section.mp4`} type="video/mp4" />
          </video>
        )}
        <div className="center">
          <h1 className="font-bold">{t('BUILDING_THE')}</h1>
          <h1 className="font-bold">{t('FUTURE_TOGETHER')}</h1>
          <div className="descripion">
            <p>
              {t(
                'Explore_boundless_growth_and_extraordinary_possibilities_in_a_country_designed_for_those_embracing_change.',
              )}
            </p>
            <p>
              {t('Welcome_to_El_Salvador,_where_the_convergence_of_Bitcoin_and_Freedom_unfolds_endless_opportunities.')}
            </p>
          </div>
          <div className="descripion">
            <p>
              {t(
                'Click_to_Apply_and_embark_on_your_extraordinary_journey_today,_shaping_the_future_of_humanity_and_El_Salvador',
              )}
            </p>
          </div>
          <br />
          <Button
            onClick={() => {
              navigate('/register');
            }}
          >
            {t('Apply_Now')}
          </Button>
        </div>
      </div>
    </BuildFutureWrapper>
  );
}
export default BuildFuture;
