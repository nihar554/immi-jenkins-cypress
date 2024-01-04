const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN
    }
  },

  loginSuccess: (data, login) => {
    return {
      type: actions.LOGIN_SUCCESS,
      value: data,
      isLogin: login
    }
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      value: '',
      isLogin: false,
      err
    }
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN
    }
  },

  logoutSuccess: (data) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data
    }
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err
    }
  }
}

export default actions
