import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'
import { WebPage, WithContext } from 'schema-dts'
import { PageProps, Theme } from '@/types'
import { COOKIES, LINKS } from '@/constants'
import { getDictionary } from '@/scripts'
import { generateAlternateLinks, getMetaImage, localizePath } from '@/lib'
import { openGraph, twitter } from '@/app/shared-metadata'
import { VStack } from '@/styled-system/jsx'
import {
  Book,
  ButtonAnchor,
  ButtonLink,
  Card,
  ChevronForward,
  Download,
  GameController,
  H1,
  H2,
  H3,
  Headset,
  Image,
  LinkOrA,
  P,
  Section,
  Tv,
  verticalRhythm
} from '@/design-system'
import laptop from '@/public/images/about/andras-vas-Bd7gNnWJBkU-unsplash.jpg'

export async function generateMetadata({
  params: { lang }
}: PageProps): Promise<Metadata> {
  const { layout, page } = await getDictionary(lang)
  const languages = generateAlternateLinks(LINKS.about)
  const canonical = localizePath(LINKS.about, lang)
  const metaImageParams = {
    theme: getCookie(COOKIES.theme, { cookies }) as Theme,
    title: page.about.metadata.title,
    subtitle: layout.root.metadata.title,
    alt: page.about.metadata.image.alt
  }

  return {
    title: page.about.metadata.title,
    description: page.about.metadata.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      ...(await openGraph(lang)),
      title: page.about.metadata.title,
      description: page.about.metadata.description,
      images: getMetaImage('og', lang, metaImageParams)
    },
    twitter: {
      ...twitter(),
      title: page.about.metadata.title,
      description: page.about.metadata.description,
      images: getMetaImage('twitter', lang, metaImageParams)
    }
  }
}

type MediaTypes = 'read' | 'listen' | 'watch' | 'play'

const mediaIcons: Record<MediaTypes, JSX.Element> = {
  read: <Book verticalAlign="bottom" />,
  listen: <Headset verticalAlign="bottom" />,
  watch: <Tv verticalAlign="bottom" />,
  play: <GameController verticalAlign="bottom" />
}

export default async function About({ params: { lang } }: PageProps) {
  const { layout, page } = await getDictionary(lang)
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: lang,
    name: page.about.metadata.title,
    description: page.about.metadata.description,
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
      <Section columns="2">
        <H1>{page.about.heading}</H1>
        <VStack css={verticalRhythm.gap.m}>
          <P>{page.about.story.gaming}</P>
          <P>{page.about.story.technology}</P>
          <P>{page.about.story.math}</P>
          <P>{page.about.story.university}</P>
        </VStack>
        <VStack css={verticalRhythm.gap.m}>
          <P>{page.about.story.internship}</P>
          <P>{page.about.story.thesis}</P>
          <P>{page.about.story.books}</P>
          <P>{page.about.story.activities}</P>
          <P>{page.about.story.position}</P>
        </VStack>
        <ButtonAnchor
          justifySelf="flex-start"
          href={page.about.resume.href}
          _hover={{
            '& > span': {
              animation: 'bouncing'
            }
          }}
        >
          {page.about.resume.button}
          <Download />
        </ButtonAnchor>
      </Section>
      <Section columns="3">
        <H2>{page.about.facts.heading}</H2>
        {page.about.facts.list.map((fact, index) => (
          <VStack gap="s" alignItems="start" key={`fact-${index}`}>
            <H3 size="s">{fact.heading}</H3>
            <P>{fact.description}</P>
          </VStack>
        ))}
      </Section>
      <Section columns="2">
        <H2>{page.about.values.heading}</H2>
        {page.about.values.list.map((value, index) => (
          <VStack gap="s" alignItems="start" key={`value-${index}`}>
            <H3>{value.heading}</H3>
            <P size="l" color="subtle">
              {value.description}
            </P>
          </VStack>
        ))}
      </Section>
      {page.about.culturalCorner.list.map((media) => (
        <Section columns="3" key={media.type}>
          <H2>
            {mediaIcons[media.type as MediaTypes]} {media.heading}
          </H2>
          {media.list.map((medium, index) => (
            <Card key={`${media.type}-${index}`}>
              <Image
                aspectRatio={media.type === 'listen' ? 'square' : 'portrait'}
                width={702}
                height={1053}
                src={`/images${LINKS.about}${media.type}/${medium.image}`}
                alt={medium.title}
              />
              <H3 size="s">
                <LinkOrA href={medium.link}>{medium.title}</LinkOrA>
              </H3>
            </Card>
          ))}
        </Section>
      ))}
      <Section columns="2" alignItems="center">
        <VStack alignItems="start" css={verticalRhythm.gap.m}>
          <H2>{page.about.uses.heading}</H2>
          <P>{page.about.uses.description}</P>
          <ButtonLink
            variant="text"
            align="left"
            href={localizePath(LINKS.uses, lang)}
            transition="moveIconForward"
          >
            {page.about.uses.button} <ChevronForward />
          </ButtonLink>
        </VStack>
        <Image
          src={laptop}
          alt={page.about.uses.image}
          borderRadius="rounded"
        />
      </Section>
    </>
  )
}
