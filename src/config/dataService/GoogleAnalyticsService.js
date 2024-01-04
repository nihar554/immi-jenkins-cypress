import ReactGA from 'react-ga4'

const useAnalyticsEventTracker = (category, action, label, pagepath) => {
  const eventTracker = () => {
    try {
      if (pagepath) {
        ReactGA.send({ hitType: 'pageview', page: `${pagepath}` })
      }
      ReactGA.event({
        category,
        action,
        label
      })
      // console.log('category', category, 'action', action, 'label', label);
    } catch (err) {
      console.log(`REACT GA ERROR:${err.message}`)
    }
  }
  return eventTracker
}
export default useAnalyticsEventTracker
