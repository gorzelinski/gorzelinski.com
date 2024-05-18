import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { getDictionary } from '@/lib/dictionaries'
import { getMDXes } from '@/lib/mdx'
import { Box, Grid } from '@/styled-system/jsx'
import {
  ButtonAnchor,
  ButtonLink,
  ChevronForward,
  Featured,
  H1,
  H2,
  Hero,
  Image,
  Link,
  Newsletter,
  P,
  Post,
  Project,
  Small,
  Socials,
  Split,
  Typewriter,
  verticalRhythm
} from '@/design-system'
import profile from '@/public/images/gorzelinski.jpg'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  const {
    page: { home },
    component,
    section
  } = await getDictionary(lang)
  const lastProjects = await getMDXes<'project'>(LINKS.portfolio, lang, 2)
  const lastPosts = await getMDXes<'post'>(LINKS.blog, lang, 4)

  return (
    <>
      <Hero>
        <H1 aria-label={home.landing.typewriter.create}>
          <Typewriter
            words={[
              home.landing.typewriter.design,
              home.landing.typewriter.code,
              home.landing.typewriter.write,
              home.landing.typewriter.create
            ]}
          />
        </H1>
        <P size="xl" color="subtle">
          {home.landing.description}
        </P>
        <ButtonLink alignSelf="start" href="#contact">
          {home.landing.button}
        </ButtonLink>
      </Hero>
      <Featured
        heading={home.projects.heading}
        link={{
          text: home.projects.link,
          href: localizePath(lang, LINKS.portfolio)
        }}
      >
        <Grid
          gridTemplateColumns={{ base: '1', sm: '2' }}
          css={verticalRhythm.gap.m}
        >
          {lastProjects.map(({ frontmatter }) => (
            <Project
              key={frontmatter.slug}
              lang={lang}
              dictionary={component.project}
              image={frontmatter.image}
              deliverables={frontmatter.deliverables}
              title={frontmatter.title}
              description={frontmatter.description}
              slug={frontmatter.slug}
            />
          ))}
        </Grid>
      </Featured>
      <Split>
        <Image
          src={profile}
          alt={home.bio.image.alt}
          title={home.bio.image.title}
          borderRadius="rounded"
        />
        <Box>
          <Small marginBottom="1rem">{home.bio.greeting}</Small>
          <H2 marginBottom="1rem">{home.bio.heading}</H2>
          <P marginBottom="1rem">{home.bio.brief}</P>
          {home.bio.activities.map((activity) => (
            <P key={activity.link} marginBottom="1rem">
              {activity.mention}{' '}
              <Link href={activity.href}>{activity.link}</Link>.
            </P>
          ))}
          <ButtonLink
            align="left"
            variant="text"
            href={localizePath(lang, LINKS.about)}
            transition="moveIconForward"
          >
            {home.bio.link} <ChevronForward />
          </ButtonLink>
        </Box>
      </Split>
      <Featured
        heading={home.posts.heading}
        link={{
          text: home.posts.link,
          href: localizePath(lang, LINKS.blog)
        }}
      >
        <Grid gridTemplateColumns="1" css={verticalRhythm.gap.m}>
          {lastPosts.map(({ frontmatter }) => (
            <Post
              key={frontmatter.slug}
              lang={lang}
              dictionary={component.post}
              slug={frontmatter.slug}
              date={frontmatter.date}
              readingTime={frontmatter.readingTime}
              title={frontmatter.title}
              description={frontmatter.description}
              image={frontmatter.image}
            />
          ))}
        </Grid>
      </Featured>
      <Newsletter dictionary={section.newsletter} />
      <Hero id="contact" align="center">
        <H2>{home.contact.heading}</H2>
        <P>{home.contact.description}</P>
        <ButtonAnchor
          align="left"
          variant="outline"
          href={`mailto:${LINKS.email}`}
        >
          {home.contact.button}
        </ButtonAnchor>
        <Socials />
      </Hero>
    </>
  )
}
