import { Locale } from '@/i18n.config'
import { LINKS } from '@/constants'
import { formatDate, formatReadingTime } from '@/lib'
import { getMDX, getRelatedPosts } from '@/lib/mdx'
import { getDictionary } from '@/lib/dictionaries'
import { Grid, HStack, VStack } from '@/styled-system/jsx'
import {
  Article,
  Figcaption,
  Figure,
  H1,
  H2,
  Image,
  Newsletter,
  P,
  Pill,
  Post,
  Progress,
  Small,
  Socials,
  verticalRhythm
} from '@/design-system'

export default async function Blog({
  params: { lang, slug }
}: {
  params: {
    lang: Locale
    slug: string
  }
}) {
  const { component, section, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
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
            <Pill>
              {page.blogPost.updated} {formatDate(frontmatter.updated, lang)}
            </Pill>
            <HStack css={verticalRhythm.gap.s}>
              <Small>{page.blogPost.share}</Small>
              <Socials title={frontmatter.title} />
            </HStack>
          </VStack>
        </footer>
      </Article>
      <Newsletter dictionary={section.newsletter} />
      {relatedPosts.length > 0 && (
        <section>
          <H2 css={verticalRhythm.marginBottom.m}>{page.blogPost.related}</H2>
          <Grid gridTemplateColumns="1" css={verticalRhythm.gap.m}>
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
          </Grid>
        </section>
      )}
    </>
  )
}
