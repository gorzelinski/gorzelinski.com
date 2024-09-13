'use client'
import { usePathname } from 'next/navigation'
import { getAbsoluteURL } from '@/lib'
import { socialLinks } from './socials.constants'
import { SocialsProps } from './socials.types'
import { createShareLinks } from './socials.helpers'
import { ButtonAnchor, navigation } from '../../elements'

export const Socials = ({
  socials = socialLinks.slice(0, -1),
  title
}: SocialsProps) => {
  const url = getAbsoluteURL(usePathname())
  const shareOrSocialLinks = title ? createShareLinks(url, title) : socials

  return (
    <div className={navigation()}>
      {shareOrSocialLinks.map((social) => {
        const { icon, name, url } = social

        return (
          <ButtonAnchor
            variant="icon"
            size="s"
            key={name}
            href={url}
            aria-label={name}
            title={name}
            target="_blank"
          >
            {icon}
          </ButtonAnchor>
        )
      })}
    </div>
  )
}
