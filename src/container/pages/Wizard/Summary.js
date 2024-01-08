import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { SummaryWrapper } from '../style'

export default function Summary(props) {
  const { bitfinexUrl } = props
  const { t } = useTranslation()
  return (
    <SummaryWrapper>
      <h3 className="">{t('You have submitted the Application.')}</h3>
      <p className="">
        {t('After completing the payment through ')}{' '}
        <a target="_blank" href={bitfinexUrl} rel="noreferrer">
          {t('this link')}
        </a>
        {t(' the application review process will begin.')}
      </p>
    </SummaryWrapper>
  )
}
Summary.propTypes = {
  bitfinexUrl: PropTypes.string,
}
