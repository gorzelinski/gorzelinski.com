import type { Metadata } from 'next'
import type { Locale, MetaImageProps } from '@/types'
import { CONTENTTYPE, OPENGRAPH, TWITTER } from '@/constants'
import { getCorrectTheme } from './theme'

type MetaImageResponse =
  | NonNullable<Metadata['openGraph']>['images']
  | NonNullable<Metadata['twitter']>['images']

type MetaImageParams = Pick<
  MetaImageProps,
  'title' | 'subtitle' | Partial<'theme'> | Partial<'backgroundURL'>
> & {
  alt: string
}

export function getMetaImage(
  type: 'og' | 'twitter',
  lang: Locale,
  params: MetaImageParams
): MetaImageResponse {
  const { theme, title, subtitle, backgroundURL, alt } = params

  const searchParams = new URLSearchParams()

  searchParams.set('title', title)
  searchParams.set('subtitle', subtitle)
  searchParams.set('theme', getCorrectTheme(theme))

  if (backgroundURL) searchParams.set('backgroundURL', backgroundURL)

  const sizes = {
    og: OPENGRAPH,
    twitter: TWITTER
  }

  return {
    url: `/${lang}/api/${type}/?${searchParams.toString()}`,
    alt,
    type: CONTENTTYPE,
    ...sizes[type]
  }
}
