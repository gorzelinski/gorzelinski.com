import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'
import { generateAlternateLinks, getMetaImage, localizePath } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { H1, Header, Newsletter, Post, Section } from '@/design-system'
import { small } from '@/design-system/elements/small'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.blog)
  const canonical = localizePath(LINKS.blog, lang)
  const metaImageParams = {
    theme: getCookie(COOKIES.theme, { cookies }) as Theme,
    title: page.blog.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.blog.metadata.image.alt
  }

  return {
    title: page.blog.metadata.title,
    description: page.blog.metadata.description,
    alternates: {
      canonical,
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
        {posts.map(({ frontmatter }, index) => (
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
            priority={index < 3}
          />
        ))}
      </Section>
      <Newsletter lang={lang} dictionary={section.newsletter} />
    </>
  )
}
