import { ReadTimeResults } from 'reading-time'
import { Locale } from '@/i18n.config'

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
