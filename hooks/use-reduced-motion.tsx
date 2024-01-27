import { useState, useEffect } from 'react'

export function useReducedMotion(): boolean {
  const [hasReducedMotion, setReducedMotion] = useState<boolean>(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)')
    const initialPreference = mediaQueryList.matches
    setReducedMotion(initialPreference)

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    mediaQueryList.addEventListener('change', listener)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])

  return hasReducedMotion
}
