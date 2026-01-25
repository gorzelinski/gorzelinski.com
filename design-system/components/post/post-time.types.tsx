import { Locale } from '@/i18n.config'
import { Dictionary } from '@/scripts'

export type PostTimeProps = {
  date: Date
  readingTime: {
    minutes: number
  }
  lang: Locale
  dictionary: Dictionary['component']['post']
}
