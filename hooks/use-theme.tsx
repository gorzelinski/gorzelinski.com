import { useEffect, useState } from 'react'
import { setCookie, hasCookie } from 'cookies-next'
import { Theme } from '@/types'
import { COOKIES, THEME } from '@/constants'
import { getThemeAttribute, setThemeAttribute } from '@/lib'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  const saveTheme = (theme: Theme) => {
    setTheme(theme)
    setThemeAttribute(theme)
    setCookie(COOKIES.theme, theme, {
      sameSite: 'lax'
    })
  }

  const toggleTheme = (theme: Theme): void =>
    theme === 'light' ? saveTheme('dark') : saveTheme('light')

  useEffect(() => {
    const savedTheme = getThemeAttribute()
    setTheme(savedTheme)

    if (!hasCookie(COOKIES.theme)) {
      setCookie(COOKIES.theme, savedTheme, {
        sameSite: 'lax'
      })
    }

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
