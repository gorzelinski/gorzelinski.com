'use client'
import { usePathname } from 'next/navigation'
import { Locale, i18n } from '@/i18n.config'
import {
  capitalize,
  delocalizePath,
  isDefaultLocale,
  localizePath
} from '@/lib'
import { Wrap } from '@/styled-system/jsx'
import { ButtonAnchor } from '../button-anchor'

export const LanguageSwitch = ({ lang }: { lang: Locale }) => {
  const { locales } = i18n
  const pathname = usePathname()
  const defaultPathname = delocalizePath(lang, pathname)

  return (
    <Wrap gap="m">
      {locales.map((locale) => {
        const language = new Intl.DisplayNames(locale, {
          type: 'language'
        })

        const href = isDefaultLocale(locale)
          ? defaultPathname
          : localizePath(locale, defaultPathname)

        const isActive = href === pathname

        return (
          <ButtonAnchor
            key={locale}
            href={href}
            className={isActive ? 'active-subtle' : ''}
            style="nav"
            size="s"
          >
            {capitalize(language.of(locale)!)}
          </ButtonAnchor>
        )
      })}
    </Wrap>
  )
}
