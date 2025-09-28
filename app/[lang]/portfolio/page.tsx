import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { getDictionary, getMDXes } from '@/scripts'
import { generateAlternateLinks, getMetaImage, localizePath } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { H1, Header, Newsletter, Project, Section } from '@/design-system'
import { small } from '@/design-system/elements/small'

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params

  const { lang } = params

  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.portfolio)
  const canonical = localizePath(LINKS.portfolio, lang)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: page.portfolio.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.portfolio.metadata.image.alt
  }

  return {
    title: page.portfolio.metadata.title,
    description: page.portfolio.metadata.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.portfolio.metadata.title,
      description: page.portfolio.metadata.description,
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      title: page.portfolio.metadata.title,
      description: page.portfolio.metadata.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function Portfolio(props: PageProps) {
  const params = await props.params

  const { lang } = params

  const { component, section, layout, page } = await getDictionary(lang)
  const projects = await getMDXes<'project'>(
    LINKS.portfolio,
    lang,
    'all',
    'desc'
  )
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.portfolio.metadata.title,
    description: page.portfolio.metadata.description,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        id="jsonld-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section columns="2">
        <Header alignItems="baseline">
          <H1>{page.portfolio.heading}</H1>
          <h2 className={small()}>{page.portfolio.all}</h2>
        </Header>
        {projects.map(({ frontmatter }, index) => (
          <Project
            key={frontmatter.slug}
            lang={lang}
            dictionary={component.project}
            title={frontmatter.title}
            description={frontmatter.description}
            image={frontmatter.image}
            deliverables={frontmatter.deliverables}
            slug={frontmatter.slug}
            priority={index < 2}
          />
        ))}
      </Section>
      <Newsletter lang={lang} dictionary={section.newsletter} />
    </>
  )
}
