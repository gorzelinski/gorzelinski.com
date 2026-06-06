'use client'
import type { BottomBarProps } from './bottom-bar.types'
import { isNavbarHidden } from '@/lib'
import { useScroll } from '@/providers'
import { MainNavigation } from '../../components'
import { navbar } from '../../elements/navbar'

export const BottomBar = ({ lang, dictionary }: BottomBarProps) => {
  const { links, component } = dictionary
  const { direction, progress } = useScroll()
  const isHidden = isNavbarHidden(direction, progress)

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
