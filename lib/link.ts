import { Locale, i18n } from '@/i18n.config'
import { LINKS, metadataBase } from '@/constants'
import { localizePath } from './i18n'

export function isInternalURL(
  url: string,
  siteUrl: string = metadataBase.href
) {
  const pageUrl = new URL(siteUrl)
  const linkUrl = new URL(url, siteUrl)

  return linkUrl.host === pageUrl.host
}

export function getAbsoluteURL(slug: string = '/', lang: Locale = 'en') {
  return new URL(localizePath(slug, lang), metadataBase).href
}

type AlternateLinks = Record<Locale, string>

export function generateAlternateLinks(link: string) {
  return i18n.locales
    .map((locale) => ({
      [locale]: localizePath(link, locale)
    }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}) as AlternateLinks
}

export function getCoffeeURL(lang: Locale) {
  return lang === 'pl' ? LINKS.buyCoffeeTo : LINKS.buyMeACoffee
}
