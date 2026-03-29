'use client'
import type { TopBarProps } from './top-bar.types'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { HelperNavigation, MainNavigation } from '../../components'
import { navbar } from '../../elements/navbar'

export const TopBar = ({ lang, dictionary }: TopBarProps) => {
  const { links, component, layout } = dictionary
  const direction = useScrollDirection()
  const progress = useScrollProgress()
  const isHidden = progress > 5 && direction === 'down'

  return (
    <header
      inert={isHidden || undefined}
      className={navbar({
        position: 'top',
        opacity: isHidden ? 'hidden' : 'visible',
        border: progress < 1 ? 'transparent' : 'bottom'
      })}
    >
      <HelperNavigation
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
