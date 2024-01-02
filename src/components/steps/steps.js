import UilArrowLeft from '@iconscout/react-unicons/icons/uil-arrow-left';
import UilArrowRight from '@iconscout/react-unicons/icons/uil-arrow-right';
import { Col, message, Row } from 'antd';

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActionWrapper, StepsStyle } from './style';
import { Button } from '../buttons/buttons';

const { Step } = StepsStyle;

function Steps({
  isvertical,
  size,
  current,
  direction,
  status,
  progressDot,
  steps,
  isswitch,
  navigation,
  onNext,
  onPrev,
  form,
  onSubmitApplication,
  onSubmitInvoice,
  onDone,
  onChange,
  children,
  height,
  isfinished,
  loading,
}) {
  const [state, setState] = useState({
    currents: current,
  });

  useEffect(() => {
    setState({ currents: current });
  }, [current]);

  const next = () => {
    form
      .validateFields()
      .then(() => {
        const currents = state.currents + 1;
        setState({ currents });
        onNext(currents);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const { t } = useTranslation();

  const prev = () => {
    const currents = state.currents - 1;
    setState({ currents });
    onPrev(currents);
  };

  const { currents } = state;

  const stepStyle = {
    marginBottom: 60,
    boxShadow: '0px -1px 0 0 #e8e8e8 inset',
  };

  // console.log(steps);
  const onChanges = (curr) => {
    // console.log('onChange:', current);
    setState({ currents: curr });
    if (onChange) onChange(curr);
  };

  return !isswitch ? (
    <StepsStyle
      type={navigation && 'navigation'}
      style={navigation && stepStyle}
      size={size}
      current={navigation ? currents : current}
      direction={direction}
      status={status}
      progressDot={progressDot}
      onChange={onChanges}
    >
      {children}
    </StepsStyle>
  ) : (
    <>
      <StepsStyle current={currents} direction={direction} status={status} progressDot={progressDot} size={size}>
        {steps !== undefined &&
          steps.map((item) => (
            <Step
              className={item.className && item.className}
              icon={item.icon && item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
      </StepsStyle>
      {isvertical ? (
        <div className="steps-wrapper">
          <div className="steps-content" style={{ minHeight: height, display: 'flex', justifyContent: 'center' }}>
            {steps[state.currents].content}
          </div>

          {!isfinished && (
            <ActionWrapper>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && (
                          <Button className="btn-prev" type="light" onClick={() => prev()}>
                            <UilArrowLeft />
                            {t('Previous')}
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && (
                          <Button className="btn-next" type="primary" onClick={() => next()}>
                            {t('Save & Next')}
                            <UilArrowRight />
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button loading={loading} type="primary" onClick={onDone}>
                            Submit
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </ActionWrapper>
          )}
        </div>
      ) : (
        <>
          <div className="steps-content" style={{ minHeight: height, display: 'flex', marginTop: 100 }}>
            {steps[state.currents]?.content}
          </div>

          {!isfinished && (
            <ActionWrapper>
              <div className="step-action-wrap">
                <div className="step-action-inner">
                  <Row>
                    <Col xs={24}>
                      <div className="steps-action">
                        {state.currents > 0 && state.currents < steps.length - 2 && !loading && (
                          <Button className="btn-prev" onClick={() => prev()}>
                            <UilArrowLeft />
                            {t('Previous')}
                          </Button>
                        )}

                        {state.currents < steps.length - 3 && (
                          <Button className="proced-btn" onClick={() => next()}>
                            {t('Save & Next')}
                            <UilArrowRight />
                          </Button>
                        )}

                        {state.currents < steps.length - 1 && state.currents === steps.length - 3 && (
                          <Button loading={loading} className="proced-btn" type="primary" onClick={onSubmitApplication}>
                            {t('Submit Application')}
                            <UilArrowRight />
                          </Button>
                        )}

                        {state.currents === steps.length - 2 && (
                          <Button loading={loading} onClick={onSubmitInvoice} className="proced-btn">
                            {t('Proceed_to_payment')}
                          </Button>
                        )}

                        {state.currents === steps.length - 1 && (
                          <Button loading={loading} className="proced-btn" onClick={onDone}>
                            {t('Done')}
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </ActionWrapper>
          )}
        </>
      )}
    </>
  );
}

Steps.defaultProps = {
  current: 0,
  height: 150,
  onDone: () => message.success('Processing complete!'),
  isfinished: false,
};

Steps.propTypes = {
  size: PropTypes.string,
  current: PropTypes.number,
  direction: PropTypes.string,
  status: PropTypes.string,
  progressDot: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.object),
  isswitch: PropTypes.bool,
  navigation: PropTypes.bool,
  isfinished: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  onSubmitApplication: PropTypes.func,
  onSubmitInvoice: PropTypes.func,
  onDone: PropTypes.func,
  onChange: PropTypes.func,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.node, PropTypes.string]),
  isvertical: PropTypes.bool,
  form: PropTypes.object,
  loading: PropTypes.bool,
};

export { Step, Steps };
