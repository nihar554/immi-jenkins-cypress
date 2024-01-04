import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import Settings from '../../container/profile/settings/Settings'
import Admin from '../../container/pages/admin/Admin'
import ApplicationDetails from '../../container/pages/ApplicationDetails/ApplicationDetails'
import TermsConditions from '../../container/pages/CompanyPolicy/TermsConditions'
import Landing from '../../container/pages/Landing/Landing'

const Dashboard = lazy(() => import('../../container/pages/Dashboard'))
const WizardPage = lazy(() => import('../../container/pages/Wizard/Wizard'))
const ChangeLogPage = lazy(() => import('../../container/pages/Changelog/Changelog'))
const AboutUs = lazy(() => import('../../container/pages/CompanyPolicy/AboutUs'))
const ContactUs = lazy(() => import('../../container/pages/CompanyPolicy/ContactUs'))
const FAQs = lazy(() => import('../../container/pages/CompanyPolicy/FAQs'))

function PagesRoute () {
  return (
    <Routes>
      {Cookies.get('role') === 'ADMIN' || Cookies.get('role') === 'Admin'
        ? (
        <>
          <Route index element={<Admin />} />
        </>
          )
        : (
        <Route index element={<Dashboard />} />
          )}
      <Route index element={<Dashboard />} />
      <Route path="starter" element={<Dashboard />} />
      <Route path="wizard" element={<WizardPage />} />
      <Route path="/*" element={<Settings />} />
      <Route path="admin" element={<Admin />} />
      <Route path="user-application-details" element={<ApplicationDetails />} />
      <Route path="terms" element={<TermsConditions />} />
      <Route path="/welcome" element={<Landing />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="faqs" element={<FAQs />} />
      <Route path="changelog" element={<ChangeLogPage />} />
    </Routes>
  )
}

export default PagesRoute
