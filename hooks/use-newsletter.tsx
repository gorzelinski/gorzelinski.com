import type { Locale, NewsletterState } from '@/types'
import { useActionState, useEffect } from 'react'
import { getFormURL } from '@/lib'

const initialState: NewsletterState = { status: 'idle' }

export function useNewsletter(lang: Locale) {
  const [state, formAction, isPending] = useActionState(subscribe, initialState)
  const FORM_URL = getFormURL(lang)

  useEffect(() => {
    if (state.status === 'quarantined' && state.url) {
      window.open(state.url, '_blank', 'noopener,popup,height=512,width=512')
    }
  }, [state])

  async function subscribe(
    _prevState: NewsletterState,
    formData: FormData
  ): Promise<NewsletterState> {
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: formData,
        headers: {
          accept: 'application/json'
        }
      })

      const json = await response.json()

      if (json.status === 'quarantined') {
        return { status: 'quarantined', url: json.url }
      }

      if (json.status === 'success') {
        return { status: 'success' }
      }

      return { status: 'error' }
    } catch {
      return { status: 'error' }
    }
  }

  return { state, formAction, isPending, FORM_URL }
}
