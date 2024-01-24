import { FeaturedProps } from './featured.types'
import { ButtonLink, ChevronForward, H2 } from '../../elements'
import { Wrap } from '@/styled-system/jsx'

export const Featured = ({ children, heading, link }: FeaturedProps) => {
  return (
    <section>
      <Wrap
        width="100%"
        display="flex"
        flexDirection={{
          base: 'column',
          sm: 'row'
        }}
        flexWrap="wrap"
        justifyContent="space-between"
        gap="s"
      >
        <H2
          alignSelf={{
            base: 'flex-start',
            sm: 'baseline'
          }}
        >
          {heading}
        </H2>
        <ButtonLink
          style="text"
          align="right"
          alignSelf={{
            base: 'flex-end',
            sm: 'baseline'
          }}
          href={link.href}
        >
          {link.text} <ChevronForward />
        </ButtonLink>
      </Wrap>
      {children}
    </section>
  )
}
