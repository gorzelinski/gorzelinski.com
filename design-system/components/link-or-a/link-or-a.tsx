import { isInternal } from '@/lib'
import { LINKS } from '@/constants'
import { LinkOrAProps } from './link-or-a.types'
import { A, Link } from '../../elements'

export const LinkOrA = (props: LinkOrAProps) => {
  const { children, href, ...linkOrAVariantProps } = props

  return isInternal(LINKS.siteUrl, href) ? (
    <Link href={href} {...linkOrAVariantProps}>
      {children}
    </Link>
  ) : (
    <A
      href={href}
      {...linkOrAVariantProps}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      {children}
    </A>
  )
}
