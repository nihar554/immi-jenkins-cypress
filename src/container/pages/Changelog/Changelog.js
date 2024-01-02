import React, { useState, useEffect } from 'react';
import { Row, Col, Collapse } from 'antd';
import { ChangelogWrapper, VersionHistoryList } from './style';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { DataService } from '../../../config/dataService/dataService';
import NotFound from '../404';

const { Panel } = Collapse;

function ChangeLog() {
  const [changeLogData, setChangeLogData] = useState([]);

  useEffect(() => {
    try {
      DataService.get('/changelog').then((res) => {
        setChangeLogData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {changeLogData && changeLogData.length ? (
        <Main style={{ overflow: 'visible', marginTop: '5%' }}>
          <Row gutter={25}>
            <Col xxl={19} md={16} xs={24}>
              <ChangelogWrapper>
                <Cards
                  title={
                    <>
                      <span className="v-num">Version {changeLogData[0]?.version} </span>{' '}
                      <span className="sign">-</span> <span className="rl-date">{changeLogData[0]?.date}</span>
                    </>
                  }
                >
                  <div className="changelog-featured">
                    <div className="version-list">
                      {changeLogData[0]?.new && (
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-success">New</span>
                          </div>
                          <ul className="version-success">
                            {changeLogData[0]?.new?.map((item, key) => {
                              return <li key={key + 1}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                      {changeLogData[0]?.fixed && (
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-info">Fixed</span>
                          </div>
                          <ul className="version-info">
                            {changeLogData[0]?.fixed?.map((item, key) => {
                              return <li key={key + 1}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      )}

                      {changeLogData[0]?.bugs && (
                        <div className="version-list__single">
                          <div className="version-list__top">
                            <span className="badge badge-lg badge-primary">Bugs</span>
                          </div>
                          <ul className="version-primary">
                            {changeLogData[0]?.bugs?.map((item, key) => {
                              return <li key={key + 1}>{item}</li>;
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="changelog-accordion">
                    <Collapse accordion>
                      {changeLogData &&
                        changeLogData?.length &&
                        changeLogData?.map((version, index) => {
                          return (
                            index >= 1 && (
                              <Panel
                                key={version?.id}
                                header={
                                  <>
                                    <span className="v-num">{version?.version} - </span>
                                    <span className="rl-date">{version?.date}</span>
                                  </>
                                }
                              >
                                <div className="version-list">
                                  {version?.new && (
                                    <div className="version-list__single">
                                      <div className="version-list__top">
                                        <span className="badge badge-lg badge-success">New</span>
                                      </div>
                                      <ul className="version-success">
                                        {version?.new?.map((item, key) => {
                                          return <li key={key + 1}>{item}</li>;
                                        })}
                                      </ul>
                                    </div>
                                  )}
                                  {version?.bugs && (
                                    <div className="version-list__single">
                                      <div className="version-list__top">
                                        <span className="badge badge-lg badge-primary">Bugs</span>
                                      </div>
                                      <ul className="version-primary">
                                        {version?.bugs?.map((item, key) => {
                                          return <li key={key + 1}>{item}</li>;
                                        })}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </Panel>
                            )
                          );
                        })}
                    </Collapse>
                  </div>
                </Cards>
              </ChangelogWrapper>
            </Col>
            <Col xxl={5} md={8} xs={24}>
              <VersionHistoryList>
                <Cards title="CHANGELOG">
                  <h4 className="history-title">VERSION HISTORY</h4>
                  <ul className="v-history-list">
                    {changeLogData &&
                      changeLogData?.length &&
                      changeLogData?.map((version) => {
                        return (
                          <li key={version?.id}>
                            <span className="version-name">Version {version?.version}</span>
                            <span className="version-date">{version?.date}</span>
                          </li>
                        );
                      })}
                  </ul>
                </Cards>
              </VersionHistoryList>
            </Col>
          </Row>
        </Main>
      ) : changeLogData && changeLogData?.errors ? (
        <NotFound />
      ) : (
        <></>
      )}
    </>
  );
}

export default ChangeLog;