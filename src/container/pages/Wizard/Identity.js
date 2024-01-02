import { useState } from 'react';
import { Button, Form, Upload, message } from 'antd';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Mark from '../../../static/img/icon/Mark';
import ChooseFileIcon from '../../../static/img/icon/ChooseFileIcon';
import { IdentityWrapper } from '../style';
import { Checkbox } from '../../../components/checkbox/checkbox';
import { validImageTypes } from '../../../utility/utility';

export default function Identity(props) {
  const [passportMsg, setPassportMsg] = useState('');
  // const [nationalFrontMsg, setNationalFrontMsg] = useState('');
  // const [nationalBackMsg, setNationalBackMsg] = useState('');
  const { form, setData, data, next } = props;
  const { t } = useTranslation();

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
        if (id === 'front') {
          // setData((prev) => {
          //   return { ...prev, ...{ identity_front_base64: base64Data, identity_front: file } };
          // });
          if (file.size <= process.env.REACT_APP_FILE_SIZE_LIMIT) {
            setData((prev) => {
              return { ...prev, ...{ identity_front_base64: base64Data, identity_front: file } };
            });
            onSuccess();
            // setNationalFrontMsg('');
          } else {
            onError(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
            form.setFieldsValue({
              identity_front: undefined,
            });
            // setNationalFrontMsg(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
          }
        }

        if (id === 'back') {
          // setData((prev) => {
          //   return { ...prev, ...{ identity_back_base64: base64Data, identity_back: file } };
          // });
          if (file.size <= process.env.REACT_APP_FILE_SIZE_LIMIT) {
            setData((prev) => {
              return { ...prev, ...{ identity_back_base64: base64Data, identity_back: file } };
            });
            onSuccess();
            // setNationalBackMsg('');
          } else {
            onError(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
            form.setFieldsValue({
              identity_back: undefined,
            });
            // setNationalBackMsg(`File size should be less than ${process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB`);
          }
        }

        if (id === 'selfie') {
          setData((prev) => {
            return { ...prev, ...{ photo_url: file, photo_data: base64Data } };
          });
        }

        if (id === 'passport') {
          // setData((prev) => {
          //   return { ...prev, ...{ passport: base64Data, passport_url: file } };
          // });
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
        // if (id === 'criminal') {
        //   setData((prev) => {
        //     return { ...prev, ...{ criminal: base64Data, criminal_url: file } };
        //   });
        // }
        // if (id === 'wealth') {
        //   setData((prev) => {
        //     return { ...prev, ...{ wealth: base64Data, wealth_url: file } };
        //   });
        // }
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
    <IdentityWrapper>
      <Form form={form} onFinish={next}>
        <h3 className="" style={{ marginTop: '-24px' }}>
          {t('Identity Documentation')}
        </h3>
        <p className="">
          {t(
            'To expedite your request, we strongly recommend including a passport. If the back of your national ID, drivers license, or other document is blank, please upload it as well.',
          )}
        </p>
        <section className="">
          <span className="required-container">
            <h2>{t('REQUIRED')}</h2>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('The document must be valid: please double check expiration date')}</span>
            </span>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('The document must be issued from a government')}</span>
            </span>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('The document must show a photo of your face')}</span>
            </span>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('The document must have a high resolution')}</span>
            </span>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('The document must be fully visible and not cropped or obscured')}</span>
            </span>
            <span className="required-block">
              <Mark />
              <span className="ml-2">{t('You need to upload both sides (front and back) for ID cards')}</span>
            </span>
          </span>
        </section>
        <section className="">
          <div className="required-container">
            <h3 className="">{t('Passport')}</h3>
            <div style={{ minHeight: '100px' }}>
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
                <div style={{ fontSize: '15px', marginTop: '-36px', color: '#ff0f0f' }}>
                  File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
                </div>
              )}
            </div>
          </div>
          {/* <div className="required-container">
            <h3 className="">{t('National ID')}</h3>
            <div>
              <Form.Item
                name="identity_front"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: true,
                    message: 'Please Choose ID Front View ',
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  accept=".jpg,.jpeg,.png,.pdf"
                  maxCount={1}
                  customRequest={(e) => customRequest(e, 'front')}
                  onRemove={() =>
                    setData((prev) => {
                      return { ...prev, ...{ identity_front: '', identity_front_base64: '' } };
                    })
                  }
                >
                  {data?.identity_front ? null : (
                    <Button className="passport-btn">
                      <ChooseFileIcon /> {t('Choose File Front View')}
                    </Button>
                  )}
                </Upload>
              </Form.Item>
              {nationalFrontMsg && (
                <div
                  style={{
                    fontSize: '15px',
                    marginTop: '-36px',
                    marginBottom: '40px',
                    color: '#ff0f0f',
                  }}
                >
                  File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
                </div>
              )}
              <Form.Item
                style={{ marginTop: '-32px' }}
                name="identity_back"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: true,
                    message: 'Please Choose ID Back View',
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  accept=".jpg,.jpeg,.png,.pdf"
                  customRequest={(e) => customRequest(e, 'back')}
                  maxCount={1}
                  onRemove={() =>
                    setData((prev) => {
                      return { ...prev, ...{ identity_back: '', identity_back_base64: '' } };
                    })
                  }
                >
                  {data?.identity_back ? null : (
                    <Button className="passport-btn">
                      <ChooseFileIcon /> {t('Choose File Back View')}
                    </Button>
                  )}
                </Upload>
              </Form.Item>
              {nationalBackMsg && (
                <div style={{ fontSize: '15px', marginTop: '-36px', color: '#ff0f0f' }}>
                  File size should be less than {process.env.REACT_APP_FILE_SIZE_LIMIT / 1048576} MB
                </div>
              )}
            </div>
          </div> */}
        </section>
        {/* <section className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="required-container" style={{ marginRight: '12px' }}>
            <h3 className="">{t('Criminal')}</h3>
            <div style={{ minHeight: '100px' }}>
              <Form.Item
                name="criminal"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: true,
                    message: 'Please Choose criminal',
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  accept=".jpg,.jpeg,.png,.pdf"
                  customRequest={(e) => customRequest(e, 'criminal')}
                  onRemove={() =>
                    setData((prev) => {
                      return { ...prev, ...{ criminal: '', criminal_url: '' } };
                    })
                  }
                >
                  {data?.criminal ? null : (
                    <Button className="passport-btn">
                      <ChooseFileIcon /> {t('Choose File')}
                    </Button>
                  )}
                </Upload>
              </Form.Item>
            </div>
          </div>
          <div className="required-container">
            <h3 className="">{t('Wealth')}</h3>
            <div>
              <Form.Item
                name="wealth"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: true,
                    message: 'Please Choose wealth ',
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  accept=".jpg,.jpeg,.png,.pdf"
                  customRequest={(e) => customRequest(e, 'wealth')}
                  onRemove={() =>
                    setData((prev) => {
                      return { ...prev, ...{ wealth: '', wealth_url: '' } };
                    })
                  }
                >
                  {data?.wealth ? null : (
                    <Button className="passport-btn">
                      <ChooseFileIcon /> {t('Choose File wealth')}
                    </Button>
                  )}
                </Upload>
              </Form.Item>
            </div>
          </div>
        </section> */}
        <section>
          <Form.Item
            name="termsAndConditon"
            required="true"
            rules={[
              {
                validator: async (_, checked) => {
                  if (!checked) {
                    return Promise.reject(new Error('Please accept the terms & conditions'));
                  }
                },
              },
            ]}
            valuePropName="checked"
          >
            <Checkbox name="termsAndConditon" checked={data?.termsAndConditon}>
              {t(
                "I've attached valid self-attested copies of identity and address documents. The identity docs are valid for at least six months, and the address proof is not older than three months. I confirm the account is for my exclusive use, and I declare all information is accurate. I authorize Government of El Salvador to verify and confirm it.",
              )}
            </Checkbox>
          </Form.Item>
        </section>
      </Form>
    </IdentityWrapper>
  );
}

Identity.propTypes = {
  setData: PropTypes.func,
  next: PropTypes.func,
  data: PropTypes.object,
  form: PropTypes.object,
};
