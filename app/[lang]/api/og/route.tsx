import React from 'react'
import { cookies } from 'next/headers'
import { ImageResponse } from 'next/og'
import { Theme } from '@/types'
import { OPENGRAPH } from '@/constants'
import { getMetaFont } from '@/scripts'
import { MetaImage } from '@/design-system'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const theme = cookies().get('theme')?.value || 'light'
    const title = searchParams.get('title')!
    const subtitle = searchParams.get('subtitle')!
    const backgroundURL = searchParams.get('backgroundURL') || undefined

    return new ImageResponse(
      (
        <MetaImage
          theme={theme as Theme}
          title={title}
          subtitle={subtitle}
          backgroundURL={backgroundURL}
        />
      ),
      {
        ...OPENGRAPH,
        fonts: [
          await getMetaFont('Montserrat-Medium.ttf', {
            weight: 500,
            style: 'normal'
          }),
          await getMetaFont('Montserrat-SemiBold.ttf', {
            weight: 600,
            style: 'normal'
          })
        ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
