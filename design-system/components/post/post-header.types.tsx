import type { Dictionary, Locale } from '@/types'
import type { ReadTimeResults } from 'reading-time'

export type PostHeaderProps = {
  lang: Locale
  slug: string
  date: Date
  updated: Date
  dictionary: Dictionary['component']['post']
  updatedLabel: string
  readingTime: ReadTimeResults
  title: string
  description: string
  image: {
    alt: string
    src: string
    caption?: string
  }
}
