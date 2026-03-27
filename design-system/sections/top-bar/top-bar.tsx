'use client'
import type { TopBarProps } from './top-bar.types'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { HelperNavigation, MainNavigation } from '../../components'
import { topBar } from './top-bar.styles'

export const TopBar = ({ lang, dictionary }: TopBarProps) => {
  const { links, component, layout } = dictionary
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <header
      className={topBar({
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible',
        border: progress < 1 ? 'transparent' : 'bottom'
      })}
    >
      <HelperNavigation
        ariaLabel={component.helperNavigation.ariaLabel}
        lang={lang}
        title={layout.root.metadata.title}
        themeAriaLabel={component.themeSwitch.ariaLabel}
      />
      <MainNavigation
        ariaLabel={component.mainNavigation.ariaLabel}
        lang={lang}
        links={links}
        display="desktop"
      />
    </header>
  )
}
