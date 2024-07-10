import { ImageResponse } from 'next/og'
import { cookies } from 'next/headers'
import { CONTENTTYPE, LINKS, OPENGRAPH, metadataBase } from '@/constants'
import { NestedPageProps, Theme } from '@/types'
import { getDictionary, getMetaFont, getMDX } from '@/scripts'
import { MetaImage } from '@/design-system'

export const size = OPENGRAPH

export const contentType = CONTENTTYPE

export default async function Image({
  params: { lang, slug }
}: NestedPageProps) {
  const { layout } = await getDictionary(lang)
  const { frontmatter } = await getMDX<'project'>(LINKS.portfolio, slug, lang)
  const theme = cookies().get('theme')?.value || 'light'

  return new ImageResponse(
    (
      <MetaImage
        theme={theme as Theme}
        title={frontmatter.title}
        subtitle={layout.root.metadata.title}
        backgroundURL={`${metadataBase}/images${LINKS.portfolio}${slug}/${frontmatter.image.src}`}
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