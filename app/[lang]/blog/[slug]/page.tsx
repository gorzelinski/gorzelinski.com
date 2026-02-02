import type { Metadata } from 'next'
import type { BlogPosting, WithContext } from 'schema-dts'
import type { NestedPageProps, Theme } from '@/types'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { COOKIES, LINKS } from '@/constants'
import { i18n } from '@/i18n.config'
import {
  createMDXPagination,
  getDictionary,
  getMDX,
  getRelatedMDXes,
  getMDXSlugs
} from '@/scripts'
import {
  generateAlternateLinks,
  getAbsoluteURL,
  getMetaImage,
  localizePath
} from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import {
  Article,
  H2,
  Newsletter,
  Pagination,
  Post,
  PostFooter,
  PostHeader,
  Progress,
  Section,
  SupportMe,
  Toc
} from '@/design-system'
import avatar from '@/public/images/logo.png'

export async function generateStaticParams() {
  const slugs = await getMDXSlugs(LINKS.blog)
  const params = slugs.flatMap((slug) => {
    return i18n.locales.map((lang) => ({
      lang,
      slug
    }))
  })

  return params
}

export async function generateMetadata(
  props: NestedPageProps
): Promise<Metadata> {
  const { lang, slug } = await props.params
  const { frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { layout, page } = await getDictionary(lang)
  const canonical = localizePath(`${LINKS.blog}${slug}/`, lang)
  const languages = generateAlternateLinks(canonical)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: frontmatter.title,
    subtitle: layout.root.metadata.title,
    alt: `${page.blogPost.metadata.image.alt} ${frontmatter.image.alt}`,
    backgroundURL: getAbsoluteURL(
      `/images${LINKS.blog}${slug}/${frontmatter.image.src}`,
      'en'
    )
  }

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
      images: getMetaImage('og', lang, metaImageParams),
      type: 'article',
      publishedTime: frontmatter.date.toISOString(),
      modifiedTime: frontmatter.updated.toISOString(),
      authors: layout.root.metadata.title
    },
    twitter: {
      ...twitter(),
      title: frontmatter.title,
      description: frontmatter.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function Blog(props: NestedPageProps) {
  const { lang, slug } = await props.params
  const { component, section, layout, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'post'>(LINKS.blog, slug, lang)
  const { prev, next } = await createMDXPagination(LINKS.blog, slug, lang)
  const relatedPosts = await getRelatedMDXes<'post'>(
    frontmatter,
    LINKS.blog,
    lang,
    3
  )
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: getAbsoluteURL(`${LINKS.blog}${slug}/`, lang),
    inLanguage: lang,
    headline: frontmatter.title,
    description: frontmatter.description,
    dateCreated: frontmatter.date.toISOString(),
    datePublished: frontmatter.date.toISOString(),
    dateModified: frontmatter.updated.toISOString(),
    keywords: frontmatter.tags,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        id={`jsonld-blog-post-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article>
        <Progress selector="article" />
        <Toc ariaLabel={component.toc.ariaLabel} />
        <PostHeader
          lang={lang}
          slug={slug}
          frontmatter={frontmatter}
          dictionary={component.post}
        />
        {content}
        <PostFooter
          frontmatter={frontmatter}
          dictionary={component.post}
          avatar={{
            image: avatar,
            name: component.avatar.name,
            bio: component.avatar.bio,
            href: localizePath(LINKS.about, lang)
          }}
        />
      </Article>
      <Pagination prev={prev} next={next} dictionary={component.pagination} />
      <SupportMe lang={lang} dictionary={section.supportMe} />
      <Newsletter lang={lang} dictionary={section.newsletter} />
      {relatedPosts.length > 0 && (
        <Section columns="1">
          <H2>{page.blogPost.related}</H2>
          {relatedPosts.map(({ frontmatter }) => (
            <Post
              key={frontmatter.slug}
              lang={lang}
              frontmatter={frontmatter}
              dictionary={component.post}
            />
          ))}
        </Section>
      )}
    </>
  )
}
