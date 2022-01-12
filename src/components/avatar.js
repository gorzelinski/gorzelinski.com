import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { useBio } from "../hooks"
import { Avatar as StyledAvatar, H6, Small } from "../elements"
import Link from "./link"

const Avatar = () => {
  const { bio } = useBio()
  const { name, summary } = bio.site.siteMetadata.author

  return (
    <StyledAvatar>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/gorzelinski.jpg"
        width={64}
        height={64}
        quality={100}
        alt={`${name}`}
        transformOptions={{
          fit: "cover",
          cropFocus: "top",
        }}
      />
      <div>
        <H6 as="p" $top $bottom>
          <Link href="/o-mnie">{name}</Link>
        </H6>
        <Small as="p" $bottom>
          {summary}
        </Small>
      </div>
    </StyledAvatar>
  )
}

export default Avatar
