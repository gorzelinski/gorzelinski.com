import { HStack } from '@/styled-system/jsx'
import { NewsletterProps } from './newsletter.types'
import { verticalRhythm } from '../../utils'
import {
  At,
  Button,
  H2,
  Input,
  InputWrapper,
  Li,
  P,
  Send,
  Small,
  Ul,
  card
} from '../../elements'

export const Newsletter = ({ dictionary }: NewsletterProps) => {
  return (
    <section
      id="newsletter"
      className={card({ justifyContent: 'center', shadow: 'farther' })}
    >
      <H2>{dictionary.heading}</H2>
      <P size="l" color="subtle">
        {dictionary.description}
      </P>
      <Ul>
        {dictionary.topics.map((topic, index) => (
          <Li css={verticalRhythm.marginBottom.s} key={`topic-${index}`}>
            {topic}
          </Li>
        ))}
      </Ul>
      <HStack flexWrap="wrap" gap="m">
        <InputWrapper>
          <Input className="peer" placeholder={dictionary.email}></Input>
          <At
            _peerHover={{
              color: 'gray.500'
            }}
            _peerFocus={{
              color: 'gray.400!'
            }}
          />
        </InputWrapper>
        <Button
          width="responsive"
          _hover={{
            '& > span': {
              animation: 'wobbling'
            }
          }}
        >
          {dictionary.button} <Send />
        </Button>
      </HStack>
      <Small>{dictionary.footnote}</Small>
    </section>
  )
}
