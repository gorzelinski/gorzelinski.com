'use client'
import { ThemeSwitchProps } from './theme-switch.types'
import { Button } from '../button'
import { Moon, Sunny } from '../icon'
import { useTheme } from '@/hooks'

export const ThemeSwitch = ({ ariaLabel }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      style="icon"
      size="l"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => toggleTheme(theme)}
    >
      {theme === 'light' ? <Sunny></Sunny> : <Moon></Moon>}
    </Button>
  )
}
