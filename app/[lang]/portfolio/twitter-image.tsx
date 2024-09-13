import { ImageResponse } from 'next/og'
import { cookies } from 'next/headers'
import { PageProps, Theme } from '@/types'
import { CONTENTTYPE, TWITTER } from '@/constants'
import { getDictionary, getMetaFont } from '@/scripts'
import { MetaImage } from '@/design-system'

export async function generateImageMetadata({ params: { lang } }: PageProps) {
  const { page } = await getDictionary(lang)

  return [
    {
      id: 'meta-image-portfolio',
      alt: page.portfolio.metadata.image.alt,
      size: TWITTER,
      contentType: CONTENTTYPE
    }
  ]
}

export default async function Image({ params: { lang } }: PageProps) {
  const { layout, page } = await getDictionary(lang)
  const theme = cookies().get('theme')?.value || 'light'

  return new ImageResponse(
    (
      <MetaImage
        theme={theme as Theme}
        title={page.portfolio.metadata.title}
        subtitle={layout.root.metadata.title}
      />
    ),
    {
      ...TWITTER,
      fonts: [
        await getMetaFont('../../public/fonts/Montserrat-Medium.ttf', {
          weight: 500
        }),
        await getMetaFont('../../public/fonts/Montserrat-SemiBold.ttf', {
          weight: 600
        })
      ]
    }
  )
}
