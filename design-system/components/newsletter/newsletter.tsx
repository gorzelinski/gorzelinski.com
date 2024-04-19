import { HStack } from '@/styled-system/jsx'
import { NewsletterProps } from './newsletter.types'
import { verticalRhythm } from '../../utils'
import {
  At,
  Button,
  Card,
  H3,
  Input,
  InputWrapper,
  Li,
  P,
  Send,
  Small,
  Ul
} from '../../elements'

export const Newsletter = ({ dictionary }: NewsletterProps) => {
  return (
    <Card justifyContent="center" shadow="farther">
      <H3>{dictionary.heading}</H3>
      <P>{dictionary.description}</P>
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
    </Card>
  )
}
