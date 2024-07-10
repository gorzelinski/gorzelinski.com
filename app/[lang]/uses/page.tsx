import { Metadata } from 'next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps } from '@/types'
import { LINKS } from '@/constants'
import { getMDX, getDictionary } from '@/scripts'
import { generateAlternateLinks } from '@/lib'
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

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.uses)

  return {
    title: page.uses.metadata.title,
    description: page.uses.metadata.description,
    alternates: {
      canonical: LINKS.uses,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.uses.metadata.title,
      description: page.uses.metadata.description
    },
    twitter: {
      ...twitter(),
      title: page.uses.metadata.title,
      description: page.uses.metadata.description
    }
  }
}

export default async function Uses({ params: { lang } }: PageProps) {
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
            aspectRatio="cinema"
            src={`/images${LINKS.uses}${frontmatter.image.src}`}
            alt={frontmatter.image.alt}
            width={1200}
            height={675}
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
            aspectRatio="cinema"
            src={`/images${LINKS.uses}${frontmatter.image.src}`}
            alt={frontmatter.image.alt}
            width={1200}
            height={675}
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
