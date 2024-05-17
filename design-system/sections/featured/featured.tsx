import { FeaturedProps } from './featured.types'
import { featured } from './featured.styles'
import { ButtonLink, ChevronForward, H2, Header } from '../../elements'

export const Featured = ({ children, heading, link }: FeaturedProps) => {
  return (
    <section className={featured()}>
      <Header>
        <H2>{heading}</H2>
        <ButtonLink
          variant="text"
          align="right"
          transition="moveIconForward"
          href={link.href}
        >
          {link.text} <ChevronForward />
        </ButtonLink>
      </Header>
      {children}
    </section>
  )
}
