import { VStack } from '@/styled-system/jsx'
import { PaginationProps } from './pagination.types'
import { ButtonLink, Small, header } from '../../elements'
import { ChevronBack, ChevronForward } from '../../icons'

export const Pagination = ({ prev, next, dictionary }: PaginationProps) => {
  return (
    <nav aria-label={dictionary.ariaLabel} className={header()}>
      {prev && (
        <VStack
          alignItems="start"
          gap={{
            base: '0',
            sm: 's'
          }}
        >
          <Small>{dictionary.prev}</Small>
          <ButtonLink
            rel="prev"
            variant="text"
            href={prev.slug}
            transition="moveIconBackward"
          >
            <ChevronBack /> {prev.title}
          </ButtonLink>
        </VStack>
      )}
      {next && (
        <VStack
          alignItems={prev ? 'end' : 'start'}
          gap={{
            base: '0',
            sm: 's'
          }}
        >
          <Small>{dictionary.next}</Small>
          <ButtonLink
            rel="next"
            align={prev ? 'right' : 'left'}
            textAlign={prev ? 'right' : 'left'}
            variant="text"
            href={next.slug}
            transition="moveIconForward"
          >
            {next.title} <ChevronForward />
          </ButtonLink>
        </VStack>
      )}
    </nav>
  )
}
