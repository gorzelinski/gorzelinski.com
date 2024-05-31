import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
import { getMDX } from '@/lib/mdx'
import {
  Article,
  Figcaption,
  Figure,
  H1,
  Image,
  P,
  verticalRhythm
} from '@/design-system'

export default async function Uses({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
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
        css={verticalRhythm.marginBottom.m}
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
