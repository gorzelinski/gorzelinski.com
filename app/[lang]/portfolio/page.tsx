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
  Project,
  Small,
  verticalRhythm
} from '@/design-system'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)

  return {
    title: page.portfolio.metadata.title,
    description: page.portfolio.metadata.description
  }
}

export default async function Portfolio({ params: { lang } }: PageProps) {
  const { component, section, page } = await getDictionary(lang)
  const projects = await getMDXes<'project'>(LINKS.portfolio, lang)

  return (
    <>
      <section>
        <Header alignItems="baseline" css={verticalRhythm.marginBottom.l}>
          <H1>{page.portfolio.heading}</H1>
          <Small>{page.portfolio.all}</Small>
        </Header>

        <Grid
          gridTemplateColumns={{ base: '1', md: '2' }}
          css={verticalRhythm.gap.m}
        >
          {projects.map(({ frontmatter }) => (
            <Project
              key={frontmatter.slug}
              lang={lang}
              dictionary={component.project}
              title={frontmatter.title}
              description={frontmatter.description}
              image={frontmatter.image}
              deliverables={frontmatter.deliverables}
              slug={frontmatter.slug}
            />
          ))}
        </Grid>
      </section>
      <Newsletter dictionary={section.newsletter} />
    </>
  )
}
