import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { A, Link as GatsbyLink } from "../elements"
import { isInternal } from "../utils"

const Link = ({ children, href, ...other }) => {
  const data = useStaticQuery(graphql`
    query LinkQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const siteUrl = data.site?.siteMetadata?.siteUrl

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
