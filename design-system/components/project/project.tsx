import type { ProjectProps } from './project.types'

import { delocalizePath } from '@/lib'
import { ButtonLink, Card, H3, P, Span } from '../../elements'
import { ChevronForward } from '../../icons'
import { Image, IMAGE_SIZES } from '../image'

export const Project = ({
  lang,
  frontmatter,
  dictionary,
  priority = false
}: ProjectProps) => {
  const { slug, image, title, description, deliverables } = frontmatter

  return (
    <Card orientation="vertical">
      <Image
        width={622}
        height={384}
        aspectRatio="wide"
        src={`/images${delocalizePath(slug, lang)}${image.src}`}
        alt={image.alt}
        sizes={IMAGE_SIZES.columnHalf}
        priority={priority}
      />
      <Span>{deliverables.join(', ')}</Span>
      <H3 size="s">{title}</H3>
      <P size="s">{description}</P>
      <ButtonLink
        align="left"
        variant="text"
        href={slug}
        transition="moveIconForward"
      >
        {dictionary.button} <ChevronForward />
      </ButtonLink>
    </Card>
  )
}
