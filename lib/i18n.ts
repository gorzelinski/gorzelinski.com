import { Locale, i18n } from '@/i18n.config'

export function isDefaultLocale(
  locale: Locale,
  defaultLocale: Locale = i18n.defaultLocale
): boolean {
  return locale === defaultLocale
}

export function localizePath(
  locale: Locale,
  path: string,
  defaultLocale: Locale = i18n.defaultLocale
): string {
  if (isDefaultLocale(defaultLocale, locale)) {
    return path
  }

  const [, base] = path.split(`/`)
  if (base === locale) return path

  return `/${locale}${path}`
}

export function delocalizePath(locale: Locale, path: string): string {
  return path.replace(`/${locale}/`, '/')
}

export function localizeFileName(
  locale: Locale,
  fileName = 'index',
  extension = 'mdx'
) {
  return `${fileName}${
    isDefaultLocale(locale) ? '' : `.${locale}`
  }.${extension}`
}

export function createLocaleWithTerritory(lang: Locale) {
  const locale = new Intl.Locale(lang, {
    region: i18n.region[lang]
  })

  return locale.baseName.replace('-', '_')
}
