import React, { useState } from 'react';
import { Upload, message } from 'antd';
import PropTypes from 'prop-types';
import UilCamera from '@iconscout/react-unicons/icons/uil-camera';
// import UilSetting from '@iconscout/react-unicons/icons/uil-setting';
// import UilBell from '@iconscout/react-unicons/icons/uil-bell';
// import UilUser from '@iconscout/react-unicons/icons/uil-user';
// import UilUsersAlt from '@iconscout/react-unicons/icons/uil-users-alt';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ProfileAuthorBox } from './style';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { DataService } from '../../../../config/dataService/dataService';

function AuthorBox({ state, setState }) {
  const initialSrc = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png';
  const [src, setSrc] = useState('');

  const { t } = useTranslation();

  const handleUpload = async (event) => {
    const reader = new FileReader();
    const { file, onSuccess, onError } = event;
    try {
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setSrc(base64Data);
        const dataToSend = { profilepic: base64Data };
        DataService.patch('/profile', dataToSend)
          .then(() => {
            message.success(`${file.name} file uploaded successfully`);
            setState((prev) => {
              return { ...prev, ...{ profilePic: base64Data, profilepicName: file } };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
      onSuccess('Ok');
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Custom request error:', error);
      onError(error);
    }
  };

  const handleImageErr = () => {
    console.log('Calllled');
    setSrc(initialSrc);
  };

  return (
    <ProfileAuthorBox>
      <Cards headless>
        <div className="author-info">
          <figure>
            <img
              style={{ borderRadius: '80px' }}
              height={120}
              width={120}
              onError={handleImageErr}
              src={src || (state?.profilepic ? state.profilepic : initialSrc)}
              alt="profilepic"
            />
            <Upload showUploadList={false} customRequest={handleUpload} maxCount={1} accept=".jpg, .jpeg, .png, .pdf">
              <Link to="#">
                <UilCamera />
              </Link>
            </Upload>
          </figure>
          <figcaption>
            <div className="info">
              <Heading as="h4">{state?.firstName}</Heading>
              <p>{state?.userName ? state?.userName : ''}</p>
            </div>
          </figcaption>
        </div>
        <nav className="settings-menmulist">
          <ul>
            {/* <li>
              <NavLink to="profile">
                <UilUser />
                {t('Edit Profile')}
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="account">
                <UilSetting />
                Account Settings
              </NavLink>
            </li> */}
            <li>
              <NavLink to="password">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-key"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                {t('Change Password')}
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="social">
                <UilUsersAlt />
                Social Profile
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="notification">
                <UilBell />
                {t('Notification')}
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </Cards>
    </ProfileAuthorBox>
  );
}

AuthorBox.propTypes = {
  setState: PropTypes.func,
  state: PropTypes.object,
};

export default AuthorBox;
