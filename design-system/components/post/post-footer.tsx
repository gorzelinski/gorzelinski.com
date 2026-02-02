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
          <Span>{dictionary.share}</Span>
          <Socials title={frontmatter.title} />
        </HStack>
        <Avatar
          image={avatar.image}
          name={avatar.name}
          bio={avatar.bio}
          href={avatar.href}
        />
      </VStack>
    </footer>
  )
}
