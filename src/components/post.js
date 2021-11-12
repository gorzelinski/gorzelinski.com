import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, Figure, H4, Icon, P, Small } from "../elements"

const Post = ({ data = {} }) => {
  const image = data.frontmatter?.image
  const alt = image?.alt
  const src = getImage(image?.src)
  const date = data.frontmatter?.date
  const timeToRead = data?.timeToRead
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const slug = data.fields?.slug
  const isDataComplete =
    src && date && timeToRead && title && description && slug && true

  return isDataComplete ? (
    <Card $span2 $horizontal>
      <Figure as="div" $golden>
        <GatsbyImage image={src} alt={alt}></GatsbyImage>
      </Figure>
      <div>
        <Small $top>{`${date} • ${timeToRead} min. czytania`}</Small>
        <H4 as="h3" $top>
          {title}
        </H4>
        <P>{description}</P>
        <Button $text $first to={`/blog${slug}`}>
          Czytaj więcej
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </div>
    </Card>
  ) : null
}

export default Post
