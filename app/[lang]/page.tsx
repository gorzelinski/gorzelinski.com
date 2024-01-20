import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { ButtonLink, H1, Hero, P, Typewriter } from '@/design-system'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <Hero>
      <H1>
        I{' '}
        <Typewriter words={['code', 'design', 'write', 'create']}></Typewriter>
        <br />
        things on the Internet
      </H1>
      <P size="l">
        I help individuals and small businesses step into the XXI century. I
        create personalized websites for them, ensuring a professional online
        presence.
      </P>
      <ButtonLink href={localizePath(lang, '/about/')}>About</ButtonLink>
    </Hero>
  )
}
