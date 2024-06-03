'use client'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/constants'
import { localizePath, selectActiveClass } from '@/lib'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { navbar } from './navbar.styles'
import { NavbarProps } from './navbar.types'
import { Logo, ThemeSwitch } from '../../components'
import { ButtonLink, Nav } from '../../elements'

export const Navbar = ({ lang, dictionary }: NavbarProps) => {
  const { links, component, section, layout } = dictionary
  const pathname = usePathname()
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <header
      className={navbar({
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible',
        border: progress < 1 ? 'transparent' : 'bottom',
        padding: progress < 1 ? 'standard' : 'compact'
      })}
    >
      <Nav
        aria-label={section.navbar.navigation.main}
        width={{
          base: '100%',
          md: 'auto'
        }}
        justifyContent="space-between"
      >
        <Logo lang={lang}>{layout.root.metadata.title}</Logo>
        <ThemeSwitch ariaLabel={component.themeSwitch.ariaLabel}></ThemeSwitch>
      </Nav>
      <Nav
        aria-label={section.navbar.navigation.helper}
        className={navbar({
          position: 'bottom',
          structure: 'nested',
          border: 'top'
        })}
      >
        <ButtonLink
          variant="nav"
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
          variant="nav"
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
          variant="nav"
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
          variant="outline"
          size="s"
          href={localizePath(lang, LINKS.contact)}
        >
          {links.contact}
        </ButtonLink>
      </Nav>
    </header>
  )
}
