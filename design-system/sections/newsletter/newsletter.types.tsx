import { Locale } from '@/i18n.config'
import { Dictionary } from '@/scripts'

export type NewsletterProps = {
  dictionary: Dictionary['section']['newsletter']
  lang: Locale
}

export type NewsletterStates =
  | 'idle'
  | 'loading'
  | 'success'
  | 'quarantined'
  | 'error'
