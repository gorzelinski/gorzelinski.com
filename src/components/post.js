import React from "react"
import { useTranslation } from "react-i18next"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, H4, Icon, Image, P, Small } from "../elements"
import { createFeaturedImage, extractPostData } from "../utils"

const Post = ({ data = {} }) => {
  const { t } = useTranslation("components/post")
  const { image, date, title, description, slug, timeToRead } =
    extractPostData(data)
  const { alt, srcset } = createFeaturedImage(image)
  const isDataComplete =
    srcset && alt && date && timeToRead && title && description && slug && true

  return isDataComplete ? (
    <Card $span="all" $horizontal>
      <Image image={srcset} alt={alt} $aspectRatio="golden"></Image>
      <Small>{`${date} • ${timeToRead} ${t("min")}`}</Small>
      <H4 as="h3">{title}</H4>
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
    </Card>
  ) : null
}

export default Post
