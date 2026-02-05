import type { Dictionary, Post } from '@/types'
import type { StaticImageData } from 'next/image'

export type PostFooterProps = {
  frontmatter: Post
  dictionary: Dictionary['component']['post']
  avatar: {
    image: StaticImageData
    name: string
    bio: string
    href: string
  }
}
