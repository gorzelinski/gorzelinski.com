import { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import { HANDLES } from '@/constants'
import { createLocaleWithTerritory } from '@/lib'
import { getDictionary } from '@/scripts'

export async function openGraph(lang: Locale): Promise<Metadata['openGraph']> {
  const { layout } = await getDictionary(lang)
  const locale = createLocaleWithTerritory(lang)

  return {
    locale,
    alternateLocale: i18n.locales
      .filter((locale) => locale !== lang)
      .map((locale) => createLocaleWithTerritory(locale)),
    siteName: layout.root.metadata.title,
    type: 'website'
  }
}

export function twitter(): Metadata['twitter'] {
  return {
    card: 'summary_large_image',
    site: `@${HANDLES.twitter}`,
    creator: `@${HANDLES.twitter}`
  }
}
