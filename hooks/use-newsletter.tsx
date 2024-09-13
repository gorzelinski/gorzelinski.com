import { useState } from 'react'
import { Locale } from '@/i18n.config'
import { NewsletterStates } from '@/design-system/sections/newsletter/newsletter.types'
import { getFormURL } from '@/design-system/sections/newsletter/newsletter.helpers'

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

        return window.open(
          json.url,
          '_blank',
          'noopener,popup,height=512,width=512'
        )
      }

      if (json.status === 'success') {
        return setState('success')
      }

      setState('error')
    } catch (error) {
      setState('error')
    }
  }

  return { state, setState, handleSubmit, FORM_URL }
}
