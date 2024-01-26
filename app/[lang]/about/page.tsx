import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { ButtonLink, H1, Hero } from '@/design-system'

export default function About({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <Hero>
      <H1>About page</H1>
      <ButtonLink style="text" href={localizePath(lang, '/')}>
        Home
      </ButtonLink>
    </Hero>
  )
}
