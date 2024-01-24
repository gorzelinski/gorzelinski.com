import { Locale } from '@/i18n.config'
import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import {
  ButtonLink,
  Card,
  Featured,
  H1,
  H3,
  Hero,
  P,
  Typewriter
} from '@/design-system'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <>
      <Hero>
        <H1>
          I{' '}
          <Typewriter
            words={['code', 'design', 'write', 'create']}
          ></Typewriter>
          <br />
          things on the Internet
        </H1>
        <P size="l">
          I help individuals and small businesses step into the XXI century. I
          create personalized websites for them, ensuring a professional online
          presence.
        </P>
        <ButtonLink href={localizePath(lang, LINKS.about)}>About</ButtonLink>
      </Hero>
      <Featured
        heading="Last projects"
        link={{
          text: 'All projects',
          href: localizePath(lang, LINKS.portfolio)
        }}
      >
        <Card>
          <H3>This is heading</H3>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            praesentium eveniet cum soluta? Perferendis placeat dolore
            recusandae! Facilis in velit id hic quas earum esse eveniet,
            similique vitae cum. Labore excepturi culpa, nostrum totam est
            maxime ipsa dicta incidunt molestias et quia nisi dignissimos ea ex
            quidem deleniti, obcaecati maiores?
          </P>
        </Card>
      </Featured>
    </>
  )
}
