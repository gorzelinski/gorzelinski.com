'use client'
import type { NewsletterProps } from './newsletter.types'
import { HStack } from '@/styled-system/jsx'
import { useNewsletter } from '@/hooks'
import { mapStatusToCalloutVariant } from './newsletter.helpers'
import { verticalRhythm } from '../../utils'
import {
  Button,
  H2,
  H3,
  Input,
  InputWrapper,
  Li,
  P,
  Small,
  Ul,
  card
} from '../../elements'
import { At, Send, Sync } from '../../icons'
import { Callout } from '../../components'

export const Newsletter = ({ dictionary, lang }: NewsletterProps) => {
  const { state, formAction, isPending } = useNewsletter(lang)

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
      {state.status === 'success' || state.status === 'quarantined' ? null : (
        <>
          <form action={formAction}>
            <HStack flexWrap="wrap" gap="m">
              <InputWrapper>
                <Input
                  required
                  autoComplete="off"
                  name="email_address"
                  id="email"
                  type="email"
                  className="peer"
                  placeholder={dictionary.email}
                  aria-label={dictionary.email}
                  disabled={isPending}
                />
                <At
                  _peerHover={{
                    color: 'gray.500!'
                  }}
                  _peerFocus={{
                    color: 'gray.400!'
                  }}
                  _peerUserValid={{
                    color: 'success.700!'
                  }}
                  _peerUserInvalid={{
                    color: 'danger.700!'
                  }}
                />
              </InputWrapper>
              <Button
                width="responsive"
                type="submit"
                _hover={{
                  '& > span': {
                    animation: 'wobbling',
                    _motionReduce: { animation: 'none' }
                  }
                }}
                disabled={isPending}
              >
                {dictionary.button}{' '}
                {isPending ? (
                  <Sync data-testid="sync" animation="spinning" />
                ) : (
                  <Send data-testid="send" />
                )}
              </Button>
            </HStack>
          </form>
          <Small>{dictionary.footnote}</Small>
        </>
      )}
      {state.status === 'success' ||
      state.status === 'quarantined' ||
      state.status === 'error' ? (
        <Callout variant={mapStatusToCalloutVariant(state.status)}>
          <H3 marginBottom="s" size="s">
            {dictionary[state.status].heading}
          </H3>
          <P size="s">{dictionary[state.status].description}</P>
        </Callout>
      ) : null}
    </section>
  )
}
