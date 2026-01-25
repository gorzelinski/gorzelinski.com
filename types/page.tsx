import type { Locale } from '@/types'

export type PageProps = {
  params: Promise<{
    lang: Locale
  }>
}

export type NestedPageProps = PageProps & {
  params: Promise<{
    lang: Locale
    slug: string
  }>
}

export type SearchPageProps = PageProps & {
  searchParams?: Promise<{
    query?: string
  }>
}
