'use client'
import { usePathname } from 'next/navigation'
import { navbar } from './navbar.styles'
import { NavbarProps } from './navbar.types'
import { localizePath, selectActiveClass } from '@/lib'
import { Logo, ThemeSwitch } from '../../components'
import { ButtonLink, Nav } from '../../elements'

export const Navbar = ({ lang, dictionary }: NavbarProps) => {
  const { component, section } = dictionary
  const pathname = usePathname()

  return (
    <header className={navbar()}>
      <Nav
        aria-label={section.navbar.navigation.main}
        width={{
          base: '100%',
          md: 'auto'
        }}
        justifyContent={{
          base: 'space-between'
        }}
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
          href={localizePath(lang, '/portfolio/')}
          className={selectActiveClass(
            pathname,
            localizePath(lang, '/portfolio/'),
            true
          )}
        >
          {section.navbar.link.portfolio}
        </ButtonLink>
        <ButtonLink
          style="nav"
          href={localizePath(lang, '/about/')}
          className={selectActiveClass(pathname, localizePath(lang, '/about/'))}
        >
          {section.navbar.link.about}
        </ButtonLink>
        <ButtonLink
          style="nav"
          href={localizePath(lang, '/blog/')}
          className={selectActiveClass(
            pathname,
            localizePath(lang, '/blog/'),
            true
          )}
        >
          {section.navbar.link.blog}
        </ButtonLink>
        <ButtonLink style="outline" href={localizePath(lang, '#contact')}>
          {section.navbar.link.contact}
        </ButtonLink>
      </Nav>
    </header>
  )
}
