'use client'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import {
  delocalizePath,
  getLocaleDisplayName,
  isDefaultLocale,
  localizePath,
  selectActiveClass
} from '@/lib'
import { Wrap } from '@/styled-system/jsx'
import { ButtonAnchor } from '../../elements'
import { Earth } from '../../icons'

export const LanguageSwitch = ({ lang }: { lang: Locale }) => {
  const { locales } = i18n
  const pathname = usePathname()
  const defaultPathname = delocalizePath(pathname, lang)

  return (
    <Wrap gap="m">
      <Earth color="gray" alignSelf="center" />
      {locales.map((locale) => {
        const href = isDefaultLocale(locale)
          ? defaultPathname
          : localizePath(defaultPathname, locale)

        return (
          <ButtonAnchor
            variant="nav"
            size="s"
            key={locale}
            lang={locale}
            href={href}
            hrefLang={locale}
            className={selectActiveClass(pathname, href)}
          >
            {getLocaleDisplayName(locale)}
          </ButtonAnchor>
        )
      })}
    </Wrap>
  )
}
