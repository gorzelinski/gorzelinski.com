import { HStack } from '@/styled-system/jsx'
import { formatDate, formatReadingTime } from '@/lib'
import { PostTimeProps } from './post-time.types'
import { Span, Time } from '../../elements'

export const PostTime = ({
  date,
  readingTime,
  lang,
  dictionary
}: PostTimeProps) => {
  return (
    <HStack gap="xs">
      <Time dateTime={new Date(date).toISOString()}>
        {formatDate(date, lang)}
      </Time>
      <Span>•</Span>
      <Span>
        {formatReadingTime(readingTime.minutes)} {dictionary.min}
      </Span>
    </HStack>
  )
}
