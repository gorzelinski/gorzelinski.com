import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, Figure, H4, Icon, P, Small } from "../elements"

const Project = ({ data = {} }) => {
  const image = data.frontmatter?.image
  const alt = image?.alt
  const src = getImage(image?.src)
  const myRole = data.frontmatter?.myRole
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const slug = data.fields?.slug
  const isDataComplete =
    myRole && title && description && src && alt && slug && true

  return isDataComplete ? (
    <Card>
      <Figure as="div" $golden>
        <GatsbyImage image={src} alt={alt}></GatsbyImage>
      </Figure>
      <div>
        <Small as="p" $top>
          {myRole}
        </Small>
        <H4 as="h3" $top>
          {title}
        </H4>
        <P>{description}</P>
        <Button $text $first $iconForward to={`/portfolio${slug}`}>
          Check case study
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </div>
    </Card>
  ) : null
}

export default Project
