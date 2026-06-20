import type { Locale } from '@/types'

import { getCookie } from 'cookies-next/server'
import { cookies } from 'next/headers'

import { COOKIES, LINKS } from '@/constants'
import {
  ButtonLink,
  ChevronForward,
  H1,
  P,
  Section,
  verticalRhythm,
  Video
} from '@/design-system'
import { localizePath } from '@/lib'
import { getDictionary } from '@/scripts'
import { VStack } from '@/styled-system/jsx'

export default async function NotFound() {
  const lang = ((await getCookie(COOKIES.locale, { cookies })) ||
    'en') as Locale
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
          href={localizePath(LINKS.home, lang)}
        >
          {page.notFound.button} <ChevronForward />
        </ButtonLink>
      </VStack>
    </Section>
  )
}
