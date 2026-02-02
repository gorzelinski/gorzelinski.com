import type { Metadata } from 'next'
import type { BlogPosting, WithContext } from 'schema-dts'
import type { NestedPageProps, Theme } from '@/types'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { COOKIES, LINKS } from '@/constants'
import { i18n } from '@/i18n.config'
import {
  createMDXPagination,
  getDictionary,
  getMDX,
  getRelatedMDXes,
  getMDXSlugs
} from '@/scripts'
import {
  formatDate,
  generateAlternateLinks,
  getAbsoluteURL,
  getMetaImage,
  localizePath
} from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { HStack, VStack } from '@/styled-system/jsx'
import {
  Article,
  Avatar,
  Figcaption,
  Figure,
  H1,
  H2,
  Image,
  Newsletter,
  P,
  Pagination,
  Pill,
  Post,
  PostTime,
  Progress,
  Section,
  Socials,
  Span,
  SupportMe,
  Toc,
  verticalRhythm
} from '@/design-system'
import avatar from '@/public/images/logo.png'

export async function generateStaticParams() {
  const slugs = await getMDXSlugs(LINKS.blog)
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
  const { frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { layout, page } = await getDictionary(lang)
  const canonical = localizePath(`${LINKS.blog}${slug}/`, lang)
  const languages = generateAlternateLinks(canonical)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: frontmatter.title,
    subtitle: layout.root.metadata.title,
    alt: `${page.blogPost.metadata.image.alt} ${frontmatter.image.alt}`,
    backgroundURL: getAbsoluteURL(
      `/images${LINKS.blog}${slug}/${frontmatter.image.src}`,
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

export default async function Blog(props: NestedPageProps) {
  const { lang, slug } = await props.params
  const { component, section, layout, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { prev, next } = await createMDXPagination(LINKS.blog, slug, lang)
  const relatedPosts = await getRelatedMDXes(frontmatter, LINKS.blog, lang, 3)
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: getAbsoluteURL(`${LINKS.blog}${slug}/`, lang),
    inLanguage: lang,
    headline: frontmatter.title,
    description: frontmatter.description,
    dateCreated: frontmatter.date.toISOString(),
    datePublished: frontmatter.date.toISOString(),
    dateModified: frontmatter.updated.toISOString(),
    keywords: frontmatter.tags,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        id={`jsonld-blog-post-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article>
        <Progress selector="article" />
        <Toc ariaLabel={component.toc.ariaLabel} />
        <header>
          <PostTime
            date={frontmatter.date}
            readingTime={frontmatter.readingTime}
            lang={lang}
            dictionary={component.post}
          />
          <H1
            css={{
              ...verticalRhythm.marginTop.s,
              ...verticalRhythm.marginBottom.m
            }}
          >
            {frontmatter.title}
          </H1>
          <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
            {frontmatter.description}
          </P>
          <Pill css={verticalRhythm.marginBottom.s}>
            {page.blogPost.updated}: {formatDate(frontmatter.updated, lang)}
          </Pill>
          <Figure
            css={verticalRhythm.marginBottom.m}
            margin="bleed"
            textAlign="center"
          >
            <Image
              aspectRatio="cinema"
              src={`/images${LINKS.blog}${slug}/${frontmatter.image.src}`}
              alt={frontmatter.image.alt}
              width={1200}
              height={675}
              priority={true}
            />
            <Figcaption
              style="italic"
              textAlign="center"
              css={verticalRhythm.marginTop.s}
            >
              {frontmatter.image.caption}
            </Figcaption>
          </Figure>
        </header>
        {content}
        <footer>
          <VStack
            alignItems="start"
            css={{
              ...verticalRhythm.gap.s,
              ...verticalRhythm.marginTop['2xmarginBottom']
            }}
          >
            <HStack css={verticalRhythm.gap.s}>
              <Span>{page.blogPost.share}</Span>
              <Socials title={frontmatter.title} />
            </HStack>
            <Avatar
              image={avatar}
              name={component.avatar.name}
              bio={component.avatar.bio}
              href={localizePath(LINKS.about, lang)}
            />
          </VStack>
        </footer>
      </Article>
      <Pagination prev={prev} next={next} dictionary={component.pagination} />
      <SupportMe lang={lang} dictionary={section.supportMe} />
      <Newsletter lang={lang} dictionary={section.newsletter} />
      {relatedPosts.length > 0 && (
        <Section columns="1">
          <H2>{page.blogPost.related}</H2>
          {relatedPosts.map(({ frontmatter }) => (
            <Post
              key={frontmatter.slug}
              lang={lang}
              dictionary={component.post}
              image={frontmatter.image}
              date={frontmatter.date}
              readingTime={frontmatter.readingTime}
              title={frontmatter.title}
              description={frontmatter.description}
              slug={frontmatter.slug}
            />
          ))}
        </Section>
      )}
    </>
  )
}
