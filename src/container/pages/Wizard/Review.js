import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Select, Upload, message } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ReviewWrapper } from '../style';
import ChooseFileIcon from '../../../static/img/icon/ChooseFileIcon';
import { validImageTypes } from '../../../utility/utility';

function Review(props) {
  const { form, countries, data, setData } = props;
  const [errorMsg, setErrorMsg] = useState('');
  const [passportMsg, setPassportMsg] = useState('');
  const { t } = useTranslation();
  const { Option } = Select;

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length === 0) {
      return null;
    }
    return e && e.fileList;
  };

  const customRequest = async (event, id) => {
    const reader = new FileReader();
    const { file, onSuccess, onError } = event;
    try {
      if (!validImageTypes(file)) {
        message.error('Select only JPG or PNG image');
        onError('Select only JPG or PNG image');
        return false;
      }
      reader.onload = (e) => {
        const base64Data = e.target.result;
        if (id === 'proof_of_res') {
          if (file.size <= process.env.REACT_APP_FILE_SIZE_LIMIT) {
            setData((prev) => {
              return { ...prev, ...{ proof_of_res_data: base64Data, proof_of_res_url: file } };
            });
            onSuccess();
            setErrorMsg('');
          } else {
            onError(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
            form.setFieldsValue({
              proof_of_res_data: undefined,
            });
            setErrorMsg(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
          }
        }

        if (id === 'passport') {
          if (file.size <= process.env.REACT_APP_FILE_SIZE_LIMIT) {
            setData((prev) => {
              return { ...prev, ...{ passport: base64Data, passport_url: file } };
            });
            onSuccess();
            setPassportMsg('');
          } else {
            onError(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
            form.setFieldsValue({
              passport: undefined,
            });
            setPassportMsg(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
          }
        }
      };
      onSuccess();

      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Custom request error:', error);
      onError(error);
    }
  };

  const handleFileChange = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length === 0) {
      return null;
    }
    return e && e.fileList;
  };

  return (
    <ReviewWrapper>
      <h5 className="warning">Before submitting, please review the details carefully to confirm they are correct.</h5>
      <h3 className="title-first">Name (as appear on Passport) & Contact details</h3>
      <Form layout="vertical" form={form}>
        <div className="input-wrapper">
          <Form.Item
            className="form-item"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'Please Input Your First Name',
              },
            ]}
          >
            <Input placeholder={t('Enter Your First Name')} />
          </Form.Item>
          <Form.Item className="form-item" name="middle_name">
            <Input placeholder={t('Enter Your Middle Name')} />
          </Form.Item>
        </div>
        <div className="input-wrapper">
          <Form.Item
            className="form-item"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Please Input Your Last Name',
              },
            ]}
          >
            <Input placeholder={t('Enter Your Last Name')} />
          </Form.Item>
          <Form.Item
            name="dob"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please Select Your Date of Birth',
              },
            ]}
          >
            <DatePicker
              placeholder="YYYY-MM-DD"
              className="form-item"
              // onChange={handleChange}
              // className="material-input"
              format="YYYY-MM-DD"
              disabledDate={(current) => {
                const customDate = moment().format('YYYY-MM-DD');
                return current && current >= moment(customDate, 'YYYY-MM-DD');
              }}
            />
          </Form.Item>
        </div>
        <div className="input-wrapper">
          <Form.Item
            name="nationality"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please Select Your Nationality',
              },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Please select your country"
              // onChange={onChangeSearch}
              // onSearch={onSearch}
              // filterOption={filterOption}
              options={countries}
            />
          </Form.Item>
          <Form.Item
            name="gender"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please Select Your Gender',
              },
            ]}
          >
            <Select style={{ width: '100%' }} placeholder="Please select your gender">
              <Option value="">{t('Select one')}</Option>
              <Option value="Male">{t('Male')}</Option>
              <Option value="Female">{t('Female')}</Option>
            </Select>
          </Form.Item>
        </div>
        <h3 className="title-first">Contact Information</h3>
        <div className="input-wrapper">
          <Form.Item
            className="form-item"
            name="phone_country_code"
            rules={[
              {
                required: true,
                message: 'Please Enter Your Country Code',
              },
            ]}
          >
            <Input placeholder={t('91')} />
          </Form.Item>
          <Form.Item
            name="phone"
            className="form-item"
            rules={[
              {
                required: true,
                message: 'Please Enter Your Phone Number',
              },
            ]}
          >
            <Input placeholder={t('Enter your mobile number')} />
          </Form.Item>
        </div>
        <Form.Item name="email" className="form-item">
          <Input placeholder={t('Enter Your Email Address')} disabled />
        </Form.Item>
        <h3 className="title-first">Address information</h3>
        <div className="input-wrapper">
          <Form.Item
            className="form-item"
            name="resid_building_name"
            rules={[
              {
                required: true,
                message: 'Please Input Building Name / Number',
              },
            ]}
          >
            <Input placeholder={t('Enter Your Building Name / Number')} />
          </Form.Item>
          <Form.Item
            className="form-item"
            name="resid_street"
            rules={[
              {
                required: true,
                message: 'Please Input Your Street Name',
              },
            ]}
          >
            <Input placeholder={t('Enter Your Street Name')} />
          </Form.Item>
        </div>
        <div className="input-wrapper">
          <Form.Item
            className="form-item"
            name="resid_city"
            rules={[
              {
                required: true,
                message: 'Please Input Your City Name',
              },
            ]}
          >
            <Input placeholder={t('Enter Your City Name')} />
          </Form.Item>
          <Form.Item
            className="form-item"
            name="resid_zipcode"
            rules={[
              {
                required: true,
                message: 'Please Input Your Area Name',
              },
            ]}
          >
            <Input placeholder={t('Enter Your Area Code')} />
          </Form.Item>
        </div>
        <div className="input-wrapper">
          <Form.Item className="form-item" name="resid_state">
            <Input placeholder={t('Enter Your State')} />
          </Form.Item>
          <Form.Item
            className="form-item"
            name="resid_country"
            rules={[
              {
                required: true,
                message: 'Please Select Your Country Name',
              },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Please select your country"
              // onChange={onChangeSearch}
              // onSearch={onSearch}
              // filterOption={filterOption}
              options={countries}
            />
          </Form.Item>
        </div>
        <h3 className="title-first">ID Verification</h3>
        <div className="verification-block">
          <div className="proof-block">
            {data?.proof_of_res_data ? (
              <img alt="proof_if_res" className="img-container" src={data?.proof_of_res_data} />
            ) : (
              <></>
            )}
            <Form.Item
              name="proof_of_res"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: 'Please Upload Proof of Residence',
                },
              ]}
            >
              <Upload
                listType="picture"
                accept=".jpg,.jpeg,.png,.pdf"
                customRequest={(e) => customRequest(e, 'proof_of_res')}
                maxCount={1}
                onRemove={() =>
                  setData((prev) => {
                    return { ...prev, ...{ proof_of_res_data: '', proof_of_res_url: '' } };
                  })
                }
              >
                {data?.proof_of_res_data ? null : (
                  <Button className="passport-btn">
                    <ChooseFileIcon /> Choose File
                  </Button>
                )}
              </Upload>
            </Form.Item>
            {errorMsg && (
              <div className="error-msg">
                File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
              </div>
            )}
          </div>
          <div className="passport-block">
            {data?.passport ? <img alt="proof_if_res" className="img-container" src={data?.passport} /> : <></>}
            <Form.Item
              name="passport"
              valuePropName="fileList"
              getValueFromEvent={handleFileChange}
              rules={[
                {
                  required: true,
                  message: 'Please Choose Passport',
                },
              ]}
            >
              <Upload
                listType="picture"
                accept=".jpg,.jpeg,.png,.pdf"
                maxCount={1}
                customRequest={(e) => customRequest(e, 'passport')}
                onRemove={() =>
                  setData((prev) => {
                    return { ...prev, ...{ passport: '', passport_url: '' } };
                  })
                }
              >
                {data?.passport ? null : (
                  <Button className="passport-btn">
                    <ChooseFileIcon /> {t('Choose File')}
                  </Button>
                )}
              </Upload>
            </Form.Item>
            {passportMsg && (
              <div className="error-msg">
                File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
              </div>
            )}
          </div>
        </div>
      </Form>
    </ReviewWrapper>
  );
}

Review.propTypes = {
  form: PropTypes.object,
  countries: PropTypes.array,
  data: PropTypes.string,
  setData: PropTypes.func,
};

export default Review;
