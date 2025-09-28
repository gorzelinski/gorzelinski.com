import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next/server'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { getMDX, getDictionary } from '@/scripts'
import { generateAlternateLinks, getMetaImage, localizePath } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import {
  Article,
  Figcaption,
  Figure,
  H1,
  Image,
  P,
  verticalRhythm
} from '@/design-system'

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params

  const { lang } = params

  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.uses)
  const canonical = localizePath(LINKS.uses, lang)
  const metaImageParams = {
    theme: (await getCookie(COOKIES.theme, { cookies })) as Theme,
    title: page.uses.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.uses.metadata.image.alt
  }

  return {
    title: page.uses.metadata.title,
    description: page.uses.metadata.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.uses.metadata.title,
      description: page.uses.metadata.description,
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      title: page.uses.metadata.title,
      description: page.uses.metadata.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

export default async function Uses(props: PageProps) {
  const params = await props.params

  const { lang } = params

  const { layout, page } = await getDictionary(lang)
  const { frontmatter, content } = await getMDX(LINKS.uses, '', lang)
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.uses.metadata.title,
    description: page.uses.metadata.description,
    author: {
      '@type': 'Person',
      name: layout.root.metadata.author
    }
  }

  return (
    <>
      <script
        id="jsonld-uses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article>
        <H1 css={verticalRhythm.marginBottom.m}>{frontmatter.title}</H1>
        <P size="l" color="subtle" css={verticalRhythm.marginBottom.m}>
          {frontmatter.description}
        </P>
        <Figure
          marginX={{
            base: '-m',
            sm: '-l',
            md: '-xl',
            lg: '-2xl',
            xl: '-4xl'
          }}
          textAlign="center"
        >
          <Image
            aspectRatio="auto"
            src={`/images${LINKS.uses}${frontmatter.image.src}`}
            alt={frontmatter.image.alt}
            width={1200}
            height={888}
            priority={true}
          />
          <Figcaption
            style="italic"
            textAlign="center"
            css={verticalRhythm.marginTop.s}
          >
            {frontmatter.image.caption}
          </Figcaption>
        </Figure>
        {content}
      </Article>
    </>
  )
}
