import type { PostProps } from './post.types'

import { delocalizePath } from '@/lib'
import { ButtonLink, Card, H3, P } from '../../elements'
import { ChevronForward } from '../../icons'
import { Image, IMAGE_SIZES } from '../image'
import { PostTime } from './post-time'

export const Post = ({
  lang,
  dictionary,
  frontmatter,
  priority = false
}: PostProps) => {
  const { slug, image, title, description, date, readingTime } = frontmatter

  return (
    <Card orientation="horizontal">
      <Image
        width={605}
        height={403}
        src={`/images${delocalizePath(slug, lang)}${image.src}`}
        alt={image.alt}
        sizes={IMAGE_SIZES.columnThird}
        priority={priority}
      />
      <PostTime
        date={date}
        readingTime={readingTime}
        lang={lang}
        dictionary={dictionary}
      />
      <H3 size="s">{title}</H3>
      <P size="s">{description}</P>
      <ButtonLink
        align="left"
        variant="text"
        href={slug}
        transition="moveIconForward"
      >
        {dictionary.button} <ChevronForward />
      </ButtonLink>
    </Card>
  )
}
