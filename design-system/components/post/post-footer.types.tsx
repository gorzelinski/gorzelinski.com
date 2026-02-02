import type { Dictionary } from '@/types'
import type { StaticImageData } from 'next/image'

export type PostFooterProps = {
  shareLabel: Dictionary['page']['blogPost']['share']
  postTitle: string
  avatarImage: StaticImageData
  avatarName: Dictionary['component']['avatar']['name']
  avatarBio: Dictionary['component']['avatar']['bio']
  avatarHref: string
}
