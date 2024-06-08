import { Pages } from '@/constants'
import { Locale, i18n } from '@/i18n.config'
import { localizePath } from './i18n'

export function isInternal(siteUrl: string, url: string) {
  const pageUrl = new URL(siteUrl)
  const linkUrl = new URL(url, siteUrl)

  return linkUrl.host === pageUrl.host
}

type AlternateLinks = Record<Locale, string>

export function generateAlternateLinks(link: Pages) {
  return i18n.locales
    .map((locale) => ({
      [locale]: localizePath(locale, link)
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}) as AlternateLinks
}
