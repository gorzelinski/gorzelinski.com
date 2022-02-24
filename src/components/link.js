import React from "react"

import { A, Link as GatsbyLink } from "../elements"
import { useBio } from "../hooks"

const Link = ({ children, href, ...other }) => {
  const {
    bio: {
      site: {
        siteMetadata: { siteUrl },
      },
    },
  } = useBio()

  const isInternal = href => {
    const pageUrl = new URL(siteUrl)
    const linkUrl = new URL(href, siteUrl)
    return linkUrl.host === pageUrl.host
  }

  return isInternal(href) ? (
    <GatsbyLink to={href} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <A
      href={href}
      rel="nofollow noopener noreferrer"
      target="_blank"
      {...other}
    >
      {children}
    </A>
  )
}

export default Link
