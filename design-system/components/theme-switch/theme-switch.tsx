'use client'
import { ThemeSwitchProps } from './theme-switch.types'
import { useTheme } from '@/hooks'
import { Button } from '../../elements'
import { Moon, Sunny } from '../../elements'

export const ThemeSwitch = ({ ariaLabel }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="icon"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => toggleTheme(theme)}
    >
      {theme === 'light' ? (
        <Sunny data-testid="sunny" />
      ) : (
        <Moon data-testid="moon" />
      )}
    </Button>
  )
}
