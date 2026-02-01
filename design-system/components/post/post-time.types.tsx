import type { Dictionary, Locale } from '@/types'

export type PostTimeProps = {
  date: Date
  readingTime: {
    minutes: number
  }
  lang: Locale
  dictionary: Dictionary['component']['post']
}
