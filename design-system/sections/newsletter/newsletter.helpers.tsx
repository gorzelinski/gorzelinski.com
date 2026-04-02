import type { Dictionary, NewsletterStatus } from '@/types'

type Validation = Dictionary['section']['newsletter']['validation']

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

export function setValidationMessage(
  input: HTMLInputElement,
  validation: Validation
) {
  input.setCustomValidity('')

  if (input.validity.valueMissing) {
    input.setCustomValidity(validation.valueMissing)
  } else if (input.validity.typeMismatch) {
    input.setCustomValidity(validation.typeMismatch)
  }
}
