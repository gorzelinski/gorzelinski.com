import { Metadata } from 'next'
import { getDictionary } from '@/scripts'
import { Locale, i18n } from '@/i18n.config'
import { createLocaleWithTerritory } from '@/lib'

export async function openGraph(lang: Locale): Promise<Metadata> {
  const { layout } = await getDictionary(lang)
  const locale = createLocaleWithTerritory(lang)

  return {
    openGraph: {
      locale,
      alternateLocale: i18n.locales
        .filter((locale) => locale !== lang)
        .map((locale) => createLocaleWithTerritory(locale)),
      siteName: layout.root.metadata.title,
      type: 'website'
    }
  }
}
