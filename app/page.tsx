import {
  AlertCircle,
  ButtonLink,
  ChevronForward,
  Download,
  Dribbble,
  Facebook,
  Github,
  H1,
  Linkedin,
  Mail,
  P,
  Sync,
  Twitter
} from '@/components'
import { Container, VStack, Wrap } from '@/styled-system/jsx'

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
        <ButtonLink
          style="text"
          align="left"
          href="#"
          _hover={{
            '& > .icon': {
              transform: 'translateX(var(--spacing-s))'
            }
          }}
        >
          Move forward
          <ChevronForward
            className="icon"
            transform="translateX(var(--spacing-0))"
            transitionProperty="transform"
            transitionDuration="natural"
            transitionTimingFunction="easeInOut"
          ></ChevronForward>
        </ButtonLink>
        <Wrap>
          <ButtonLink href="#" style="icon">
            <Github></Github>
          </ButtonLink>
          <ButtonLink href="#" style="icon">
            <Dribbble></Dribbble>
          </ButtonLink>
          <ButtonLink href="#" style="icon">
            <Twitter></Twitter>
          </ButtonLink>
          <ButtonLink href="#" style="icon">
            <Facebook></Facebook>
          </ButtonLink>
          <ButtonLink href="#" style="icon">
            <Linkedin></Linkedin>
          </ButtonLink>
        </Wrap>
        <Wrap>
          <ButtonLink href="#" style="nav">
            Portfolio
          </ButtonLink>
          <ButtonLink href="#" style="nav">
            Blog
          </ButtonLink>
        </Wrap>
      </VStack>
    </Container>
  )
}
