import { Locale } from '@/i18n.config'

export type PageProps = {
  params: {
    lang: Locale
  }
}

export type NestedPageProps = {
  params: {
    lang: Locale
    slug: string
  }
}
