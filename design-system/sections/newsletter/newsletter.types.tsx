import type { Dictionary, Locale } from '@/types'

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
