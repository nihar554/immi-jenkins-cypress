import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingRoutes from './landing-route'
// import FAQs from '../container/pages/CompanyPolicy/FAQs';
// import TermsConditions from '../container/pages/CompanyPolicy/TermsConditions';
import AuthLayout from '../container/profile/authentication/Index'
// import LandingPage from '../container/pages/Landing/Landing';
import OtpVerify from '../container/profile/authentication/overview/OtpVerify'
import ResetPassword from '../container/profile/authentication/overview/ResetPassword'
import UseLaptop from '../container/pages/UseLaptop.js/UseLaptop'
// import ContactUs from '../container/pages/CompanyPolicy/ContactUs';
// import Login from '../container/profile/authentication/overview/Login';

const Login = lazy(() => import('../container/profile/authentication/overview/SignIn'))
const SignUp = lazy(() => import('../container/profile/authentication/overview/Signup'))
const ForgotPass = lazy(() => import('../container/profile/authentication/overview/ForgotPassword'))
// const AboutUs = lazy(() => import('../container/pages/CompanyPolicy/AboutUs'));
const BgImg = lazy(() => import('../container/pages/BgImg'))

// const AuthRoot = () => {
//   const navigate = useNavigate();

//   useEffect(() => navigate('/'));
// };

const FrontendRoutes = React.memo(() => {
  return (
    <Routes>
      {/* <Route index element={<LandingPage />} />; */}
      <Route path="verify-otp" element={<OtpVerify />} />
      {window.innerWidth >= 600 ? (
        <Route path="login" element={<Login />} />
      ) : (
        <Route path="login" element={<UseLaptop />} />
      )}
      <Route path="forgot-password" element={<ForgotPass />} />
      <Route path="reset-password" element={<ResetPassword />} />
      {window.innerWidth >= 600 ? (
        <Route path="register" element={<SignUp />} />
      ) : (
        <Route path="register" element={<UseLaptop />} />
      )}
      {/* <Route path="*" element={<AuthRoot />} /> */}
      <Route path="/*" element={<LandingRoutes />} />
      {/* <Route path="faqs" element={<FAQs />} />
      <Route path="terms" element={<TermsConditions />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} /> */}
      <Route path="bg-img" element={<BgImg />} />
    </Routes>
  )
})

export default AuthLayout(FrontendRoutes)
