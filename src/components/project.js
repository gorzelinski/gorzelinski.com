import React from "react"
import { useTranslation } from "react-i18next"

import { Button, Card, H4, Icon, Image, P, Small } from "../elements"
import { createFeaturedImage, extractProjectData } from "../utils"

const Project = ({ data = {} }) => {
  const { t } = useTranslation("components/project")
  const { image, services, title, description, slug } = extractProjectData(data)
  const { alt, srcset } = createFeaturedImage(image)
  const isDataComplete =
    services && title && description && srcset && alt && slug && true

  return isDataComplete ? (
    <Card>
      <Image $aspectRatio="golden" image={srcset} alt={alt}></Image>
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
        <Icon type="chevron-forward"></Icon>
      </Button>
    </Card>
  ) : null
}

export default Project
