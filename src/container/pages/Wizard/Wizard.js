/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Form, Row, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import moment from 'moment';
import NameContact from './NameContact';
import Address from './Address';
import Identity from './Identity';
import Review from './Review';
import Payment from './Payment';
import Summary from './Summary';
import { BasicFormWrapper } from '../../styled';
import { ContainerStyle, RightBlockStyle, MainStyle, ReviewWrapper, WizardWrapper } from '../style';
import { Steps } from '../../../components/steps/steps';
import { DataService } from '../../../config/dataService/dataService';
import PoweredBy from '../Landing/PowerdBy';

function Wizards() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isResident, setIsResident] = useState('Buy Resident Card');
  const [paymentType, setPaymentType] = useState('bitcoin');
  const [data, setData] = useState({});
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bitfinexUrl, setBitfinexUrl] = useState('');
  const countryList = [];
  const [countries, setCountries] = useState([]);
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 0,
  });

  useEffect(() => {
    if (JSON.parse(Cookies.get('user')).email) {
      form.setFieldValue('email', JSON.parse(Cookies.get('user')).email);
    }
  }, [JSON.parse(Cookies.get('user')).email]);

  const { status, isFinished, current } = state;

  const next = () => {
    setState({
      ...state,
      status: 'process',
      current: current + 1,
    });
  };

  useEffect(() => {
    DataService.get('/country/all')
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  useEffect(() => {
    if (country && country.length) {
      for (let i = 0; i < country.length; i++) {
        countryList.push({
          name: country[i].name,
          code: country[i].code,
          _id: country[i]._id,
          value: country[i].code,
          label: country[i].name,
        });
      }
      setCountries(countryList);
    }
  }, [country]);

  const prev = () => {
    setState({
      ...state,
      status: 'process',
      current: current - 1,
    });
  };

  const createApplicationHandler = async () => {
    setLoading(true);
    const body = {
      name: `${`${data.first_name} ${data.middle_name ? data.middle_name : ''} ${data.last_name}`}`,
      phoneNumber: data.phone,
      email: JSON.parse(Cookies.get('user')).email,
      passPortImageUrl: 'data.passport_url',
      // testQuestions: data.testQuestions,
      testQuestions: [1, 2, 3],
      paymentDetails: isResident,
      documents: [
        {
          type: 'wealth',
          data: 'data:image/png;base64,58e17c4ba3f42f91399f15bdee7beeed6cdada9b=',
          filename: 'test.png',
        },
        {
          type: 'criminal',
          data: 'data:image/png;base64,58e17c4ba3f42f91399f15bdee7beeed6cdada9b=',
          filename: 'test.png',
        },
        {
          type: 'bank_statement',
          data: 'data:image/png;base64,58e17c4ba3f42f91399f15bdee7beeed6cdada9b=',
          filename: 'test.png',
        },
        {
          type: 'selfie',
          data: 'data:image/png;base64,3fac6d2245311292d1d7af8496703f23e847e88d=',
          filename: 'test.png',
        },
        {
          type: 'passport',
          data: data?.passport,
          filename: data?.passport_url?.name,
        },
        {
          type: 'identity_front',
          data: 'data:image/png;base64,3fac6d2245311292d1d7af8496703f23e847e88d=',
          filename: 'test.png',
        },
        {
          type: 'identity_back',
          data: 'data:image/png;base64,3fac6d2245311292d1d7af8496703f23e847e88d=',
          filename: 'test.png',
        },
        {
          type: 'proof_of_res',
          data: data?.proof_of_res_data,
          filename: data?.proof_of_res_url?.name,
        },
        {
          type: 'kyc',
          data: 'data:image/png;base64,3fac6d2245311292d1d7af8496703f23e847e88d=',
          filename: 'test.png',
        },
      ],
      first_name: data.first_name,
      middle_name: data?.middle_name ? data?.middle_name : '',
      last_name: data.last_name,
      nationality: data.nationality,
      gender: data.gender,
      phone_country_code: data.phone_country_code,
      phone: data.phone,
      dob: data.dob,
      proof_resid_type: 'Utility Bill',
      resid_country: data.resid_country,
      resid_state: data.resid_state ? data.resid_state : 'N/A',
      resid_city: data.resid_city,
      resid_street: data.resid_street,
      resid_zipcode: data.resid_zipcode,
      resid_building_name: data.resid_building_name,
      passport_firstname: 'John',
      passport_lastname: 'John',
      passport_nb: 'data',
      passport_exp: '2024-10-27 09:19:25',
      passport_check: true,
      passport_country: '032',
      national_id_firstname: 'John',
      national_id_lastname: 'John',
      national_id_nb: 'data',
      national_id_exp: '2024-10-27 09:19:25',
      national_id_check: true,
      national_id_country: '032',
      occupation_type: 'Employed',
      industry: 'data',
      job_title: 'data',
      funds_inheritance: true,
      funds_investments: true,
      funds_salary: true,
      funds_savings: true,
      funds_other: 'data',
      employer_name: 'data',
      employer_country: '032',
      employer_state: 'data',
      employer_city: 'data',
      employer_district: 'data',
      employer_building_nb: 'data',
      employer_street: 'data',
      employer_zipcode: 'data',
      net_worth_usd: 'data',
      expected_investment: 'data',
      investment_stock: 'Yes',
      investment_derivatives: 'Yes',
      investment_risks: 'Yes',
      bank_details: true,
      bank_statement_date: '2023-10-27 09:19:25',
      bank_account_holder_name: 'data',
      bank_account_number: 'data',
      bank_branch_location: 'data',
      bank_name: 'data',
      bank_country: '032',
      type_account: 'individual',
      is_main_account: true,
      proof_resid_date: moment(data.issue_date).format('YYYY-MM-DD hh:mm:ss'),
    };

    await DataService.post('/userApplications', body)
      .then(async (res) => {
        if (res.status === 201) {
          setLoading(false);
          message.success('Application created!');
          next();
        } else {
          setLoading(false);
          message.error('Please validate your data.');
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response && error.response.data && error.response.data.errors) {
          const errorMsg = error.response.data.errors.msg;
          message.error(errorMsg);
        }
      });
  };

  const createInvoiceHandler = async () => {
    const invoiceData = {
      amount: process.env.REACT_APP_APPLICATION_FEE,
      currency: 'USD',
      payCurrencies: paymentType === 'bitcoin' ? ['BTC'] : ['UST-ETH'],
      // orderId: 'order123',
      duration: 86400,
      // webhook: `${process.env.REACT_APP_API_ENDPOINT}bitfinex/updatePayment`,
      // redirectUrl: 'https://example.com/checkout/order123',
      nationality: data.nationality,
      residCountry: data.resid_country,
      residStreet: data.resid_street,
      residZipCode: data.resid_zipcode,
      residBuildingNo: data.resid_building_name,
      residCity: data.resid_city,
      fullName: `${`${data.first_name} ${data.middle_name ? data.middle_name : ''} ${data.last_name}`}`,
      email: JSON.parse(Cookies.get('user')).email,
      paymentType: 'ApplicationPayment',
    };
    await DataService.post('/bitfinex/submitInvoice', invoiceData)
      .then((resInvoice) => {
        if (resInvoice.status === 201) {
          const url = `https://pay.bitfinex.com/gateway/order/${resInvoice.data}`;
          setBitfinexUrl(url);
          const windowFeatures = 'width=600,height=800,resizable,scrollbars';
          window.open(url, '_blank', windowFeatures);
          next();
        } else {
          message.error('Please validate your data.');
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error('Please validate your data.');
      });
  };
  const submitApplication = (values) => {
    form
      .validateFields()
      .then(() => {
        createApplicationHandler(values);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const submitInvoice = (values) => {
    createInvoiceHandler(values);
  };
  const done = () => {
    navigate('/');
  };

  return (
    <>
      <ContainerStyle>
        <MainStyle>
          <div className="left-container">
            <div className="left-main">
              <h1 className="left-heading">
                Step {state.current + 1}:
                <br />
                {state.current === 0 ? (
                  <>
                    name & <br /> contact
                  </>
                ) : state.current === 1 ? (
                  'ADDRESS'
                ) : state.current === 2 ? (
                  <>
                    ID <br /> Verification
                  </>
                ) : state.current === 3 ? (
                  'Review'
                ) : (
                  'Payment'
                )}
              </h1>
            </div>
          </div>
          <div className="right-container">
            <div className="right-main">
              <Row justify="center">
                <Col xxl={20} xl={20} md={22} sm={18} xs={24}>
                  <RightBlockStyle>
                    <div className="main">
                      <div className="ninjadash-authentication-top">
                        <WizardWrapper className="ninjadash-wizard-page">
                          <Steps
                            loading={loading}
                            form={form}
                            isswitch
                            current={state.current}
                            status={status}
                            steps={[
                              {
                                title: t('Name & Contact'),
                                content: (
                                  <NameContact form={form} setData={setData} countries={countries} next={next} />
                                ),
                              },
                              {
                                title: t('Address'),
                                content: (
                                  <Address
                                    form={form}
                                    setData={setData}
                                    countries={countries}
                                    data={data}
                                    next={next}
                                  />
                                ),
                              },
                              {
                                title: t('Identity'),
                                content: (
                                  <BasicFormWrapper>
                                    <Identity form={form} setData={setData} data={data} next={next} />
                                  </BasicFormWrapper>
                                ),
                              },
                              {
                                title: t('Review'),
                                content: (
                                  <ReviewWrapper>
                                    <Review
                                      form={form}
                                      state={state}
                                      countries={countries}
                                      setState={setState}
                                      setData={setData}
                                      data={data}
                                    />
                                  </ReviewWrapper>
                                ),
                              },
                              {
                                title: t('Payment'),
                                content: (
                                  <BasicFormWrapper className="basic-form-inner">
                                    <Payment
                                      paymentType={paymentType}
                                      setPaymentType={setPaymentType}
                                      isResident={isResident}
                                      setIsResident={setIsResident}
                                      form={form}
                                      setData={setData}
                                    />
                                  </BasicFormWrapper>
                                ),
                              },
                              {
                                title: t('Summary'),
                                content: (
                                  <ReviewWrapper>
                                    <Summary bitfinexUrl={bitfinexUrl} />
                                  </ReviewWrapper>
                                ),
                              },
                            ]}
                            onNext={next}
                            onPrev={prev}
                            onSubmitApplication={submitApplication}
                            onSubmitInvoice={submitInvoice}
                            onDone={done}
                            isfinished={isFinished}
                          />
                          <div className="terms-condition-block">
                            <Link to="/terms" target="_blank">
                              Terms & Conditions
                            </Link>
                          </div>
                        </WizardWrapper>
                      </div>
                    </div>
                  </RightBlockStyle>
                </Col>
              </Row>
            </div>
          </div>
        </MainStyle>
        <div className="bottom" />
        <PoweredBy />
      </ContainerStyle>
    </>
  );
}

export default Wizards;
