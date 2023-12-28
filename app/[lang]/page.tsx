import { ButtonLink, H1, P, Small, Typewriter } from '@/components'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { Container, VStack } from '@/styled-system/jsx'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  const { component } = await getDictionary(lang)
  return (
    <Container maxWidth="breakpoint-xl" padding="m">
      <VStack
        maxWidth="breakpoint-md"
        alignItems="start"
        gap="l"
        height="100svh"
        justifyContent="center"
      >
        <Small>{component.themeSwitch.ariaLabel}</Small>
        <H1>
          I{' '}
          <Typewriter
            words={['code', 'design', 'write', 'create']}
          ></Typewriter>
          <br />
          things on the Internet
        </H1>
        <P size="xl">
          I help individuals and small businesses step into the XXI century. I
          create personalized websites for them, ensuring a professional online
          presence.
        </P>
        <ButtonLink href="#contact">Let&rsquo;s create something</ButtonLink>
      </VStack>
    </Container>
  )
}
