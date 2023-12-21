import { ButtonLink, H1, P, Typewriter } from '@/components'
import { Container, VStack } from '@/styled-system/jsx'

export default function Home() {
  return (
    <Container maxWidth="breakpoint-xl" padding="m">
      <VStack
        maxWidth="breakpoint-md"
        alignItems="start"
        gap="l"
        height="100svh"
        justifyContent="center"
      >
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
