import { LINKS } from '@/constants'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { localizePath } from '@/lib'
import { Grid, VStack } from '@/styled-system/jsx'
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
  Tv,
  verticalRhythm
} from '@/design-system'
import uses from '@/public/images/about/andras-vas-Bd7gNnWJBkU-unsplash.jpg'

type MediaTypes = 'read' | 'listen' | 'watch' | 'play'

const mediaIcons: Record<MediaTypes, JSX.Element> = {
  read: <Book verticalAlign="bottom" />,
  listen: <Headset verticalAlign="bottom" />,
  watch: <Tv verticalAlign="bottom" />,
  play: <GameController verticalAlign="bottom" />
}

export default async function About({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  const {
    page: { about }
  } = await getDictionary(lang)

  return (
    <>
      <article>
        <H1 css={verticalRhythm.marginBottom.m}>{about.heading}</H1>
        <Grid
          gridTemplateColumns={{
            base: '1',
            md: '2'
          }}
          css={verticalRhythm.gap.m}
        >
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
        </Grid>
      </article>
      <section>
        <H2 css={verticalRhythm.marginBottom.m}>{about.facts.heading}</H2>
        <Grid
          gridTemplateColumns={{
            base: '1',
            md: '2',
            lg: '3'
          }}
          css={verticalRhythm.gap.m}
        >
          {about.facts.list.map((fact, index) => (
            <VStack gap="s" alignItems="start" key={`fact-${index}`}>
              <H3 size="s">{fact.heading}</H3>
              <P>{fact.description}</P>
            </VStack>
          ))}
        </Grid>
      </section>
      <section>
        <H2 css={verticalRhythm.marginBottom.m}>{about.values.heading}</H2>
        <Grid
          gridTemplateColumns={{
            base: '1',
            md: '2'
          }}
          css={verticalRhythm.gap.m}
        >
          {about.values.list.map((value, index) => (
            <VStack gap="s" alignItems="start" key={`value-${index}`}>
              <H3>{value.heading}</H3>
              <P size="l" color="subtle">
                {value.description}
              </P>
            </VStack>
          ))}
        </Grid>
      </section>
      {about.culturalCorner.list.map((media) => (
        <section key={media.type}>
          <H2 css={verticalRhythm.marginBottom.m}>
            {mediaIcons[media.type as MediaTypes]} {media.heading}
          </H2>
          <Grid
            gridTemplateColumns={{
              base: '1',
              md: '2',
              lg: '3'
            }}
            css={verticalRhythm.gap.m}
          >
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
          </Grid>
        </section>
      ))}
      <Grid
        gridTemplateColumns={{
          base: '1',
          md: '2'
        }}
        alignItems="center"
        css={verticalRhythm.gap.m}
      >
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
      </Grid>
    </>
  )
}
