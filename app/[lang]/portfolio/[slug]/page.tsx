import { Metadata } from 'next'
import { NestedPageProps } from '@/types'
import { LINKS } from '@/constants'
import { createPagination, getDictionary, getMDX } from '@/scripts'
import { openGraph } from '@/app/shared-metadata'
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

export async function generateMetadata({
  params: { lang, slug }
}: NestedPageProps): Promise<Metadata> {
  const { frontmatter } = await getMDX<'project'>(LINKS.portfolio, slug, lang)
  const { layout } = await getDictionary(lang)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      ...(await openGraph(lang)).openGraph,
      type: 'article',
      publishedTime: frontmatter.date.toISOString(),
      modifiedTime: frontmatter.updated.toISOString(),
      authors: layout.root.metadata.title
    }
  }
}

export default async function Portfolio({
  params: { lang, slug }
}: NestedPageProps) {
  const { component, section, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'project'>(
    LINKS.portfolio,
    slug,
    lang
  )
  const { prev, next } = await createPagination(LINKS.portfolio, slug, lang)

  return (
    <>
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
            gridTemplateColumns="2"
            gridTemplateRows="2"
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
      <Newsletter dictionary={section.newsletter} />
    </>
  )
}
