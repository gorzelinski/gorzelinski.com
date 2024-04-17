import { LINKS } from '@/constants'
import { localizePath } from '@/lib'
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
  deliverables
}: ProjectProps) => {
  return (
    <Card orientation="vertical">
      <Image
        width={622}
        height={384}
        aspectRatio="wide"
        src={`/images${LINKS.portfolio}${slug}/${image.src}`}
        alt={image.alt}
      />
      <Small>{deliverables.join(', ')}</Small>
      <H3 size="s">{title}</H3>
      <P size="s">{description}</P>
      <ButtonLink
        align="left"
        variant="text"
        href={localizePath(lang, `${LINKS.portfolio}${slug}/`)}
        transition="moveIconForward"
        _hover={{
          '& > span': {
            animation: 'forwards'
          }
        }}
      >
        {dictionary.button} <ChevronForward />
      </ButtonLink>
    </Card>
  )
}
