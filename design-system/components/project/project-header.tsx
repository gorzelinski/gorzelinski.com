import type { ProjectHeaderProps } from './project-header.types'
import { LINKS } from '@/constants'
import { Grid, VStack } from '@/styled-system/jsx'
import { Figure, H1, H2, P, Span } from '../../elements'
import { Image } from '../image'
import { LinkOrA } from '../link-or-a'
import { verticalRhythm } from '../../utils'

export const ProjectHeader = ({
  slug,
  frontmatter,
  dictionary
}: ProjectHeaderProps) => {
  const { title, description, image, services, client, deliverables, links } =
    frontmatter

  return (
    <header>
      <Figure margin="bleed">
        <Image
          aspectRatio="cinema"
          src={`/images${LINKS.portfolio}${slug}/${image.src}`}
          alt={image.alt}
          width={1200}
          height={675}
          priority={true}
        />
      </Figure>
      <H1
        css={{
          ...verticalRhythm.marginTop['2xmarginBottom'],
          ...verticalRhythm.marginBottom.m
        }}
      >
        {title}
      </H1>
      <P css={verticalRhythm.marginBottom.m} size="l" color="subtle">
        {description}
      </P>
      <Grid
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="auto auto"
        css={verticalRhythm.gap.m}
      >
        <VStack alignItems="start" gap="s">
          <Span>{dictionary.services}</Span>
          <H2 size="s">{services.join(', ')}</H2>
        </VStack>
        <VStack alignItems="start" gap="s">
          <Span>{dictionary.client}</Span>
          <H2 size="s">{client}</H2>
        </VStack>
        <VStack alignItems="start" gap="s">
          <Span>{dictionary.deliverables}</Span>
          <H2 size="s">{deliverables.join(', ')}</H2>
        </VStack>
        <VStack alignItems="start" gap="s">
          <Span>{dictionary.links}</Span>
          {links.map((link) => (
            <H2 size="s" key={link.text}>
              <LinkOrA href={link.href}>{link.text}</LinkOrA>
            </H2>
          ))}
        </VStack>
      </Grid>
    </header>
  )
}
