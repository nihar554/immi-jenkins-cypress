import Cookies from 'js-cookie'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { DataService } from './dataService'
import useAnalyticsEventTracker from './GoogleAnalyticsService'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
const appId = process.env.REACT_APP_FIREBASE_APPID
const measurementId = process.env.REACT_APP_FIREBASE_MEASUREMENTID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
}
initializeApp(firebaseConfig)
// const firebaseAuth = getAuth();

const gaClickSignUpEvent = useAnalyticsEventTracker('Signup', 'Clicked signup button', 'Clicked', '/signup')

async function signUp(dataToSend) {
  // eslint-disable-next-line no-useless-catch
  try {
    gaClickSignUpEvent()
    const response = await DataService.post('/register', dataToSend)
    return response.data
  } catch (error) {
    throw error
  }
}
const gaClickLoginEvent = useAnalyticsEventTracker('Login', 'Clicked on login button', 'Clicked', '/login')

async function login(dataToSend) {
  // eslint-disable-next-line no-useless-catch
  try {
    gaClickLoginEvent()
    const response = await DataService.post('/login', dataToSend)
    return response.data
  } catch (error) {
    throw error
  }
}

async function verifyOTP(dataToSend) {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await DataService.post('/verifyOTP', dataToSend)
    return response.data
  } catch (error) {
    throw error
  }
}

export const authServices = {
  signUp,
  login,
  verifyOTP,
}

const gaClickSignUpWithGoogleEvent = useAnalyticsEventTracker(
  'SignUp with google',
  'Clicked on SignUp with Google button',
  'Clicked',
  '/signUp',
)

export const signUpGoogle = async () => {
  gaClickSignUpWithGoogleEvent()
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    display: 'popup',
  })
  const auth = getAuth()
  const signUpGo = await signInWithPopup(auth, provider)
    .then((result) => {
      const { user } = result
      return {
        success: true,
        token: user.accessToken,
        // eslint-disable-next-line no-underscore-dangle
        firstName: result._tokenResponse.firstName,
        // eslint-disable-next-line no-underscore-dangle
        lastName: result._tokenResponse.lastName,
      }
    })
    .catch((error) => {
      GoogleAuthProvider.credentialFromError(error)
      return { success: false, message: 'Something went Wrong' }
    })

  if (signUpGo.success === true) {
    const body = {
      token: signUpGo.token,
      firstName: signUpGo.firstName,
      lastName: signUpGo.lastName,
      role: 'User',
    }
    const result = await DataService.post('/register/google/', body)
      .then((res) => {
        const result1 = {
          status: true,
          message: 'Login Successfully!',
        }
        Cookies.set('userInfo', res.data.user)
        Cookies.set('access_token', res.data.token)
        Cookies.set('logedIn', true)
        return result1
      })
      .catch((error) => {
        if (error.response.data.errors.msg === 'USER_ALREADY_EXISTS') {
          return {
            status: true,
            message: 'Login Successfully!',
          }
        }
        return {
          status: false,
          message: error.response.data.errors.msg,
        }
      })
    return result
  }
  return {
    status: false,
    message: 'Something went Wrong',
  }
}

const gaClickSignInWithGoogleEvent = useAnalyticsEventTracker(
  'SignIn with google',
  'Clicked on SignIn with Google button',
  'Clicked',
  '/login',
)

export const signInGoogle = async () => {
  gaClickSignInWithGoogleEvent()
  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    display: 'popup',
  })
  const auth = getAuth()
  const signIn = await signInWithPopup(auth, provider)
    .then((result) => {
      const { user } = result
      return {
        success: true,
        token: user.accessToken,
        // eslint-disable-next-line no-underscore-dangle
        firstName: result._tokenResponse.firstName,
        // eslint-disable-next-line no-underscore-dangle
        lastName: result._tokenResponse.lastName,
      }
    })
    .catch((error) => {
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.log(credential)
      return { success: false }
    })

  if (signIn.success === true) {
    const body = {
      token: signIn.token,
    }
    const result = await DataService.post('/login/google', body)
      .then((res) => {
        const result1 = {
          status: true,
          message: 'Login Successfully!',
        }
        Cookies.set('userInfo', res.data.user)
        Cookies.set('access_token', res.data.token)
        Cookies.set('logedIn', true)
        return result1
      })
      .catch((error) => {
        return {
          status: false,
          message: error.response.data.errors.msg,
        }
      })
    return result
  }
  return {
    status: false,
    message: 'Something went Wrong',
  }
}
