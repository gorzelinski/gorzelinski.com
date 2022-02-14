import React from "react"
import { useTranslation } from "react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, Figure, H4, Icon, P, Small } from "../elements"

const Project = ({ data = {} }) => {
  const { t } = useTranslation("components/project")
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
      <Figure as="div" $aspectRatio="golden">
        <GatsbyImage image={src} alt={alt}></GatsbyImage>
      </Figure>
      <div>
        <Small as="p" $marginReset="top">
          {myRole}
        </Small>
        <H4 as="h3" $marginReset="top">
          {title}
        </H4>
        <P>{description}</P>
        <Button
          $type="text"
          $align="left"
          $animation="icon-forward"
          to={`/portfolio${slug}`}
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

export default Project
