'use client'
import type { BottomNavProps } from './bottom-nav.types'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/constants'
import { localizePath, selectActiveClass } from '@/lib'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { ButtonLink } from '../../elements'
import { bottomNav } from './bottom-nav.styles'

export const BottomNav = ({ lang, dictionary }: BottomNavProps) => {
  const { links, section } = dictionary
  const pathname = usePathname()
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <nav
      aria-label={section.navbar.navigation.helper}
      className={bottomNav({
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible'
      })}
    >
      <ButtonLink
        variant="nav"
        size="s"
        href={localizePath(LINKS.portfolio, lang)}
        className={selectActiveClass(
          pathname,
          localizePath(LINKS.portfolio, lang),
          true
        )}
      >
        {links.portfolio}
      </ButtonLink>
      <ButtonLink
        variant="nav"
        size="s"
        href={localizePath(LINKS.about, lang)}
        className={selectActiveClass(pathname, localizePath(LINKS.about, lang))}
      >
        {links.about}
      </ButtonLink>
      <ButtonLink
        variant="nav"
        size="s"
        href={localizePath(LINKS.blog, lang)}
        className={selectActiveClass(
          pathname,
          localizePath(LINKS.blog, lang),
          true
        )}
      >
        {links.blog}
      </ButtonLink>
      <ButtonLink
        variant="outline"
        size="s"
        href={localizePath(LINKS.contact, lang)}
      >
        {links.contact}
      </ButtonLink>
    </nav>
  )
}
