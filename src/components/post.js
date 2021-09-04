import React from "react"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, H3, Icon, P, Small } from "../elements"

const Post = ({ data = {} }) => {
  const date = data.frontmatter?.date
  const timeToRead = data?.timeToRead
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const slug = data.fields?.slug
  const isDataComplete =
    date && timeToRead && title && description && slug && true

  return isDataComplete ? (
    <Card $sixeights>
      <Small $top>{`${date} | ${timeToRead} min. czytania`}</Small>
      <H3>{title}</H3>
      <P>{description}</P>
      <Button $text $first to={slug}>
        Czytaj więcej
        <Icon>
          <ChevronForward></ChevronForward>
        </Icon>
      </Button>
    </Card>
  ) : null
}

export default Post
