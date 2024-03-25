'use client'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import {
  capitalize,
  delocalizePath,
  isDefaultLocale,
  localizePath,
  selectActiveClass
} from '@/lib'
import { Wrap } from '@/styled-system/jsx'
import { ButtonAnchor, Earth } from '../../elements'

export const LanguageSwitch = ({ lang }: { lang: Locale }) => {
  const { locales } = i18n
  const pathname = usePathname()
  const defaultPathname = delocalizePath(lang, pathname)

  return (
    <Wrap gap="m">
      <Earth color="gray" alignSelf="center" />
      {locales.map((locale) => {
        const language = new Intl.DisplayNames(locale, {
          type: 'language'
        })

        const href = isDefaultLocale(locale)
          ? defaultPathname
          : localizePath(locale, defaultPathname)

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
            {capitalize(language.of(locale)!)}
          </ButtonAnchor>
        )
      })}
    </Wrap>
  )
}
