import { Row, Col, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { BoardStyle } from './Style';

export default function Board() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <BoardStyle>
      <video autoPlay playsInline muted loop className="top-video">
        <source src={`${process.env.REACT_APP_S3_CLOUDFRONT_URL}/hero_video_with_text.mp4`} type="video/mp4" />
      </video>
      <div className="container">
        <div className="left-container">
          <div className="left-main">
            <Row justify="center">
              <Col xxl={16} xl={20} md={22} sm={18} xs={24}>
                <div className="ninjadash-authentication-top">
                  <h1
                    className="ninjadash-authentication-top _title join-title font-bold"
                    style={{ textTransform: 'uppercase' }}
                  >
                    {t('Adopting')}
                    <br />
                    <span className="no-wrap">{t('El_Salvador')}</span>
                  </h1>
                  <span className="top-desc font-regular">
                    {t('Experience_Freedom,_Security,_and_a_Bitcoin_lifestyle_by_adopting_El_Salvador_as_your_home.')}
                  </span>
                </div>
                <div className="ninjadash-authentication-content">
                  <h1 className="ninjadash-authentication-top _title content font-regular">
                    {t('El_Salvador_has_been_reborn_as_the_land_of_economic_liberty.')}
                    <br />
                    {t('But_this_is_just_the_beginning.')}
                    <br />
                    {t('Come_help_us_build_the_future_you_want_to_see.')}
                  </h1>
                  <div className="action-block">
                    <Button
                      onClick={() => {
                        navigate('/register');
                      }}
                      className="btn-signin font-regular logo-block"
                      style={{ marginRight: '32px' }}
                      htmlType="submit"
                      type="primary"
                      size="large"
                    >
                      {t('Get_Your_Freedom_Passport')}
                    </Button>
                    <img src={require(`../../../../static/img/extranjeria-logo.svg`).default} alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="right-container">
          <video autoPlay muted loop className="myVideo">
            <source src={`${process.env.REACT_APP_S3_CLOUDFRONT_URL}/hero_video_with_text.mp4`} type="video/mp4" />{' '}
          </video>
        </div>
      </div>
    </BoardStyle>
  );
}
