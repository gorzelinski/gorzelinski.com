import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, Figure, H4, Icon, P, Small } from "../elements"

const Project = ({ data = {} }) => {
  const image = data.frontmatter?.featuredImage
  const alt = data.frontmatter?.featuredImage?.alt
  const src = getImage(image?.src)
  const myRole = data.frontmatter?.myRole
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const slug = data.fields?.slug
  const isDataComplete =
    myRole && title && description && src && alt && slug && true

  return isDataComplete ? (
    <Card $half>
      <Figure $golden>
        <GatsbyImage image={src} alt={alt}></GatsbyImage>
      </Figure>
      <Small as="p">{myRole}</Small>
      <H4 as="h3">{title}</H4>
      <P>{description}</P>
      <Button $text $first to={`/portfolio${slug}`}>
        Sprawdź case study
        <Icon>
          <ChevronForward></ChevronForward>
        </Icon>
      </Button>
    </Card>
  ) : null
}

export default Project
