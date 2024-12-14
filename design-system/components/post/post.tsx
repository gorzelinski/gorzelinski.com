import { delocalizePath, formatDate, formatReadingTime } from '@/lib'
import { PostProps } from './post.types'
import { Image } from '../image'
import { ButtonLink, Card, H3, P, Small } from '../../elements'
import { ChevronForward } from '../../icons'

export const Post = ({
  lang,
  dictionary,
  slug,
  image,
  title,
  description,
  date,
  readingTime,
  priority = false
}: PostProps) => {
  return (
    <Card orientation="horizontal">
      <Image
        width={605}
        height={403}
        src={`/images${delocalizePath(slug, lang)}${image.src}`}
        alt={image.alt}
        priority={priority}
      />
      <Small>
        {formatDate(date, lang)} • {formatReadingTime(readingTime.minutes)}{' '}
        {dictionary.min}
      </Small>
      <H3 size="s">{title}</H3>
      <P>{description}</P>
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
