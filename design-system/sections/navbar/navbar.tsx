'use client'
import { usePathname } from 'next/navigation'
import { LINKS } from '@/constants'
import { localizePath, selectActiveClass } from '@/lib'
import { useScrollDirection, useScrollProgress } from '@/hooks'
import { NavbarProps } from './navbar.types'
import { Logo, ThemeSwitch } from '../../components'
import { ButtonLink, Nav } from '../../elements'
import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

// Importing navbar from navbar.styles.tsx creates a circular dependency, so we are using cva here.
// TODO: Look for a cleaner solution.
export const navbar = cva({
  base: {
    zIndex: 'closest',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingY: 'm',
    backgroundColor: 'gray.900',
    transitionProperty: 'background-color, border-color, opacity, padding',
    ...sharedTransitionProperties
  },
  variants: {
    position: {
      top: {
        position: 'sticky',
        top: '0',
        left: '0'
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        left: '0'
      }
    },
    structure: {
      nested: {
        paddingX: {
          base: 's',
          sm: 's',
          md: '0'
        },
        paddingY: {
          base: 's',
          sm: 's',
          md: '0'
        },
        md: {
          position: 'static',
          width: 'auto',
          borderTop: 'none'
        }
      }
    },
    opacity: {
      visible: {
        opacity: '97'
      },
      hidden: {
        opacity: '0',
        pointerEvents: 'none'
      }
    },
    border: {
      bottom: {
        borderBottom: 'gray.subtle'
      },
      top: {
        borderTop: 'gray.subtle'
      },
      transparent: {
        borderColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    position: 'top',
    opacity: 'visible'
  }
})

export const Navbar = ({ lang, dictionary }: NavbarProps) => {
  const { links, component, section, layout } = dictionary
  const pathname = usePathname()
  const direction = useScrollDirection()
  const progress = useScrollProgress()

  return (
    <header
      className={navbar({
        opacity: progress > 5 && direction === 'down' ? 'hidden' : 'visible',
        border: progress < 1 ? 'transparent' : 'bottom'
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
          className={selectActiveClass(
            pathname,
            localizePath(LINKS.about, lang)
          )}
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
      </Nav>
    </header>
  )
}
