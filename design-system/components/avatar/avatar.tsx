import { HStack, VStack } from '@/styled-system/jsx'
import { AvatarProps } from './avatar.types'
import { Image } from '../image'
import { H3, Link, P } from '../../elements'

export const Avatar = ({ image, name, bio, href }: AvatarProps) => {
  return (
    <HStack gap="s">
      <Image src={image} alt={name} width={64} height={64} />
      <VStack alignItems="start" gap="s">
        <H3 size="s">
          <Link href={href}>{name}</Link>
        </H3>
        <P size="s">{bio}</P>
      </VStack>
    </HStack>
  )
}
