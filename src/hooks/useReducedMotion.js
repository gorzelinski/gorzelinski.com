import { useState, useEffect } from "react"

export const useReducedMotion = () => {
  const [hasReducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)")
    const initialPreference = mediaQueryList.matches
    setReducedMotion(initialPreference)

    const listener = event => {
      setReducedMotion(event.matches)
    }

    mediaQueryList.addEventListener("change", listener)
    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [])

  return hasReducedMotion
}
