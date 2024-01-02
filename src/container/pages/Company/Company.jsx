import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';

function Company() {
  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Company Page" />
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards headless>
              <h3>Company Page</h3>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default Company;
