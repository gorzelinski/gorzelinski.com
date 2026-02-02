import type { PostHeaderProps } from './post-header.types'
import { LINKS } from '@/constants'
import { formatDate } from '@/lib'
import { Figcaption, Figure, H1, P, Pill } from '../../elements'
import { Image } from '../image'
import { PostTime } from './post-time'
import { verticalRhythm } from '../../utils'

export const PostHeader = ({
  lang,
  slug,
  frontmatter,
  dictionary
}: PostHeaderProps) => {
  return (
    <header>
      <PostTime
        date={frontmatter.date}
        readingTime={frontmatter.readingTime}
        lang={lang}
        dictionary={dictionary}
      />
      <H1
        css={{
          ...verticalRhythm.marginTop.s,
          ...verticalRhythm.marginBottom.m
        }}
      >
        {frontmatter.title}
      </H1>
      <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
        {frontmatter.description}
      </P>
      <Pill css={verticalRhythm.marginBottom.s}>
        {dictionary.updated}: {formatDate(frontmatter.updated, lang)}
      </Pill>
      <Figure
        css={verticalRhythm.marginBottom.m}
        margin="bleed"
        textAlign="center"
      >
        <Image
          aspectRatio="cinema"
          src={`/images${LINKS.blog}${slug}/${frontmatter.image.src}`}
          alt={frontmatter.image.alt}
          width={1200}
          height={675}
          priority={true}
        />
        <Figcaption
          style="italic"
          textAlign="center"
          css={verticalRhythm.marginTop.s}
        >
          {frontmatter.image.caption}
        </Figcaption>
      </Figure>
    </header>
  )
}
