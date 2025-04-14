import { Locale } from '@/i18n.config'

export type PageProps = {
  params: {
    lang: Locale
  }
}

export type NestedPageProps = PageProps & {
  params: {
    slug: string
  }
}

export type SearchPageProps = PageProps & {
  searchParams?: { 
    query?: string 
  }
}
