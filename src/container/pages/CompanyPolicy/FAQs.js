import React from 'react';
import { Row, Col, Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaqWrapper } from '../style';
import { FAQWrap } from '../../profile/authentication/overview/style';
import { ReactComponent as ArrowLeft } from '../../../static/img/icon/left-arrow-faqs.svg';
import { ReactComponent as ArrowBottom } from '../../../static/img/icon/bottom-arrow-faqs.svg';
import { getItem } from '../../../utility/localStorageControl';
import { LandingPage } from '../Landing/Style';
import LandingHeader from '../Landing/Header';

const { Panel } = Collapse;

const customPanelStyle = {
  borderRadius: 5,
  marginBottom: 5,
};

function FAQs() {
  const { t } = useTranslation();
  const userInfo = getItem('access_token');
  return (
    <LandingPage>
      <LandingHeader />
      <FAQWrap id="faqs" style={{ marginTop: userInfo ? '0px' : '80px' }}>
        <div className="left-container">
          <div className="left-main">
            <h1 className="left-heading">FAQs</h1>
          </div>
        </div>
        <div className="right-container">
          <div className="right-main">
            <Row justify="center">
              <Col xxl={16} xl={18} md={22} sm={18} xs={24}>
                <FaqWrapper>
                  <Collapse
                    accordion
                    bordered={false}
                    expandIcon={({ isActive }) => (isActive ? <ArrowBottom /> : <ArrowLeft />)}
                  >
                    <Panel
                      header={t('Who_is_eligible_for_the_Adopting_El_Salvador_Freedom_Residency_Visa?')}
                      key="1"
                      style={customPanelStyle}
                    >
                      <p>
                        {t(
                          'This_program_intends_to_attract_individuals_who_can_make_an_economic_&_societal_contribution_to_help_El_Salvador_become_a_global_hub_for_technology,_freedom,_new_capital_markets_on_bitcoin_and_peer-to-peer_innovation._The_eligibility_criteria_for_participating_are_primarily_designed_for_high-net-worth_individuals_or_investors_interested_in_contributing_to_building_Bitcoin_Country._Potential_applicants_would_need_to_meet_the_financial_threshold_specified_by_the_government,_set_at_$1_million_in_Bitcoin_or_USDt.',
                        )}
                      </p>
                    </Panel>

                    <Panel
                      header={t('Can_I_apply_for_the_program_with_my_whole_family?')}
                      key="2"
                      style={customPanelStyle}
                    >
                      <p>
                        {t(
                          'Yes,_the_Adopting_El_Salvador_Freedom_Residency_Visa_program_offers_the_possibility_for_families_to_apply_together.The_main_applicant_can_include_eligible_family_members_in_the_application._This_often_extends_to_spouses,_children,_and,_in_some_cases,_dependent_family_members._The_program_allows_for_a_collective_application,_enabling_families_to_pursue_citizenship_and_the_privileges_associated_with_the_Freedom_Residency_Visa_together._Fees_may_vary.',
                        )}
                      </p>
                    </Panel>

                    <Panel
                      header={t('How_long_are_the_Freedom_Residency_Visas_valid?')}
                      key="3"
                      style={customPanelStyle}
                    >
                      <p>
                        {t(
                          'The_Freedom_Residency_Visa_program_in_El_Salvador_is_designed_as_a_long-term_residency_and_citizenship_initiative,_similar_to_the_concept_of_a_Golden_Visa_program_in_other_countries._Eligible_candidates_will_be_able_to_apply_for_citizenship.',
                        )}
                      </p>
                    </Panel>
                    <Panel header={t('How_many_Sats_or_USDt_do_I_need_to_apply?')} key="4" style={customPanelStyle}>
                      <p>
                        {t(
                          'Begin_your_journey_to_Salvadoran_citizenship_by_initiating_the_application_process_with_a_999_USD_equivalent_deposit_in_Bitcoin_or_USDt._Once_accepted,_completing_the_process_involves_submitting_the_remaining_$1_million_USD_equivalent_in_Bitcoin_or_USDt_to_secure_your_Freedom_Visa_and_then_citizenship.',
                        )}
                      </p>
                    </Panel>
                    <Panel header={t('What_is_the_program_about?')} key="5" style={customPanelStyle}>
                      <p>
                        {t(
                          'The_Adopting_El_Salvador_Freedom_Residency_Visa_program_is_designed_to_benefit_the_economy,_the_culture_and_the_people_of_El_Salvador._It_offers_a_golden_opportunity_for_bitcoin_hodlers_and_entrepreneurs_as_well_as_those_just_simply_interested_in_living_in_a_land_of_economic_liberty_to_take_an_active_role_in_building_an_entirely_new_economy_and_a_better_future_in_Bitcoin_Country,_El_Salvador._This_is_a_once_in_five_hundred_year_moment_in_which_just_1000_participants_can_invest_in_a_renaissance_that_they_help_build._Their_$1_million_contribution_will_go_toward_economic_development,_cultural_enrichment_and_social_programs_meant_to_achieve_maximum_economic_development_and_rebirth.',
                        )}
                      </p>
                    </Panel>
                    <Panel header={t('Is_Bitcoin_legal_tender_in_El_Salvador?')} key="6" style={customPanelStyle}>
                      <p>
                        {t(
                          'In_El_Salvador,_Bitcoin_holds_the_unique_status_of_being_recognized_as_legal_tender,_marking_agroundbreaking_milestone_in_the_world_of_finance._This_designation_allows_the_seamless_use_ofBitcoin_for_transactions_alongside_the_official_national_currency,_ushering_in_a_new_era_ofdigital_currency_acceptance_within_the_country.',
                        )}
                      </p>
                    </Panel>
                    <Panel header={t('How_long_is_the_application_process?')} key="7" style={customPanelStyle}>
                      <p>
                        {t(
                          "The_application_process_for_the_Adopting_El_Salvador_Freedom_Residency_Visa_is_a_straightforward_procedure_that_requires_just_a_few_minutes_to_complete_the_initial_form._Once_submitted,_the_processing_time_can_vary,_with_approvals_typically_taking_up_to_6_weeks._During_this_period,_the_provided_information_is_carefully_reviewed_and_verified_to_ensure_compliance_with_the_program's_requirements._While_the_initial_application_is_swift,_the_processing_duration_allows_for_meticulous_assessment,_ensuring_that_all_necessary_steps_are_followed_before_the_exclusive_Freedom_Residency_Visa_is_granted_and_the_path_to_citizenship_is_opened.",
                        )}
                      </p>
                    </Panel>

                    <Panel header={t('What_is_bitcoin?')} key="8" style={customPanelStyle}>
                      <p>
                        {t(
                          'Bitcoin_is_a_digital_currency,_often_referred_to_as_cryptocurreny,_created_and_stored_electronically._It_operates_on_a_decentralized_network_without_central_authority,_such_as_bank_or_government,_managing_transactions._Bitcoin_can_be_used_to_buy_goods_and_services_in_EI_Salavador._Its_unique_technology,_called_blockchain,_ensures_transparency_and_security_by_recording_all_transactions_in_a_public_ledger,_accessible_to_anyone.',
                        )}
                      </p>
                    </Panel>
                  </Collapse>
                </FaqWrapper>
              </Col>
            </Row>
          </div>
        </div>
      </FAQWrap>
    </LandingPage>
  );
}

export default FAQs;
