import { Spin } from 'antd'
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const AboutUs = lazy(() => import('../container/pages/CompanyPolicy/AboutUs'))
const FAQs = lazy(() => import('../container/pages/CompanyPolicy/FAQs'))
const ContactUs = lazy(() => import('../container/pages/CompanyPolicy/ContactUs'))
const TermsConditions = lazy(() => import('../container/pages/CompanyPolicy/TermsConditions'))
const LandingRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route path="faqs" element={<FAQs />} />
        <Route path="terms" element={<TermsConditions />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </Suspense>
  )
}
export default LandingRoutes
