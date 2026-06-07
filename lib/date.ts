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

export function compareDates(
  a: Date,
  b: Date,
  direction: 'asc' | 'desc' = 'desc'
): number {
  const timeA = new Date(a).getTime()
  const timeB = new Date(b).getTime()

  if (direction === 'asc') {
    return timeA - timeB
  }

  return timeB - timeA
}
