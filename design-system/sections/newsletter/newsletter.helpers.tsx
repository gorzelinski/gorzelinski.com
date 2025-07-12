import { NewsletterStates } from './newsletter.types'

export function mapStateToCalloutVariant(state: NewsletterStates) {
  switch (state) {
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
