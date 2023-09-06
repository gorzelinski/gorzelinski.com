import { useState } from "react"
import { useLocalization } from "gatsby-theme-i18n"

export const useSubscribe = () => {
  const { locale } = useLocalization()
  const [state, setState] = useState("idle")
  const ENGLISH_FORM_ID = `3106682`
  const POLISH_FORM_ID = `3084916`
  const FORM_URL = `https://app.convertkit.com/forms/${
    locale === "pl" ? POLISH_FORM_ID : ENGLISH_FORM_ID
  }/subscriptions`

  const handleSubmit = async e => {
    e.preventDefault()
    setState("loading")
    const data = new FormData(e.target)

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      const json = await response.json()
      console.log(json)

      if (json.status === "quarantined") {
        try {
          window.open(json.url, "_blank", "noopener,popup,height=512,width=512")
          setState("quarantined")
        } catch (error) {
          setState("error")
        } finally {
          return
        }
      }

      if (json.status === "success") {
        setState("success")
        return
      }

      setState("error")
    } catch (error) {
      setState("error")
    }
  }

  return { state, setState, handleSubmit, FORM_URL }
}
