import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { Box } from '@/styled-system/jsx'
import {
  ButtonLink,
  Card,
  ChevronForward,
  Featured,
  H1,
  H2,
  H3,
  Hero,
  P,
  Small,
  Split,
  Typewriter
} from '@/design-system'
import profile from '../../public/gorzelinski.jpg'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <>
      <Hero
        marginBottom={{
          base: '-2xl',
          md: '-3xl',
          xl: '-4xl'
        }}
      >
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
      <Split>
        <Image
          src={profile}
          alt="Profile picture where I'm in a white t-shirt on gray gradient background."
        />
        <Box>
          <Small>Hello, my name is</Small>
          <H2>Matthew Gorzelinski</H2>
          <P>I’m an engineer and humanist. In one? Is it legal?</P>
          <P>
            I develop my technical skills and humanistic interests by designing,
            coding, and writing content for websites. I mainly use Figma,
            JAMstack, pen, and paper as my tools. You can find the effects of
            that development in my portfolio.
          </P>
          <P>
            If you’re interested in more details about my stuff, you can check
            what else I use.
          </P>
          <P>
            I learn new things daily, explore different fields of knowledge,
            rummage around the web, theorize, and analyze too much. I share my
            findings and thoughts on my blog.
          </P>
          <ButtonLink
            align="left"
            style="text"
            href={localizePath(lang, '/about/')}
          >
            Read my story <ChevronForward />
          </ButtonLink>
        </Box>
      </Split>
    </>
  )
}
