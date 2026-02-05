import type { PostFooterProps } from './post-footer.types'
import { HStack, VStack } from '@/styled-system/jsx'
import { verticalRhythm } from '@/design-system'
import { Span } from '../../elements'
import { Avatar } from '../avatar'
import { Socials } from '../socials'

export const PostFooter = ({
  frontmatter,
  dictionary,
  avatar
}: PostFooterProps) => {
  const { title } = frontmatter
  const { share } = dictionary
  const { image, name, bio, href } = avatar

  return (
    <footer>
      <VStack
        alignItems="start"
        css={{
          ...verticalRhythm.gap.s,
          ...verticalRhythm.marginTop['2xmarginBottom']
        }}
      >
        <HStack css={verticalRhythm.gap.s}>
          <Span>{share}</Span>
          <Socials title={title} />
        </HStack>
        <Avatar image={image} name={name} bio={bio} href={href} />
      </VStack>
    </footer>
  )
}
