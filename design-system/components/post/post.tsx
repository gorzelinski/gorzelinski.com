import { delocalizePath, formatDate, formatReadingTime } from '@/lib'
import { PostProps } from './post.types'
import { Image } from '../image'
import { ButtonLink, Card, H3, P, Span, Time } from '../../elements'
import { ChevronForward } from '../../icons'
import { HStack } from '@/styled-system/jsx'

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
      <HStack gap="xs">
        <Time dateTime={new Date(date).toISOString()}>
          {formatDate(date, lang)}
        </Time>
        <Span>•</Span>
        <Span>
          {formatReadingTime(readingTime.minutes)} {dictionary.min}
        </Span>
      </HStack>
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
