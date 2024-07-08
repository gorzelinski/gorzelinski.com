import { Metadata } from 'next'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'
import { generateAlternateLinks } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { H1, Header, Newsletter, Post, Section, Small } from '@/design-system'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.blog)

  return {
    title: page.blog.metadata.title,
    description: page.blog.metadata.description,
    alternates: {
      canonical: LINKS.blog,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.blog.metadata.title,
      description: page.blog.metadata.description
    },
    twitter: {
      ...twitter(),
      title: page.blog.metadata.title,
      description: page.blog.metadata.description
    }
  }
}

export default async function Blog({ params: { lang } }: PageProps) {
  const { component, section, page } = await getDictionary(lang)
  const posts = await getMDXes<'post'>(LINKS.blog, lang)

  return (
    <>
      <Section columns="1">
        <Header alignItems="baseline">
          <H1>{page.blog.heading}</H1>
          <Small>{page.blog.all}</Small>
        </Header>
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
      </Section>
      <Newsletter lang={lang} dictionary={section.newsletter} />
    </>
  )
}
