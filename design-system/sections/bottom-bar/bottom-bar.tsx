'use client'
import type { BottomBarProps } from './bottom-bar.types'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { MainNavigation } from '../../components'
import { bottomBar } from './bottom-bar.styles'

export const BottomBar = ({ lang, dictionary }: BottomBarProps) => {
  const { links, component } = dictionary
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <div
      className={bottomBar({
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible'
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
