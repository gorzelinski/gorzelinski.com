import { Metadata } from 'next'
import { getDictionary } from '@/scripts'
import { Locale, i18n } from '@/i18n.config'

export async function openGraph(lang: Locale): Promise<Metadata> {
  const { layout } = await getDictionary(lang)
  const locale = new Intl.Locale(lang, { region: i18n.region[lang] })

  return {
    openGraph: {
      locale: locale.baseName.replace('-', '_'),
      siteName: layout.root.metadata.title,
      type: 'website'
    }
  }
}
