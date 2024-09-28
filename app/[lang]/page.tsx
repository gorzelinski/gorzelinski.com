import { Metadata } from 'next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { generateAlternateLinks, localizePath } from '@/lib'
import { getDictionary, getMDXes } from '@/scripts'
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

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.home)

  return {
    title: page.home.metadata.title,
    description: page.home.metadata.description,
    alternates: {
      canonical: LINKS.home,
      languages
    }
  }
}

export default async function Home({ params: { lang } }: PageProps) {
  const { component, section, layout, page } = await getDictionary(lang)
  const lastProjects = await getMDXes<'project'>(
    LINKS.portfolio,
    lang,
    2,
    'desc'
  )
  const lastPosts = await getMDXes<'post'>(LINKS.blog, lang, 4, 'desc')
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.home.metadata.title,
    description: page.home.metadata.description,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section variant="hero" justifyItems="start">
        <H1 aria-label={page.home.landing.typewriter.create}>
          <Typewriter
            words={[
              page.home.landing.typewriter.design,
              page.home.landing.typewriter.code,
              page.home.landing.typewriter.write,
              page.home.landing.typewriter.create
            ]}
          />
        </H1>
        <P size="xl" color="subtle">
          {page.home.landing.description}
        </P>
        <ButtonLink alignSelf="start" href="#contact">
          {page.home.landing.button}
        </ButtonLink>
      </Section>
      <Section columns="2">
        <Header>
          <H2>{page.home.projects.heading}</H2>
          <ButtonLink
            variant="text"
            href={localizePath(LINKS.portfolio, lang)}
            transition="moveIconForward"
          >
            {page.home.projects.link} <ChevronForward />
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
          alt={page.home.bio.image.alt}
          title={page.home.bio.image.title}
          borderRadius="rounded"
        />
        <Box>
          <Small marginBottom="1rem">{page.home.bio.greeting}</Small>
          <H2 marginBottom="1rem">{page.home.bio.heading}</H2>
          <P marginBottom="1rem">{page.home.bio.brief}</P>
          {page.home.bio.activities.map((activity) => (
            <P key={activity.link} marginBottom="1rem">
              {activity.mention}{' '}
              <Link href={localizePath(activity.href, lang)}>
                {activity.link}
              </Link>
              .
            </P>
          ))}
          <ButtonLink
            align="left"
            variant="text"
            transition="moveIconForward"
            href={localizePath(LINKS.about, lang)}
          >
            {page.home.bio.link} <ChevronForward />
          </ButtonLink>
        </Box>
      </Section>
      <Section>
        <Header>
          <H2>{page.home.posts.heading}</H2>
          <ButtonLink
            variant="text"
            transition="moveIconForward"
            href={localizePath(LINKS.blog, lang)}
          >
            {page.home.posts.link} <ChevronForward />
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
      <Newsletter lang={lang} dictionary={section.newsletter} />
      <Section
        id="contact"
        variant="hero"
        justifyItems="center"
        alignItems="center"
        textAlign="center"
      >
        <H2>{page.home.contact.heading}</H2>
        <P>{page.home.contact.description}</P>
        <ButtonAnchor
          align="left"
          variant="outline"
          href={`mailto:${LINKS.email}`}
        >
          {page.home.contact.button}
        </ButtonAnchor>
        <Socials />
      </Section>
    </>
  )
}
