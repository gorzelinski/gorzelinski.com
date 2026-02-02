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
  dictionary,
  updatedLabel,
  date,
  updated,
  readingTime,
  title,
  description,
  image
}: PostHeaderProps) => {
  return (
    <header>
      <PostTime
        date={date}
        readingTime={readingTime}
        lang={lang}
        dictionary={dictionary}
      />
      <H1
        css={{
          ...verticalRhythm.marginTop.s,
          ...verticalRhythm.marginBottom.m
        }}
      >
        {title}
      </H1>
      <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
        {description}
      </P>
      <Pill css={verticalRhythm.marginBottom.s}>
        {updatedLabel}: {formatDate(updated, lang)}
      </Pill>
      <Figure
        css={verticalRhythm.marginBottom.m}
        margin="bleed"
        textAlign="center"
      >
        <Image
          aspectRatio="cinema"
          src={`/images${LINKS.blog}${slug}/${image.src}`}
          alt={image.alt}
          width={1200}
          height={675}
          priority={true}
        />
        <Figcaption
          style="italic"
          textAlign="center"
          css={verticalRhythm.marginTop.s}
        >
          {image.caption}
        </Figcaption>
      </Figure>
    </header>
  )
}
