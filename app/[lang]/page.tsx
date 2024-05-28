import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
import { localizePath } from '@/lib'
import { getDictionary } from '@/lib/dictionaries'
import { getMDXes } from '@/lib/mdx'
import { Box } from '@/styled-system/jsx'
import {
  ButtonAnchor,
  ButtonLink,
  ChevronForward,
  H1,
  H2,
  Header,
  Image,
  Link,
  Newsletter,
  P,
  Post,
  Project,
  Section,
  Small,
  Socials,
  Typewriter
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
      <Section variant="hero" justifyItems="start">
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
      </Section>
      <Section columns="2">
        <Header>
          <H2>{home.projects.heading}</H2>
          <ButtonLink
            variant="text"
            href={localizePath(lang, LINKS.portfolio)}
            transition="moveIconForward"
          >
            {home.projects.link} <ChevronForward />
          </ButtonLink>
        </Header>
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
      </Section>
      <Section columns="2">
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
            transition="moveIconForward"
            href={localizePath(lang, LINKS.about)}
          >
            {home.bio.link} <ChevronForward />
          </ButtonLink>
        </Box>
      </Section>
      <Section>
        <Header>
          <H2>{home.posts.heading}</H2>
          <ButtonLink
            variant="text"
            transition="moveIconForward"
            href={localizePath(lang, LINKS.blog)}
          >
            {home.posts.link} <ChevronForward />
          </ButtonLink>
        </Header>
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
      </Section>
      <Newsletter dictionary={section.newsletter} />
      <Section
        id="contact"
        variant="hero"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
      >
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
      </Section>
    </>
  )
}
