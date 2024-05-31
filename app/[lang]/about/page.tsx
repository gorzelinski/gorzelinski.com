import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { localizePath } from '@/lib'
import { VStack } from '@/styled-system/jsx'
import {
  Book,
  ButtonLink,
  Card,
  ChevronForward,
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
import uses from '@/public/images/about/andras-vas-Bd7gNnWJBkU-unsplash.jpg'

type Props = {
  params: {
    lang: Locale
  }
}

export async function generateMetadata({ params: { lang } }: Props) {
  const { layout, page } = await getDictionary(lang)

  return {
    title: `${page.about.metadata.title} | ${layout.root.metadata.title}`,
    description: page.about.metadata.description
  }
}

type MediaTypes = 'read' | 'listen' | 'watch' | 'play'

const mediaIcons: Record<MediaTypes, JSX.Element> = {
  read: <Book verticalAlign="bottom" />,
  listen: <Headset verticalAlign="bottom" />,
  watch: <Tv verticalAlign="bottom" />,
  play: <GameController verticalAlign="bottom" />
}

export default async function About({ params: { lang } }: Props) {
  const {
    page: { about }
  } = await getDictionary(lang)

  return (
    <>
      <Section columns="2">
        <H1>{about.heading}</H1>
        <VStack css={verticalRhythm.gap.m}>
          <P>{about.story.gaming}</P>
          <P>{about.story.technology}</P>
          <P>{about.story.math}</P>
          <P>{about.story.university}</P>
        </VStack>
        <VStack css={verticalRhythm.gap.m}>
          <P>{about.story.internship}</P>
          <P>{about.story.thesis}</P>
          <P>{about.story.books}</P>
          <P>{about.story.activities}</P>
          <P>{about.story.position}</P>
        </VStack>
      </Section>
      <Section columns="3">
        <H2>{about.facts.heading}</H2>
        {about.facts.list.map((fact, index) => (
          <VStack gap="s" alignItems="start" key={`fact-${index}`}>
            <H3 size="s">{fact.heading}</H3>
            <P>{fact.description}</P>
          </VStack>
        ))}
      </Section>
      <Section columns="2">
        <H2>{about.values.heading}</H2>
        {about.values.list.map((value, index) => (
          <VStack gap="s" alignItems="start" key={`value-${index}`}>
            <H3>{value.heading}</H3>
            <P size="l" color="subtle">
              {value.description}
            </P>
          </VStack>
        ))}
      </Section>
      {about.culturalCorner.list.map((media) => (
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
          <H2>{about.uses.heading}</H2>
          <P>{about.uses.description}</P>
          <ButtonLink
            variant="text"
            align="left"
            href={localizePath(lang, LINKS.uses)}
            transition="moveIconForward"
          >
            {about.uses.button} <ChevronForward />
          </ButtonLink>
        </VStack>
        <Image src={uses} alt={about.uses.image} borderRadius="rounded" />
      </Section>
    </>
  )
}
