import React from "react"
import { useTranslation } from "react-i18next"
import { getImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import {
  Section,
  Small,
  H2,
  P,
  Button,
  Icon,
  Link,
  Tile,
  Image,
} from "../elements"

const Bio = ({ data = {} }) => {
  const { t } = useTranslation("components/bio")
  const image = getImage(data?.image)
  const isDataComplete = image && true

  return isDataComplete ? (
    <Section>
      <Image
        $rounded
        $aspectRatio="portrait"
        image={image}
        alt={t("image.alt")}
        title={t("image.title")}
      ></Image>
      <Tile>
        <Small as="p">{t("greeting")}</Small>
        <H2>{t("name")}</H2>
        <P>{t("brief")}</P>
        {t("activities", { returnObjects: true }).map(activity => (
          <P>
            {activity.mention} <Link to={activity.link}>{activity.button}</Link>
            .
          </P>
        ))}
        <Button
          $type="text"
          $align="left"
          $animation="icon-forward"
          to="/about/"
        >
          {t("story")}
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </Tile>
    </Section>
  ) : null
}

export default Bio
