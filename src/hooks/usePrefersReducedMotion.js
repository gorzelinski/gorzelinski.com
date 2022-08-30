import { useState, useEffect } from "react"

export const usePrefersReducedMotion = () => {
  const [hasReducedMotionPreference, setHasReducedMotionPreference] =
    useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)")
    const initialPreference = mediaQueryList.matches
    setHasReducedMotionPreference(initialPreference)

    const listener = event => {
      setHasReducedMotionPreference(event.matches)
    }
    mediaQueryList.addEventListener("change", listener)
    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [])

  return hasReducedMotionPreference
}
