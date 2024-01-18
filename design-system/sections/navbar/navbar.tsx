'use client'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/constants'
import { localizePath, selectActiveClass } from '@/lib'
import { navbar } from './navbar.styles'
import { NavbarProps } from './navbar.types'
import { Logo, ThemeSwitch } from '../../components'
import { ButtonLink, Nav } from '../../elements'

export const Navbar = ({ lang, dictionary }: NavbarProps) => {
  const { links, component, section } = dictionary
  const pathname = usePathname()

  return (
    <header className={navbar()}>
      <Nav
        aria-label={section.navbar.navigation.main}
        width={{
          base: '100%',
          md: 'auto'
        }}
        justifyContent="space-between"
      >
        <Logo lang={lang}>{component.logo.text}</Logo>
        <ThemeSwitch ariaLabel={component.themeSwitch.ariaLabel}></ThemeSwitch>
      </Nav>
      <Nav
        aria-label={section.navbar.navigation.helper}
        className={navbar({ position: 'bottom', structure: 'nested' })}
      >
        <ButtonLink
          style="nav"
          size="s"
          href={localizePath(lang, LINKS.portfolio)}
          className={selectActiveClass(
            pathname,
            localizePath(lang, LINKS.portfolio),
            true
          )}
        >
          {links.portfolio}
        </ButtonLink>
        <ButtonLink
          style="nav"
          size="s"
          href={localizePath(lang, LINKS.about)}
          className={selectActiveClass(
            pathname,
            localizePath(lang, LINKS.about)
          )}
        >
          {links.about}
        </ButtonLink>
        <ButtonLink
          style="nav"
          size="s"
          href={localizePath(lang, LINKS.blog)}
          className={selectActiveClass(
            pathname,
            localizePath(lang, LINKS.blog),
            true
          )}
        >
          {links.blog}
        </ButtonLink>
        <ButtonLink
          style="outline"
          size="s"
          href={localizePath(lang, LINKS.contact)}
        >
          {links.contact}
        </ButtonLink>
      </Nav>
    </header>
  )
}
