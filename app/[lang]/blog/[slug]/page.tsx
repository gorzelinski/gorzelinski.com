import { Metadata } from 'next'
import { NestedPageProps } from '@/types'
import { LINKS } from '@/constants'
import {
  createPagination,
  getDictionary,
  getMDX,
  getRelatedPosts
} from '@/scripts'
import {
  formatDate,
  formatReadingTime,
  generateAlternateLinks,
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
  Progress,
  Section,
  Small,
  Socials,
  verticalRhythm
} from '@/design-system'
import avatar from '@/public/images/logo.png'

export async function generateMetadata({
  params: { lang, slug }
}: NestedPageProps): Promise<Metadata> {
  const { frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { layout } = await getDictionary(lang)
  const canonical = `${LINKS.blog}${slug}/`
  const languages = generateAlternateLinks(canonical)

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
      type: 'article',
      publishedTime: frontmatter.date.toISOString(),
      modifiedTime: frontmatter.updated.toISOString(),
      authors: layout.root.metadata.title
    },
    twitter: {
      ...twitter(),
      title: frontmatter.title,
      description: frontmatter.description
    }
  }
}

export default async function Blog({
  params: { lang, slug }
}: NestedPageProps) {
  const { component, section, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { prev, next } = await createPagination(LINKS.blog, slug, lang)
  const relatedPosts = await getRelatedPosts(frontmatter, lang, 3)

  return (
    <>
      <Article>
        <Progress selector="article" />
        <header>
          <Small css={verticalRhythm.marginBottom.s}>
            {formatDate(frontmatter.date, lang)} •{' '}
            {formatReadingTime(frontmatter.readingTime.minutes)}{' '}
            {component.post.min}
          </Small>
          <H1 css={verticalRhythm.marginBottom.m}>{frontmatter.title}</H1>
          <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
            {frontmatter.description}
          </P>
          <Pill css={verticalRhythm.marginBottom.s}>
            {page.blogPost.updated}: {formatDate(frontmatter.updated, lang)}
          </Pill>
          <Figure
            marginX={{
              base: '-m',
              sm: '-l',
              md: '-xl',
              lg: '-2xl',
              xl: '-4xl'
            }}
            css={verticalRhythm.marginBottom.m}
            textAlign="center"
          >
            <Image
              aspectRatio="cinema"
              src={`/images${LINKS.blog}${slug}/${frontmatter.image.src}`}
              alt={frontmatter.image.alt}
              width={1200}
              height={675}
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
              <Small>{page.blogPost.share}</Small>
              <Socials title={frontmatter.title} />
            </HStack>
            <Avatar
              image={avatar}
              name={component.avatar.name}
              bio={component.avatar.bio}
              href={localizePath(lang, LINKS.about)}
            />
          </VStack>
        </footer>
      </Article>
      <Pagination prev={prev} next={next} dictionary={component.pagination} />
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
