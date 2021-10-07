import React from "react"

import { A, Link as GatsbyLink } from "../elements"

const Link = ({ children, href, ...other }) =>
  href.startsWith("/") ? (
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

export default Link
