'use client'
import type { TopBarProps } from './top-bar.types'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { HelperNavigation, MainNavigation } from '../../components'
import { navbar } from '../../elements/navbar'

export const TopBar = ({ lang, dictionary }: TopBarProps) => {
  const { links, component, layout } = dictionary
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <header
      className={navbar({
        position: 'top',
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible',
        border: progress < 1 ? 'transparent' : 'bottom'
      })}
    >
      <HelperNavigation
        abbreviation={layout.root.metadata.abbreviation}
        ariaLabel={component.helperNavigation.ariaLabel}
        lang={lang}
        logoAriaLabel={layout.root.metadata.title}
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
