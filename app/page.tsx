import {
  AlertCircle,
  ButtonLink,
  Download,
  H1,
  Mail,
  P,
  Sync
} from '@/components'
import { Container, VStack } from '@/styled-system/jsx'

export default function Home() {
  return (
    <Container maxWidth="breakpoint-md">
      <VStack
        alignItems="start"
        gap="l"
        height="100svh"
        justifyContent="center"
      >
        <H1>I create things on the Internet</H1>
        <P size="xl">
          I help individuals and small businesses step into the XXI century. I
          create personalized websites for them, ensuring a professional online
          presence.
        </P>
        <ButtonLink href="#contact">
          Spinning <Sync animation="spinning"></Sync>
        </ButtonLink>
        <ButtonLink
          href="#contact"
          _hover={{
            '& > span': {
              animation: 'wobbling'
            }
          }}
        >
          Wobblig <AlertCircle></AlertCircle>
        </ButtonLink>
        <ButtonLink
          href="#contact"
          _hover={{
            '& > span': {
              animation: 'bouncing'
            }
          }}
        >
          Bouncing <Download></Download>
        </ButtonLink>
        <ButtonLink
          href="#contact"
          _hover={{
            '& > span': {
              animation: 'buzzing'
            }
          }}
        >
          Buzzing<Mail></Mail>
        </ButtonLink>
      </VStack>
    </Container>
  )
}
