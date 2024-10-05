import React from 'react'
import { ImageResponse } from 'next/og'
import { TWITTER } from '@/constants'
import { getMetaFont } from '@/scripts'
import { getCorrectTheme } from '@/lib'
import { MetaImage } from '@/design-system'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const theme = getCorrectTheme(searchParams.get('theme'))
    const title = searchParams.get('title')!
    const subtitle = searchParams.get('subtitle')!
    const backgroundURL = searchParams.get('backgroundURL') || undefined

    const fontMedium = await getMetaFont('Montserrat-Medium.ttf', {
      weight: 500,
      style: 'normal'
    })
    const fontBold = await getMetaFont('Montserrat-SemiBold.ttf', {
      weight: 600,
      style: 'normal'
    })

    return new ImageResponse(
      (
        <MetaImage
          theme={theme}
          title={title}
          subtitle={subtitle}
          backgroundURL={backgroundURL}
        />
      ),
      {
        ...TWITTER,
        fonts: [fontMedium, fontBold]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
