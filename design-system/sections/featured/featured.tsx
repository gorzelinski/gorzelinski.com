import { FeaturedProps } from './featured.types'
import { featured } from './featured.styles'
import { ButtonLink, ChevronForward, H2, Header } from '../../elements'

export const Featured = ({ children, heading, link }: FeaturedProps) => {
  return (
    <section className={featured()}>
      <Header>
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
      </Header>
      {children}
    </section>
  )
}
