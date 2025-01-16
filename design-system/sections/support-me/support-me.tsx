import { SupportMeProps } from './support-me.types'
import { Section } from '../section'
import { ButtonAnchor, H2, P } from '../../elements'
import { Cafe } from '../../icons'
import { getCoffeeURL } from '@/lib'

export const SupportMe = ({ lang, dictionary }: SupportMeProps) => {
  return (
    <Section
      columns="1"
      alignItems="center"
      justifyItems="center"
      textAlign="center"
      variant="bleed"
    >
      <H2>{dictionary.heading}</H2>
      <P color="subtle" size="l">
        {dictionary.description}
      </P>
      <ButtonAnchor
        target="_blank"
        _hover={{
          '& > span': {
            animation: 'bouncing'
          }
        }}
        href={getCoffeeURL(lang)}
      >
        <Cafe verticalAlign="bottom" /> {dictionary.button}
      </ButtonAnchor>
    </Section>
  )
}
