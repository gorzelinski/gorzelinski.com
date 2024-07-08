import { ImageResponse } from 'next/og'
import { cookies } from 'next/headers'
import { CONTENTTYPE, OPENGRAPH } from '@/constants'
import { PageProps, Theme } from '@/types'
import { getDictionary, getMetaFont } from '@/scripts'
import { MetaImage } from '@/design-system'

export const size = OPENGRAPH

export const contentType = CONTENTTYPE

export default async function Image({ params: { lang } }: PageProps) {
  const { layout, page } = await getDictionary(lang)
  const theme = cookies().get('theme')?.value || 'light'

  return new ImageResponse(
    (
      <MetaImage
        theme={theme as Theme}
        title={page.subscriptionConfirmed.metadata.title}
        subtitle={layout.root.metadata.title}
      />
    ),
    {
      ...size,
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
