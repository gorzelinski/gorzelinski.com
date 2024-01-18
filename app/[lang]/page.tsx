import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { VStack } from '@/styled-system/jsx'
import { ButtonLink, H1, P, Typewriter } from '@/design-system'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <VStack
      maxWidth="breakpoint-md"
      alignItems="start"
      gap="l"
      height="100svh"
      justifyContent="center"
    >
      <H1>
        I{' '}
        <Typewriter words={['code', 'design', 'write', 'create']}></Typewriter>
        <br />
        things on the Internet
      </H1>
      <P size="xl">
        I help individuals and small businesses step into the XXI century. I
        create personalized websites for them, ensuring a professional online
        presence.
      </P>
      <ButtonLink href={localizePath(lang, '/about/')}>About</ButtonLink>
    </VStack>
  )
}
