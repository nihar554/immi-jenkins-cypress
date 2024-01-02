import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { AuthFormWrap, LoginWrap, AboutUsWrap } from '../../profile/authentication/overview/style';
import OfficialSeal from '../../../static/img/landing/OfficalSeal.svg';
import { LandingPage } from '../Landing/Style';
import LandingHeader from '../Landing/Header';
import { getItem } from '../../../utility/localStorageControl';

function AboutUs() {
  const { t } = useTranslation();
  const userInfo = getItem('access_token');
  return (
    <LandingPage>
      <LandingHeader />

      <LoginWrap>
        <div style={{ marginTop: userInfo ? '0px' : '80px' }}>
          <div className="left-container">
            <div className="left-main">
              <h1 className="left-heading">{t('ABOUT_US')}</h1>
            </div>
          </div>
          <div className="right-container">
            <Row justify="center">
              <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                <AuthFormWrap>
                  <AboutUsWrap>
                    <div className="main">
                      <div className="ninjadash-term-condition-content">
                        <img width="60%" src={OfficialSeal} alt="" />
                        <h2>{t("Welcome_to_El_Salvador's_Migration_Authority")}</h2>
                        <p className="">
                          {t(
                            'At_El_Salvador&apos;s_Migration_Authority,_we_serve_as_the_gateway_to_a_nation_that_embraces_innovation,_progress,_and_global_connectivity._Committed_to_facilitating_seamless_travel_and_fostering_a_welcoming_environment,_we_manage_immigration_processes_with_efficiency_and_integrity._As_pioneers_in_adapting_to_the_evolving_landscape_of_digital_currencies,_we_proudly_spearheaded_the_acceptance_of_Bitcoin_as_legal_tender,_symbolizing_our_commitment_to_technological_advancement._Our_mission_goes_beyond_borders_–_we_are_architects_of_a_future_where_freedom_and_opportunity_flourish._Explore_the_rich_diversity_and_endless_possibilities_that_El_Salvador_offers_through_the_lens_of_our_Migration_Authority,_where_each_journey_is_a_step_towards_a_brighter_tomorrow.',
                          )}
                        </p>
                      </div>
                    </div>
                  </AboutUsWrap>
                </AuthFormWrap>
              </Col>
            </Row>
          </div>
        </div>
      </LoginWrap>
    </LandingPage>
  );
}

export default AboutUs;
