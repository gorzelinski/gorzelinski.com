import React from "react"
import { useTranslation } from "react-i18next"
import { getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, H4, Icon, Image, P, Small } from "../elements"

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
    <Card $span="all" $horizontal>
      <Image image={src} alt={alt}></Image>
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
