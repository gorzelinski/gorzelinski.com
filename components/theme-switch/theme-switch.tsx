'use client'
import { ThemeSwitchProps } from './theme-switch.types'
import { useTheme } from '@/hooks'
import { Button } from '../button'
import { Moon, Sunny } from '../icon'

export const ThemeSwitch = ({ ariaLabel }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      style="icon"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => toggleTheme(theme)}
    >
      {theme === 'light' ? <Sunny></Sunny> : <Moon></Moon>}
    </Button>
  )
}
