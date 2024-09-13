import { StaticImageData } from 'next/image'

export type AvatarProps = {
  name: string
  bio: string
  href: string
  image: StaticImageData
}
