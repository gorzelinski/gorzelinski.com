import type { Locale } from '@/types'
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
