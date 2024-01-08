import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LandingPage } from './Style'
import Board from './Board/Board'
import Citizen from './Citizen/Citizen'
// import BitcoinFrontier from './BitcoinFrontier/BitcoinFrontier';
import BuildFuture from './BuildFuture/BuildFuture'
import LandingHeader from './Header'
import LandingFooter from './Footer'
import FaqsSection from './Faqs/FaqsSection'
import BitcoinFrontierNewVersion from './BitcoinFrontier/BitcoinFrontierNewVersion'

export default function Landing() {
  const location = useLocation()
  // const searchParams = new URLSearchParams(location.search);
  const section = location.hash
  useEffect(() => {
    // Use the 'section' parameter in your logic
    if (section) {
      const element = document.getElementById('section2')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [section])

  return (
    <LandingPage>
      <LandingHeader />
      <div>
        <Board />
        <div id="section2">
          <Citizen />
        </div>
        {/* <BitcoinFrontier /> */}
        <BitcoinFrontierNewVersion />
        <FaqsSection />
        <BuildFuture />
      </div>
      <LandingFooter />
    </LandingPage>
  )
}
