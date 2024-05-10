import { useEffect, useState } from 'react'
import {
  Theme,
  THEME_LS_KEY,
  THEME_OS_MEDIA,
  setToLS,
  getThemeAttribute,
  setThemeAttribute
} from '@/lib'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  const saveTheme = (theme: Theme) => {
    setTheme(theme)
    setThemeAttribute(theme)
    setToLS(THEME_LS_KEY, theme)
  }

  const toggleTheme = (theme: Theme): void =>
    theme === 'light' ? saveTheme('dark') : saveTheme('light')

  useEffect(() => {
    const savedTheme = getThemeAttribute()
    setTheme(savedTheme)

    const listenOsThemeChange = (event: MediaQueryListEvent) => {
      saveTheme(event.matches ? 'light' : 'dark')
    }

    const mediaQueryList = window.matchMedia(THEME_OS_MEDIA)
    mediaQueryList.addEventListener('change', listenOsThemeChange)
    return () => {
      mediaQueryList.removeEventListener('change', listenOsThemeChange)
    }
  }, [theme])

  return { theme, toggleTheme }
}
