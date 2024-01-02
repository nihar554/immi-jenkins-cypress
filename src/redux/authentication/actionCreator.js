import Cookies from 'js-cookie';
import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/login', values);
      if (response?.status === 200) {
        Cookies.set('access_token', response.data.token);
        Cookies.set('logedIn', true);
        Cookies.set('role', response.data.user.role);
        Cookies.set('user', response.data.user);
        dispatch(loginSuccess(response.data, true));
        message.success('You are Signed In');
        callback(true);
      } else if (response.data.errors.msg === 'USER_EMAIL_IS_NOT_VERIFIED') {
        Cookies.set('user_data', { email: values.email });
        dispatch(loginSuccess({ user: { email: values.email } }, false));
        message.error('Email is not verified. Please veried it.');
        callback(false);
      } else {
        dispatch(loginErr(response.data.errors, false));
        message.error('Invalid Credentials');
      }
    } catch (err) {
      dispatch(loginErr(err));
      message.error('Invalid Credentials');
    }
  };
};

const register = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/register', values);
      if (response.status === 201) {
        dispatch(loginSuccess(response.data, false));
        Cookies.set('user_data', response.data.user);
        message.success('Please verify your email');
        callback();
      } else if (response.data.errors.msg === 'Invalid CAPTCHA') {
        dispatch(loginErr('Please verify the reCAPTCHA'));
        message.error('Please verify the reCAPTCHA');
      } else if (response.data.errors.msg === 'USER_ALREADY_EXISTS') {
        dispatch(loginErr('User is already registered'));
        message.error('User is already registered');
      } else {
        dispatch(loginErr('Registration failed!'));
        message.error('Registration failed!');
      }
    } catch (err) {
      dispatch(loginErr(err));
      message.error(err?.response?.data?.errors.msg);
    }
  };
};

const verifyOTP = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/verifyOTP', values);
      if (response.data.success) {
        message.success('OTP Verified!');
        dispatch(loginSuccess('OTP Verified!', false));
        callback();
      } else {
        message.error('Invalid OTP');
        dispatch(loginErr('Invalid OTP'));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      Cookies.remove('logedIn');
      Cookies.remove('access_token');
      dispatch(logoutSuccess(false));
      message.success('You are Signed Out!');
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut, register, verifyOTP };
