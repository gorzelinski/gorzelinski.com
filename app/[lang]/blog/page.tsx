import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
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

export default async function Blog({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
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
            ></Post>
          ))}
        </Grid>
      </section>
      <Newsletter dictionary={section.newsletter} />
    </>
  )
}
