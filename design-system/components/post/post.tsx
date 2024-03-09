import { formatDate, formatReadingTime, localizePath } from '@/lib'
import { LINKS } from '@/constants'
import { PostProps } from './post.types'
import { ButtonLink, Card, ChevronForward, H3, P, Small } from '../../elements'
import { Image } from '../image'

export const Post = ({
  lang,
  dictionary,
  slug,
  image,
  title,
  description,
  date,
  readingTime
}: PostProps) => {
  return (
    <Card orientation="horizontal">
      <Image
        width={605}
        height={403}
        src={`/images${LINKS.blog}${slug}/${image.src}`}
        alt={image.alt}
        aspectRatio="square"
      />
      <Small>
        {formatDate(date, lang)} • {formatReadingTime(readingTime.minutes)}{' '}
        {dictionary.min}
      </Small>
      <H3>{title}</H3>
      <P>{description}</P>
      <ButtonLink
        align="left"
        style="text"
        href={localizePath(lang, `${LINKS.blog}${slug}/`)}
        transition="moveIconForward"
        _hover={{
          '& > span': {
            animation: 'forwards'
          }
        }}
      >
        {dictionary.button} <ChevronForward />
      </ButtonLink>
    </Card>
  )
}
