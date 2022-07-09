import React from "react"

import { A, Link as GatsbyLink } from "../elements"
import { isInternal } from "../utils"
import { useBio } from "../hooks"

const Link = ({ children, href, ...other }) => {
  const { bio } = useBio()
  const siteUrl = bio.site?.siteMetadata?.siteUrl

  return isInternal(siteUrl, href) ? (
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
