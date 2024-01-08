import Cookies from 'js-cookie'
import actions from './actions'

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR } = actions

const initState = {
  login: Cookies.get('logedIn'),
  loading: false,
  error: null,
  data: '',
}

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, value, err, isLogin } = action
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        login: false,
        data: '',
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: isLogin,
        data: value,
        loading: false,
      }
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      }
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: value,
        loading: false,
      }
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      }
    default:
      return state
  }
}
export default AuthReducer
