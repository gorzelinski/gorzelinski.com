import { Locale } from '@/i18n.config'

export function formatDate(date: Date, locale: Locale) {
  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
