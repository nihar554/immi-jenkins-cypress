import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { HeaderCointainer } from './Style';
import { Main } from '../../styled';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
// import StableconinsIcon from '../../../static/img/icons/stablecoins_blue.svg';
import CommoditesIcon from '../../../static/img/icons/comodities_green.svg';
import AssetLanuchPadIcon from '../../../static/img/icons/asset_launchpad_orange.svg';
// import SenatusIcon from '../../../static/img/icons/senatus_blue.svg';

function Developers() {
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Developer Page" />
      <Main>
        <HeaderCointainer>
          <Row gutter={25} justify="center">
            {/* <Col xxl={12} lg={6} sm={12} xs={24}>
              <Cards headless>
                <Cards headless className="borderless">
                  <figure>
                    <img src={StableconinsIcon} alt="" />
                    <figcaption>
                      <h1 className="card__name typography-h3 text-purple">
                        <Link to="https://beta-developers.pointsville.com/overview" target="_blank">
                          Library
                        </Link>
                      </h1>
                    </figcaption>
                  </figure>
                </Cards>
              </Cards>
            </Col> */}
            <Col xxl={12} lg={6} sm={12} xs={24}>
              <Cards headless>
                <Cards headless className="borderless">
                  <figure>
                    <img src={CommoditesIcon} alt="" />
                    <figcaption>
                      <h1 className="card__name typography-h3 text-purple">
                        <Link to="https://app.clickup.com/9005136096/v/l/8cbyy70-6508" target="_blank">
                          Projects
                        </Link>
                      </h1>
                    </figcaption>
                  </figure>
                </Cards>
              </Cards>
            </Col>
            {/* <Col xxl={12} lg={6} sm={12} xs={24}>
              <Cards headless>
                <Cards headless className="borderless">
                  <figure>
                    <img src={SenatusIcon} alt="" />
                    <figcaption>
                      <h1 className="card__name typography-h3 text-purple">
                        <Link to="https://beta-storybook.pointsville.com/admin" target="_blank">
                          Resources
                        </Link>
                      </h1>
                    </figcaption>
                  </figure>
                </Cards>
              </Cards>
            </Col> */}
            <Col xxl={12} lg={6} sm={12} xs={24}>
              <Cards headless>
                <Cards headless className="borderless">
                  <figure>
                    <img src={AssetLanuchPadIcon} alt="" />
                    <figcaption>
                      <h1 className="card__name typography-h3 text-purple">
                        <Link to="https://tether-loyalty.pointsville.com/" target="_blank">
                          Loyalty
                        </Link>
                      </h1>
                    </figcaption>
                  </figure>
                </Cards>
              </Cards>
            </Col>
            <Col xxl={12} lg={6} sm={12} xs={24}>
              <Cards headless>
                <Cards headless className="borderless">
                  <figure>
                    <img src={AssetLanuchPadIcon} alt="" />
                    <figcaption>
                      <h1 className="card__name typography-h3 text-purple">
                        <Link to="/changeLog">ChangeLog</Link>
                      </h1>
                    </figcaption>
                  </figure>
                </Cards>
              </Cards>
            </Col>
          </Row>
        </HeaderCointainer>
      </Main>
    </>
  );
}

export default Developers;
