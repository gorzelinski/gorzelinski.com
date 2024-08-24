import { ImageResponse } from 'next/og'
import { cookies } from 'next/headers'
import { NestedPageProps, Theme } from '@/types'
import { CONTENTTYPE, LINKS, OPENGRAPH } from '@/constants'
import { getDictionary, getMetaFont, getMDX } from '@/scripts'
import { getAbsoluteURL } from '@/lib'
import { MetaImage } from '@/design-system'

export async function generateImageMetadata({
  params: { lang, slug }
}: NestedPageProps) {
  const { page } = await getDictionary(lang)
  const { frontmatter } = await getMDX(LINKS.blog, slug, lang)

  return [
    {
      id: 'meta-image-blog-post',
      alt: `${page.blogPost.metadata.image.alt} ${frontmatter.image.alt}`,
      size: OPENGRAPH,
      contentType: CONTENTTYPE
    }
  ]
}

export default async function Image({
  params: { lang, slug }
}: NestedPageProps) {
  const { layout } = await getDictionary(lang)
  const { frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const theme = cookies().get('theme')?.value || 'light'

  return new ImageResponse(
    (
      <MetaImage
        theme={theme as Theme}
        title={frontmatter.title}
        subtitle={layout.root.metadata.title}
        backgroundURL={`${getAbsoluteURL(`/images${LINKS.blog}${slug}/`)}${frontmatter.image.src}`}
      />
    ),
    {
      ...OPENGRAPH,
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
