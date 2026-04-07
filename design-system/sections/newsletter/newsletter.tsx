'use client'
import type { NewsletterProps } from './newsletter.types'
import { Box, HStack } from '@/styled-system/jsx'
import { useNewsletter } from '@/hooks'
import {
  mapStatusToCalloutVariant,
  setValidationMessage
} from './newsletter.helpers'
import { verticalRhythm } from '../../utils'
import {
  Button,
  ButtonAnchor,
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
  const { state, formAction, isPending, FORM_URL } = useNewsletter(lang)

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
          <form action={FORM_URL} method="post" aria-busy={isPending}>
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
                  onInvalid={(e) =>
                    setValidationMessage(e.currentTarget, dictionary.validation)
                  }
                  onInput={(e) =>
                    setValidationMessage(e.currentTarget, dictionary.validation)
                  }
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
                formAction={formAction}
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
      <Box role="status" aria-live="polite" width="100%">
        {state.status === 'success' ||
        state.status === 'quarantined' ||
        state.status === 'error' ? (
          <Callout variant={mapStatusToCalloutVariant(state.status)}>
            <H3 marginBottom="s" size="s">
              {dictionary[state.status].heading}
            </H3>
            <P size="s">{dictionary[state.status].description}</P>
            {state.status === 'quarantined' && state.url ? (
              <ButtonAnchor
                align="left"
                variant="text"
                size="s"
                href={state.url}
                target="_blank"
                rel="noopener"
              >
                {dictionary.quarantined.link}
              </ButtonAnchor>
            ) : null}
          </Callout>
        ) : null}
      </Box>
    </section>
  )
}
