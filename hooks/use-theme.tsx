import { useEffect, useState } from 'react'
import { Theme } from '@/types'
import { THEME } from '@/constants'
import { getThemeCookie, setThemeAttribute, setThemeCookie } from '@/lib'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  const saveTheme = (theme: Theme) => {
    setTheme(theme)
    setThemeAttribute(theme)
    setThemeCookie(theme)
  }

  const toggleTheme = (theme: Theme): void =>
    theme === 'light' ? saveTheme('dark') : saveTheme('light')

  useEffect(() => {
    const savedTheme = getThemeCookie()
    setTheme(savedTheme)

    const listenOsThemeChange = (event: MediaQueryListEvent) => {
      saveTheme(event.matches ? 'light' : 'dark')
    }

    const mediaQueryList = window.matchMedia(THEME.osMedia)
    mediaQueryList.addEventListener('change', listenOsThemeChange)
    return () => {
      mediaQueryList.removeEventListener('change', listenOsThemeChange)
    }
  }, [])

  return { theme, toggleTheme }
}
