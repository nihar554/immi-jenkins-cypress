import { Suspense } from 'react'
import { Row, Col, Skeleton } from 'antd'
import { useTranslation } from 'react-i18next'
import { CitizenStyle, MainStyle } from './Style'
import CitizenCard from './CitizenCard'
import Rec0 from '../../../../static/img/landing/family.png'
import Rec1 from '../../../../static/img/landing/better_future.png'
import Rec2 from '../../../../static/img/landing/2nd_secure.png'
import Rec3 from '../../../../static/img/landing/3rd_eco.png'
import Rec4 from '../../../../static/img/landing/4th_explore.png'
import Rec5 from '../../../../static/img/landing/6th_rising.png'
import { Cards } from '../../../../components/cards/frame/cards-frame'
// import { Cards } from '../../../components/cards/frame/cards-frame';
export default function Citizen () {
  const { t } = useTranslation()
  const datas = [
    {
      name: 'come_with_family',
      img: Rec0,
      text: 'come_with_family_details'
    },
    {
      name: 'Build_a_Better_Future',
      img: Rec1,
      text: "Your_investment_in_El_Salvador's_cultural_and_economic_renaissance_program_directly_fuels_the_country's_growth._Every_bitcoin_is_reinvested_into_vital_areas_like_education,_healthcare,_and_infrastructure._Your_contribution_will_help_build_a_better_future_for_all."
    },
    {
      name: 'A_Freedom_Ark_in_Central_America',
      img: Rec2,
      text: 'Amidst_stability,_El_Salvador_shines_as_one_of_the_safest_countries_in_the_region._It_is_an_ark_of_freedom_in_Central_America._Benefit_from_supportive_laws,_respect_for_property_rights_and_a_burgeoning_technology_ecosystem_eager_for_collaboration.'
    },
    {
      name: 'Volcanic_Empowerment',
      img: Rec3,
      text: 'Leveraging_natural_thermal_energy,_El_Salvador_powers_both_domestic_electricity_production_and_Bitcoin_mining,_symbolizing_the_union_of_sustainability_and_technological_progress.'
    },
    {
      name: 'Explore_Natural_Abundance',
      img: Rec4,
      text: "From_stunning_Pacific_beaches_to_towering_volcanoes,_nature,_and_lush_coffee_plantations,_there's_something_for_every_adventurer._Adopt_El_Salvador_and_make_this_new_land_yours."
    },
    {
      name: 'A_Rising_Global_Hub',
      img: Rec5,
      text: 'In_a_world_of_uncertainty,_El_Salvador_stands_as_a_beacon_of_opportunity._Join_us_on_an_exhilarating_journey_toward_becoming_a_global_epicenter_for_Bitcoin,_technology,_and_personal_freedom.'
    }
  ]
  return (
    <CitizenStyle id="citizenship">
      <video autoPlay playsInline loop muted>
        <source src={`${process.env.REACT_APP_S3_CLOUDFRONT_URL}/2nd_section.mp4`} type="video/mp4" />
      </video>
      <div className="content">
        <div className="ninjadash-term-condition-top">
          <h2 className="ninjadash-term-condition-top__title font-bold" style={{ textTransform: 'uppercase' }}>
            <span>{t('VISIONARY')}</span>
            <br />
            {t('FREEDOM_PROGRAM')}
          </h2>
        </div>
        <div className="ninjadash-term-condition-content font-regular">
          <p>
            {t(
              "El Salvador extends an exclusive invitation of citizenship to 1000 individuals who aspire to make a difference in the world. Successful applicants are eligible for a fast-track Salvadoran passport, becoming an integral part of this transformative journey. El Salvador is experiencing a renaissance driven by bold leadership, economic liberty, and a commitment to financial freedom. We are actively seeking the brightest minds globally to join us in building this vision of a better tomorrow. Limited to 1000 participants per year, this Freedom Passport program is not just an investment; it's a commitment to building the country of the future."
            )}
          </p>
        </div>
        <MainStyle>
          <Row gutter={25}>
            {datas.map((item) => {
              return (
                <Col xxl={8} lg={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        {t(
                          "El Salvador extends an exclusive invitation of residency to 1000 individuals who aspire to make a difference in the world. Successful applicants are eligible for a fast-track Salvadoran passport, becoming an integral part of this transformative journey. El Salvador is experiencing a renaissance driven by bold leadership, economic liberty, and a commitment to financial freedom. We are actively seeking the brightest minds globally to join us in building this vision of a better tomorrow. Limited to 1000 participants per year, this Freedom Visa program is not just an investment; it's a commitment to building the country of the future."
                        )}
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <CitizenCard item={item} />
                  </Suspense>
                </Col>
              )
            })}
          </Row>
        </MainStyle>
      </div>
    </CitizenStyle>
  )
}
