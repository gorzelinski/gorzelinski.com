import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { BlogPosting, WithContext } from 'schema-dts'
import { NestedPageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { i18n } from '@/i18n.config'
import {
  createMDXPagination,
  getDictionary,
  getMDX,
  getMDXSlugs
} from '@/scripts'
import {
  generateAlternateLinks,
  getAbsoluteURL,
  getMetaImage,
  localizePath
} from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { Box, Grid, VStack } from '@/styled-system/jsx'
import {
  Article,
  H1,
  H2,
  Image,
  LinkOrA,
  Newsletter,
  P,
  Pagination,
  Small,
  verticalRhythm
} from '@/design-system'

export async function generateStaticParams() {
  const slugs = await getMDXSlugs(LINKS.portfolio)
  const params = slugs.flatMap((slug) => {
    return i18n.locales.map((lang) => ({
      lang,
      slug
    }))
  })

  return params
}

export async function generateMetadata(
  props: NestedPageProps
): Promise<Metadata> {
  const { lang, slug } = await props.params
  const { frontmatter } = await getMDX<'project'>(LINKS.portfolio, slug, lang)
  const { layout, page } = await getDictionary(lang)
  const canonical = localizePath(`${LINKS.portfolio}${slug}/`, lang)
  const languages = generateAlternateLinks(canonical)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: frontmatter.title,
    subtitle: layout.root.metadata.title,
    alt: `${page.portfolioProject.metadata.image.alt} ${frontmatter.image.alt}`,
    backgroundURL: getAbsoluteURL(
      `/images${LINKS.portfolio}${slug}/${frontmatter.image.src}`,
      'en'
    )
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: frontmatter.title,
      description: frontmatter.description,
      images: getMetaImage('og', lang, metaImageParams),
      type: 'article',
      publishedTime: frontmatter.date.toISOString(),
      modifiedTime: frontmatter.updated.toISOString(),
      authors: layout.root.metadata.title
    },
    twitter: {
      ...twitter(),
      title: frontmatter.title,
      description: frontmatter.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function Portfolio(props: NestedPageProps) {
  const { lang, slug } = await props.params
  const { component, section, layout, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'project'>(
    LINKS.portfolio,
    slug,
    lang
  )
  const { prev, next } = await createMDXPagination(LINKS.portfolio, slug, lang)
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: getAbsoluteURL(`${LINKS.portfolio}${slug}/`, lang),
    inLanguage: lang,
    headline: frontmatter.title,
    description: frontmatter.description,
    dateCreated: frontmatter.date.toISOString(),
    datePublished: frontmatter.date.toISOString(),
    dateModified: frontmatter.updated.toISOString(),
    keywords: frontmatter.services,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        key={`jsonld-portfolio-project-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article>
        <header>
          <Box
            marginX={{
              base: '-m',
              sm: '-l',
              md: '-xl',
              lg: '-2xl',
              xl: '-4xl'
            }}
          >
            <Image
              aspectRatio="cinema"
              src={`/images${LINKS.portfolio}${slug}/${frontmatter.image.src}`}
              alt={frontmatter.image.alt}
              width={1200}
              height={675}
              priority={true}
            />
          </Box>
          <H1
            css={{
              ...verticalRhythm.marginTop['2xmarginBottom'],
              ...verticalRhythm.marginBottom.m
            }}
          >
            {frontmatter.title}
          </H1>
          <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
            {frontmatter.description}
          </P>
          <Grid
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="auto auto"
            css={verticalRhythm.gap.m}
          >
            <VStack alignItems="start" gap="s">
              <Small>{page.portfolioProject.services}</Small>
              <H2 size="s">{frontmatter.services.join(', ')}</H2>
            </VStack>
            <VStack alignItems="start" gap="s">
              <Small>{page.portfolioProject.client}</Small>
              <H2 size="s">{frontmatter.client}</H2>
            </VStack>
            <VStack alignItems="start" gap="s">
              <Small>{page.portfolioProject.deliverables}</Small>
              <H2 size="s">{frontmatter.deliverables.join(', ')}</H2>
            </VStack>
            <VStack alignItems="start" gap="s">
              <Small>{page.portfolioProject.links}</Small>
              {frontmatter.links.map((link) => (
                <H2 size="s" key={link.text}>
                  <LinkOrA href={link.href}>{link.text}</LinkOrA>
                </H2>
              ))}
            </VStack>
          </Grid>
        </header>
        {content}
      </Article>
      <Pagination prev={prev} next={next} dictionary={component.pagination} />
      <Newsletter lang={lang} dictionary={section.newsletter} />
    </>
  )
}
