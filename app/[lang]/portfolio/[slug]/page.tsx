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
  getMDXSlugs
} from '@/scripts'
import {
  generateAlternateLinks,
  getAbsoluteURL,
  getMetaImage,
  localizePath
} from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { Article, Newsletter, Pagination, ProjectHeader } from '@/design-system'

export async function generateStaticParams() {
  const slugs = await getMDXSlugs(LINKS.portfolio)
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
  const { frontmatter } = await getMDX<'project'>(LINKS.portfolio, slug, lang)
  const { layout, page } = await getDictionary(lang)
  const canonical = localizePath(`${LINKS.portfolio}${slug}/`, lang)
  const languages = generateAlternateLinks(canonical)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: frontmatter.title,
    subtitle: layout.root.metadata.title,
    alt: `${page.portfolioProject.metadata.image.alt} ${frontmatter.image.alt}`,
    backgroundURL: getAbsoluteURL(
      `/images${LINKS.portfolio}${slug}/${frontmatter.image.src}`,
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

export default async function Portfolio(props: NestedPageProps) {
  const { lang, slug } = await props.params
  const { component, section, layout, page } = await getDictionary(lang)
  const { content, frontmatter } = await getMDX<'project'>(
    LINKS.portfolio,
    slug,
    lang
  )
  const { prev, next } = await createMDXPagination(LINKS.portfolio, slug, lang)
  const jsonLd: WithContext<BlogPosting> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: getAbsoluteURL(`${LINKS.portfolio}${slug}/`, lang),
    inLanguage: lang,
    headline: frontmatter.title,
    description: frontmatter.description,
    dateCreated: frontmatter.date.toISOString(),
    datePublished: frontmatter.date.toISOString(),
    dateModified: frontmatter.updated.toISOString(),
    keywords: frontmatter.services,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        key={`jsonld-portfolio-project-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article>
        <ProjectHeader
          slug={slug}
          frontmatter={frontmatter}
          dictionary={component.project}
        />
        {content}
      </Article>
      <Pagination prev={prev} next={next} dictionary={component.pagination} />
      <Newsletter lang={lang} dictionary={section.newsletter} />
    </>
  )
}
