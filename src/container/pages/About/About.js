import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import { useTranslation } from 'react-i18next'
import { HeadTitle, ImageTitle, BannerStyle } from './Style'
import About from '../../../static/img/images/about.svg'
// import Heading from '../../../components/heading/heading';
import BackgroundCorve from '../../../static/img/images/backgroundCorve.png'
import { Main } from '../../styled'
// import eliment from '../../../static/img/eliment.svg';
import eliment1 from '../../../static/img/eliment (1).svg'
import eliment2 from '../../../static/img/eliment (2).svg'

function Tether () {
  const { t } = useTranslation()
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal')

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        } else {
          element.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', reveal)
    reveal()

    return () => {
      window.removeEventListener('scroll', reveal)
    }
  }, [])

  return (
    <>
      <Main>
        <BannerStyle>
          <div className="text-center">
            <img src={eliment1} alt="" className="mt-20 absolute" />
          </div>
          <div style={{ float: 'right' }}>
            <img src={eliment1} alt="" className="mt-20 absolute" />
          </div>

          <Row gutter={25}>
            <Col xxl={12} lg={12} sm={12} xs={24}>
              <HeadTitle>
                <h1 className="typography-h1">{t('About_Us')}</h1>
                <p className="description typography-body-regular-medium">
                  {t(
                    'Tether_Plus_was_launched_with_the_goal_to_build_a_bridge_for_institutions,_central_banks_and_governments_around_the_world_to_move_money_in_ways_never_thought_possible.'
                  )}
                </p>
                <p className="description typography-body-regular-medium">
                  {t(
                    'Tether_Plus_utilizes_some_of_the_top_innovations_of_the_Software-as-a-service_model_(SaaS)_in_its_Tokenization-as-a_Service_(TaaS)_model._Its_TaaS_offering_constitutes_a_comprehensive_suite_of_services_to_facilitate_the_tokenization_of_assets_by_institutions.'
                  )}
                </p>
                <p className="description typography-body-regular-medium">
                  {t(
                    'Tether_Plus_brings_together_a_sophisticated_tech_stack_and_years_of_experience_working_with_institutions,_market_participants_and_governments_across_traditional_and_new-age_finance_industries.'
                  )}
                </p>
              </HeadTitle>
            </Col>
            <Col xxl={12} lg={12} sm={12} xs={24} className="col-image mt-30">
              <ImageTitle>
                <img alt="" src={About} style={{ width: '40rem', height: '30rem', marginTop: 70 }} />
              </ImageTitle>
            </Col>
          </Row>
        </BannerStyle>
        <img src={eliment2} alt="" style={{ float: 'right', marginTop: '-17%' }} />
        <div
          style={{
            height: '250px',
            width: '99%',
            backgroundImage: `url(${BackgroundCorve})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            backgroundOrigin: 'content-box',
            transform: 'rotate(3deg)'
            // marginTop: '4%',
          }}
        />
      </Main>
    </>
  )
}

export default Tether
