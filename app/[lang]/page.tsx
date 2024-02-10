import { Locale } from '@/i18n.config'
import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
import { getDictionary } from '@/lib/dictionaries'
import { Box, Grid, HStack } from '@/styled-system/jsx'
import {
  At,
  Button,
  ButtonLink,
  Card,
  ChevronForward,
  Featured,
  H1,
  H2,
  H3,
  Hero,
  Image,
  Input,
  InputWrapper,
  Li,
  Link,
  P,
  Send,
  Small,
  Socials,
  Split,
  Typewriter,
  Ul,
  verticalRhythm
} from '@/design-system'
import profile from '../../public/gorzelinski.jpg'
import dog from '../../public/erda-estremera-sxNt9g77PE0-unsplash.jpg'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: Locale
  }
}) {
  const {
    page: { home }
  } = await getDictionary(lang)

  return (
    <>
      <Hero
        marginBottom={{
          base: '-2xl',
          md: '-3xl',
          xl: '-4xl'
        }}
      >
        <H1 aria-label={home.landing.typewriter.create}>
          <Typewriter
            words={[
              home.landing.typewriter.design,
              home.landing.typewriter.code,
              home.landing.typewriter.write,
              home.landing.typewriter.create
            ]}
          />
          <br />
        </H1>
        <P size="l">{home.landing.description}</P>
        <ButtonLink alignSelf="start" href={localizePath(lang, LINKS.about)}>
          {home.landing.button}
        </ButtonLink>
      </Hero>
      <Featured
        heading={home.projects.heading}
        link={{
          text: home.projects.link,
          href: localizePath(lang, LINKS.portfolio)
        }}
      >
        <Grid
          gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }}
          css={verticalRhythm}
        >
          <Card>
            <Image src={dog} alt="Dog" />
            <H3>This is heading</H3>
            <P size="s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              praesentium eveniet cum soluta? Perferendis placeat dolore
              recusandae!
            </P>
            <ButtonLink
              align="left"
              style="text"
              href={localizePath(lang, LINKS.portfolio)}
              transition="moveIconForward"
            >
              Check project <ChevronForward />
            </ButtonLink>
          </Card>
          <Card>
            <Image src={dog} alt="Dog" />
            <H3>This is heading</H3>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              praesentium eveniet cum soluta? Perferendis placeat dolore
              recusandae!
            </P>
            <ButtonLink
              align="left"
              style="text"
              href={localizePath(lang, LINKS.portfolio)}
              transition="moveIconForward"
            >
              Check project <ChevronForward />
            </ButtonLink>
          </Card>
        </Grid>
      </Featured>
      <Split>
        <Image
          src={profile}
          alt={home.bio.image.alt}
          title={home.bio.image.title}
          borderRadius="rounded"
        />
        <Box>
          <Small marginBottom="1rem">{home.bio.greeting}</Small>
          <H2 marginBottom="1rem">{home.bio.heading}</H2>
          <P marginBottom="1rem">{home.bio.brief}</P>
          {home.bio.activities.map((activity) => (
            <P key={activity.link} marginBottom="1rem">
              {activity.mention}{' '}
              <Link href={activity.href}>{activity.link}</Link>.
            </P>
          ))}
          <ButtonLink
            align="left"
            style="text"
            href={localizePath(lang, LINKS.about)}
            transition="moveIconForward"
          >
            {home.bio.link} <ChevronForward />
          </ButtonLink>
        </Box>
      </Split>
      <Featured
        heading={home.posts.heading}
        link={{
          text: home.posts.link,
          href: localizePath(lang, LINKS.portfolio)
        }}
      >
        <Grid gridTemplateColumns={{ base: '1fr' }} css={verticalRhythm}>
          <Card orientation="horizontal">
            <Image src={dog} alt="Dog" />
            <H3>This is heading</H3>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              praesentium eveniet cum soluta? Perferendis placeat dolore
              recusandae!
            </P>
            <ButtonLink
              align="left"
              style="text"
              href={localizePath(lang, LINKS.blog)}
              transition="moveIconForward"
            >
              Read post <ChevronForward />
            </ButtonLink>
          </Card>
          <Card orientation="horizontal">
            <Image src={dog} alt="Dog" />
            <H3>This is heading</H3>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              praesentium eveniet cum soluta? Perferendis placeat dolore
              recusandae!
            </P>
            <ButtonLink
              align="left"
              style="text"
              href={localizePath(lang, LINKS.blog)}
              transition="moveIconForward"
            >
              Read post <ChevronForward />
            </ButtonLink>
          </Card>
          <Card orientation="horizontal">
            <Image src={dog} alt="Dog" />
            <H3>This is heading</H3>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              praesentium eveniet cum soluta? Perferendis placeat dolore
              recusandae!
            </P>
            <ButtonLink
              align="left"
              style="text"
              href={localizePath(lang, LINKS.blog)}
              transition="moveIconForward"
            >
              Read post <ChevronForward />
            </ButtonLink>
          </Card>
          <Card>
            <H3 marginBottom="1rem">{home.subscription.heading}</H3>
            <P marginBottom="1rem">{home.subscription.description}</P>
            <Ul marginBottom="1rem">
              {home.subscription.topics.map((topic, index) => (
                <Li key={`topic-${index}`}>{topic}</Li>
              ))}
            </Ul>
            <HStack flexWrap="wrap" gap="1rem">
              <InputWrapper>
                <Input
                  className="peer"
                  placeholder={home.subscription.email}
                ></Input>
                <At
                  _peerHover={{
                    color: 'gray.500'
                  }}
                  _peerFocus={{
                    color: 'gray.400!'
                  }}
                />
              </InputWrapper>
              <Button
                width="responsive"
                _hover={{
                  '& > span': {
                    animation: 'wobbling'
                  }
                }}
              >
                {home.subscription.button} <Send />
              </Button>
            </HStack>
          </Card>
        </Grid>
        <Hero align="center">
          <H2>{home.contact.heading}</H2>
          <P>{home.contact.description}</P>
          <ButtonLink align="left" style="outline" href="#contact">
            {home.contact.button}
          </ButtonLink>
          <Socials />
        </Hero>
      </Featured>
    </>
  )
}
