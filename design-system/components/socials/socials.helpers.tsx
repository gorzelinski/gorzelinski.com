import { socialLinks } from './socials.constants'
import { Share, Social } from './socials.types'

export function createShareLinks(
  url: string,
  title: string,
  socials: Social[] = socialLinks
) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks: Share = {
    bluesky: `https://bsky.app/intent/compose?text=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
  }

  return socials
    .filter((social) => social.name.toLowerCase() in shareLinks)
    .map(({ name, icon }) => ({
      name,
      icon,
      url: shareLinks[name.toLowerCase() as keyof Share]
    }))
}
