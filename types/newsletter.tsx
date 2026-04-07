export type NewsletterState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error' }
  | { status: 'quarantined'; url: string }

export type NewsletterStatus = NewsletterState['status']
