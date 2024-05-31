import { Metadata } from 'next'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary } from '@/lib/dictionaries'
import { getMDXes } from '@/lib/mdx'
import {
  H1,
  Header,
  Newsletter,
  Project,
  Section,
  Small
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
      <Section columns="2">
        <Header alignItems="baseline">
          <H1>{page.portfolio.heading}</H1>
          <Small>{page.portfolio.all}</Small>
        </Header>
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
      </Section>
      <Newsletter dictionary={section.newsletter} />
    </>
  )
}
