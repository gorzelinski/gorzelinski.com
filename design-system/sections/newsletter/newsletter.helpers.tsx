import type { NewsletterStatus } from '@/types'

export function mapStatusToCalloutVariant(status: NewsletterStatus) {
  switch (status) {
    case 'success':
      return 'success'
    case 'quarantined':
      return 'warning'
    case 'error':
      return 'danger'
    default:
      return 'info'
  }
}
