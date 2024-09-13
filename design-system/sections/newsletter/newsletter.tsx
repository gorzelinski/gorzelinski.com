'use client'
import { HStack } from '@/styled-system/jsx'
import { useNewsletter } from '@/hooks'
import { NewsletterProps } from './newsletter.types'
import { mapStateToCalloutVariant } from './newsletter.helpers'
import { verticalRhythm } from '../../utils'
import {
  At,
  Button,
  H2,
  H3,
  Input,
  InputWrapper,
  Li,
  P,
  Send,
  Small,
  Sync,
  Ul,
  card
} from '../../elements'
import { Callout } from '../../components'

export const Newsletter = ({ dictionary, lang }: NewsletterProps) => {
  const { state, setState, handleSubmit, FORM_URL } = useNewsletter(lang)

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
      {state === 'success' || state === 'quarantined' ? null : (
        <>
          <form action={FORM_URL} method="post" onSubmit={handleSubmit}>
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
                  disabled={state === 'loading'}
                  onClick={() => setState('idle')}
                />
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
                type="submit"
                _hover={{
                  '& > span': {
                    animation: 'wobbling'
                  }
                }}
                disabled={state !== 'idle'}
              >
                {dictionary.button}{' '}
                {state === 'loading' ? (
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
      {state === 'success' || state === 'quarantined' || state === 'error' ? (
        <Callout variant={mapStateToCalloutVariant(state)}>
          <H3 marginBottom="s" size="s">
            {dictionary[state].heading}
          </H3>
          <P size="s">{dictionary[state].description}</P>
        </Callout>
      ) : null}
    </section>
  )
}
