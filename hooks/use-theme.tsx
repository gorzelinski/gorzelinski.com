import { useEffect, useState } from 'react'
import { THEME } from '@/constants'
import { Theme, setToLS, getThemeAttribute, setThemeAttribute } from '@/lib'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  const saveTheme = (theme: Theme) => {
    setTheme(theme)
    setThemeAttribute(theme)
    setToLS(THEME.lsKey, theme)
  }

  const toggleTheme = (theme: Theme): void =>
    theme === 'light' ? saveTheme('dark') : saveTheme('light')

  useEffect(() => {
    const savedTheme = getThemeAttribute()
    setTheme(savedTheme)

    const listenOsThemeChange = (event: MediaQueryListEvent) => {
      saveTheme(event.matches ? 'light' : 'dark')
    }

    const mediaQueryList = window.matchMedia(THEME.osMedia)
    mediaQueryList.addEventListener('change', listenOsThemeChange)
    return () => {
      mediaQueryList.removeEventListener('change', listenOsThemeChange)
    }
  }, [theme])

  return { theme, toggleTheme }
}
