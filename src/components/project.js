import React from "react"
import { useTranslation } from "react-i18next"
import { getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Card, H4, Icon, Image, P, Small, Tile } from "../elements"

const Project = ({ data = {} }) => {
  const { t } = useTranslation("components/project")
  const image = data.frontmatter?.image
  const alt = image?.alt
  const src = getImage(image?.src)
  const services = data.frontmatter?.services
  const title = data.frontmatter?.title
  const description = data.frontmatter?.description
  const slug = data.fields?.slug
  const isDataComplete =
    services && title && description && src && alt && slug && true

  return isDataComplete ? (
    <Card>
      <Image $aspectRatio="golden" image={src} alt={alt}></Image>
      <Tile>
        <Small as="p">{services?.join(", ")}</Small>
        <H4 as="h3">{title}</H4>
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
      </Tile>
    </Card>
  ) : null
}

export default Project
