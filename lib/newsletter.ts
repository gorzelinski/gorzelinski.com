import { Locale } from '@/i18n.config'
import { ENGLISH_FORM_ID, POLISH_FORM_ID } from '@/constants'

export function getFormURL(lang: Locale) {
  return `https://app.convertkit.com/forms/${
    lang === 'pl' ? POLISH_FORM_ID : ENGLISH_FORM_ID
  }/subscriptions`
}
