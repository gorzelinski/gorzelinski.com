import React from "react"

import { A, Link as GatsbyLink } from "../elements"

const Link = ({ children, href, ...other }) => {
  const isInternal = href => {
    const url = new URL(href, window.location.href)
    return url.host === window.location.host
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
