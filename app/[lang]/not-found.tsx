import { cookies } from 'next/headers'
import { Locale } from '@/i18n.config'
import { COOKIES, LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
import { localizePath } from '@/lib'
import {
  ButtonLink,
  ChevronForward,
  H1,
  P,
  Section,
  Video,
  verticalRhythm
} from '@/design-system'
import { VStack } from '@/styled-system/jsx'

export default async function NotFound() {
  const lang = cookies().get(COOKIES.locale)?.value as Locale
  const { page } = await getDictionary(lang)

  return (
    <Section columns="2">
      <Video autoPlay muted loop>
        <source type="video/webm" src="/videos/spanish-inquisition.webm" />
        <source type="video/mp4" src="/videos/spanish-inquisition.mp4" />
      </Video>
      <VStack alignItems="start" css={verticalRhythm.gap.m}>
        <H1 size="m">{page.notFound.heading}</H1>
        <P size="l" color="subtle">
          {page.notFound.description}
        </P>
        <ButtonLink
          align="left"
          variant="text"
          transition="moveIconForward"
          href={localizePath(lang, LINKS.home)}
        >
          {page.notFound.button} <ChevronForward />
        </ButtonLink>
      </VStack>
    </Section>
  )
}
