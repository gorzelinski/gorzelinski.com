export type NewsletterStatus = 'idle' | 'success' | 'quarantined' | 'error'

export type NewsletterState = {
  status: NewsletterStatus
  url?: string
}
