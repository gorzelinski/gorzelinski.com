import type { PostFooterProps } from './post-footer.types'
import { HStack, VStack } from '@/styled-system/jsx'
import { verticalRhythm } from '@/design-system'
import { Span } from '../../elements'
import { Avatar } from '../avatar'
import { Socials } from '../socials'

export const PostFooter = ({
  shareLabel,
  postTitle,
  avatarImage,
  avatarName,
  avatarBio,
  avatarHref
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
          <Span>{shareLabel}</Span>
          <Socials title={postTitle} />
        </HStack>
        <Avatar
          image={avatarImage}
          name={avatarName}
          bio={avatarBio}
          href={avatarHref}
        />
      </VStack>
    </footer>
  )
}
