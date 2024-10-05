import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { CONTENTTYPE, OPENGRAPH, TWITTER } from '@/constants'
import { MetaImageProps } from '@/design-system/components/meta-image/meta-image.types'
import { getCorrectTheme } from './theme'

type MetaImage =
  | NonNullable<Metadata['openGraph']>['images']
  | NonNullable<Metadata['twitter']>['images']

type Params = Pick<
  MetaImageProps,
  'title' | 'subtitle' | Partial<'theme'> | Partial<'backgroundURL'>
> & {
  alt: string
}

export function getMetaImage(
  type: 'og' | 'twitter',
  lang: Locale,
  params: Params
): MetaImage {
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
