import { Locale } from '@/i18n.config'
import { ReadTimeResults } from 'reading-time'

export function formatDate(date: Date, locale: Locale) {
  return new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

export function formatReadingTime(minutes: ReadTimeResults['minutes']) {
  return Math.ceil(minutes)
}
