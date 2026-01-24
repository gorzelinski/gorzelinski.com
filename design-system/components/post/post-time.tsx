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
  const dateTime = new Date(date).toISOString()
  const formattedDate = formatDate(date, lang)
  const formattedReadingTime = formatReadingTime(readingTime.minutes)

  return (
    <HStack gap="xs">
      <Time dateTime={dateTime}>{formattedDate}</Time>
      <Span>•</Span>
      <Span>
        {formattedReadingTime} {dictionary.min}
      </Span>
    </HStack>
  )
}
