'use client'
import type { BottomBarProps } from './bottom-bar.types'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { MainNavigation } from '../../components'
import { navbar } from '../../elements/navbar'

export const BottomBar = ({ lang, dictionary }: BottomBarProps) => {
  const { links, component } = dictionary
  const direction = useScrollDirection()
  const progress = useScrollProgress()
  const isHidden = progress > 5 && direction === 'down'

  return (
    <div
      inert={isHidden || undefined}
      className={navbar({
        position: 'bottom',
        opacity: isHidden ? 'hidden' : 'visible'
      })}
    >
      <MainNavigation
        ariaLabel={component.mainNavigation.ariaLabel}
        lang={lang}
        links={links}
        width="responsive"
      />
    </div>
  )
}
