import { Locale } from '@/i18n.config'
import { ENGLISH_FORM_ID, POLISH_FORM_ID } from './newsletter.constants'
import { NewsletterStates } from './newsletter.types'

export function getFormURL(lang: Locale) {
  return `https://app.convertkit.com/forms/${
    lang === 'pl' ? POLISH_FORM_ID : ENGLISH_FORM_ID
  }/subscriptions`
}

export function mapStateToCalloutVariant(state: NewsletterStates) {
  switch (state) {
    case 'success':
      return 'success'
    case 'quarantined':
      return 'warning'
    case 'error':
      return 'danger'
    default:
      return 'info'
  }
}
