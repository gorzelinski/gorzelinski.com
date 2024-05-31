import { Metadata } from 'next'
import { LINKS } from '@/constants'
import { getMDX } from '@/lib/mdx'
import { getDictionary } from '@/lib/dictionaries'
import {
  Article,
  Figcaption,
  Figure,
  H1,
  Image,
  P,
  verticalRhythm
} from '@/design-system'
import { PageProps } from '@/types'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)

  return {
    title: page.uses.metadata.title,
    description: page.uses.metadata.description
  }
}

export default async function Uses({ params: { lang } }: PageProps) {
  const { frontmatter, content } = await getMDX(LINKS.uses, '', lang)

  return (
    <Article>
      <H1 css={verticalRhythm.marginBottom.m}>{frontmatter.title}</H1>
      <P size="l" color="subtle" css={verticalRhythm.marginBottom.m}>
        {frontmatter.description}
      </P>
      <Figure
        marginX={{
          base: '-m',
          sm: '-l',
          md: '-xl',
          lg: '-2xl',
          xl: '-4xl'
        }}
        textAlign="center"
      >
        <Image
          aspectRatio="cinema"
          src={`/images${LINKS.uses}${frontmatter.image.src}`}
          alt={frontmatter.image.alt}
          width={1200}
          height={675}
        />
        <Figcaption
          style="italic"
          textAlign="center"
          css={verticalRhythm.marginTop.s}
        >
          {frontmatter.image.caption}
        </Figcaption>
      </Figure>
      {content}
    </Article>
  )
}
