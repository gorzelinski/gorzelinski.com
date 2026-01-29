import type { ReadTimeResults } from 'reading-time'
import type { Locale } from '@/types'

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
