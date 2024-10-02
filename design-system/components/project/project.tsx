import { delocalizePath } from '@/lib'
import { ProjectProps } from './project.types'
import { ButtonLink, Card, ChevronForward, H3, P, Small } from '../../elements'
import { Image } from '../image'

export const Project = ({
  lang,
  dictionary,
  slug,
  image,
  title,
  description,
  deliverables,
  priority = false
}: ProjectProps) => {
  return (
    <Card orientation="vertical">
      <Image
        width={622}
        height={384}
        aspectRatio="wide"
        src={`/images${delocalizePath(slug, lang)}${image.src}`}
        alt={image.alt}
        priority={priority}
      />
      <Small>{deliverables.join(', ')}</Small>
      <H3 size="s">{title}</H3>
      <P>{description}</P>
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
