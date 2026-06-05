import type { AvatarProps } from './avatar.types'
import { HStack, VStack } from '@/styled-system/jsx'
import { IMAGE_SIZES, Image } from '../image'
import { H3, Link, P } from '../../elements'

export const Avatar = ({ image, name, bio, href }: AvatarProps) => {
  return (
    <HStack gap="s">
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        sizes={IMAGE_SIZES.avatar}
      />
      <VStack alignItems="start" gap="s">
        <H3 size="s">
          <Link href={href}>{name}</Link>
        </H3>
        <P size="s">{bio}</P>
      </VStack>
    </HStack>
  )
}
