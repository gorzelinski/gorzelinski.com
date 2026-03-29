'use client'
import type { ThemeSwitchProps } from './theme-switch.types'
import { useTheme } from '@/hooks'
import { Button } from '../../elements'
import { Moon, Sunny } from '../../icons'

export const ThemeSwitch = ({ ariaLabel }: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <Button
      variant="icon"
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => toggleTheme(theme)}
      position="relative"
    >
      <Sunny
        data-testid="sunny"
        transition="crossfade"
        opacity={isLight ? '1' : '0'}
        scale={isLight ? '1' : '0.5'}
        filter={isLight ? 'blur(0px)' : 'blur(4px)'}
      />
      <Moon
        data-testid="moon"
        transition="crossfade"
        position="absolute"
        top="50%"
        left="50%"
        translate="-50% -50%"
        opacity={isLight ? '0' : '1'}
        scale={isLight ? '0.5' : '1'}
        filter={isLight ? 'blur(4px)' : 'blur(0px)'}
      />
    </Button>
  )
}
