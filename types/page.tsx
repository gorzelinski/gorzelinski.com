import type { LINKS } from '@/constants'
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

export type Pages = (typeof LINKS)[
  | 'home'
  | 'portfolio'
  | 'about'
  | 'blog'
  | 'uses'
  | 'subscriptionConfirmed']
