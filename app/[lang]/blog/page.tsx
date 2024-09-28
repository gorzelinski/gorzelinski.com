import { Metadata } from 'next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'
import { generateAlternateLinks, getMetaImage } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { H1, Header, Newsletter, Post, Section } from '@/design-system'
import { small } from '@/design-system/elements/small'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.blog)
  const metaImageParams = {
    title: page.blog.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.blog.metadata.image.alt
  }

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
      description: page.blog.metadata.description,
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      title: page.blog.metadata.title,
      description: page.blog.metadata.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function Blog({ params: { lang } }: PageProps) {
  const { component, section, layout, page } = await getDictionary(lang)
  const posts = await getMDXes<'post'>(LINKS.blog, lang, 'all', 'desc')
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.blog.metadata.title,
    description: page.blog.metadata.description,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section columns="1">
        <Header alignItems="baseline">
          <H1>{page.blog.heading}</H1>
          <h2 className={small()}>{page.blog.all}</h2>
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
