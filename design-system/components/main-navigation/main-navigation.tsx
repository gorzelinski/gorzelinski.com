'use client'
import type { MainNavigationProps } from './main-navigation.types'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/constants'
import { localizePath, selectActiveClass } from '@/lib'
import { ButtonLink, Nav } from '../../elements'

export const MainNavigation = ({
  ariaLabel,
  lang,
  links,
  display,
  width
}: MainNavigationProps) => {
  const pathname = usePathname()

  return (
    <Nav aria-label={ariaLabel} display={display} width={width}>
      <ButtonLink
        variant="nav"
        underline
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
        underline
        size="s"
        href={localizePath(LINKS.about, lang)}
        className={selectActiveClass(
          pathname,
          localizePath(LINKS.about, lang)
        )}
      >
        {links.about}
      </ButtonLink>
      <ButtonLink
        variant="nav"
        underline
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
    </Nav>
  )
}
