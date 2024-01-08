import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { VStack } from '@/styled-system/jsx'
import { ButtonLink, H1 } from '@/design-system'

export default function About({
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
      <H1>About page</H1>
      <ButtonLink style="text" href={localizePath(lang, '/')}>
        Home
      </ButtonLink>
    </VStack>
  )
}
