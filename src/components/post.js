import React from "react"
import { useTranslation } from "react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, Figure, H4, Icon, P, Small } from "../elements"

const Post = ({ data = {} }) => {
  const { t } = useTranslation("components/post")
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
    <Card $span={2} $horizontal>
      <Figure as="div">
        <GatsbyImage image={src} alt={alt}></GatsbyImage>
      </Figure>
      <div>
        <Small $marginReset="top">{`${date} • ${timeToRead} ${t(
          "min"
        )}`}</Small>
        <H4 as="h3" $marginReset="top">
          {title}
        </H4>
        <P>{description}</P>
        <Button
          $type="text"
          $align="left"
          $animation="icon-forward"
          to={`/blog${slug}`}
        >
          {t("button")}
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </div>
    </Card>
  ) : null
}

export default Post
