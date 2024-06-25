import { useState } from 'react'
import { Locale } from '@/i18n.config'
import { ENGLISH_FORM_ID, POLISH_FORM_ID } from './newsletter.constants'
import { NewsletterStates } from './newsletter.types'

export function getFormURL(lang: Locale) {
  return `https://app.convertkit.com/forms/${
    lang === 'pl' ? POLISH_FORM_ID : ENGLISH_FORM_ID
  }/subscriptions`
}

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

export function useNewsletter(lang: Locale) {
  const [state, setState] = useState<NewsletterStates>('idle')
  const FORM_URL = getFormURL(lang)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setState('loading')

    const data = new FormData(e.currentTarget)

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json'
        }
      })

      const json = await response.json()

      if (json.status === 'quarantined') {
        setState('quarantined')

        window.open(json.url, '_blank', 'noopener,popup,height=512,width=512')

        return
      }

      if (json.status === 'success') {
        setState('success')

        return
      }

      setState('error')
    } catch (error) {
      setState('error')
    }
  }

  return { state, setState, handleSubmit, FORM_URL }
}
