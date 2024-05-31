import { Metadata } from 'next'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary } from '@/lib/dictionaries'
import { getMDXes } from '@/lib/mdx'
import { Grid } from '@/styled-system/jsx'
import {
  H1,
  Header,
  Newsletter,
  Post,
  Small,
  verticalRhythm
} from '@/design-system'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)

  return {
    title: page.blog.metadata.title,
    description: page.blog.metadata.description
  }
}

export default async function Blog({ params: { lang } }: PageProps) {
  const { component, section, page } = await getDictionary(lang)
  const posts = await getMDXes<'post'>(LINKS.blog, lang)

  return (
    <>
      <section>
        <Header alignItems="baseline" css={verticalRhythm.marginBottom.l}>
          <H1>{page.blog.heading}</H1>
          <Small>{page.blog.all}</Small>
        </Header>

        <Grid gridTemplateColumns="1" css={verticalRhythm.gap.m}>
          {posts.map(({ frontmatter }) => (
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
      <Newsletter dictionary={section.newsletter} />
    </>
  )
}
