import React from "react"
import { useTranslation } from "react-i18next"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import {
  Section,
  Figure,
  Figcaption,
  Small,
  H2,
  P,
  Button,
  Icon,
  Link,
  Tile,
} from "../elements"

const Bio = ({ data = {} }) => {
  const { t } = useTranslation("components/bio")
  const image = getImage(data?.image)
  const isDataComplete = image && true

  return isDataComplete ? (
    <Section>
      <Figure $aspectRatio="portrait">
        <GatsbyImage
          image={image}
          alt={`${t("name")} - ${t("alt")}`}
        ></GatsbyImage>
        <Figcaption>{t("caption")}</Figcaption>
      </Figure>
      <Tile>
        <Small as="p" $marginReset="top">
          {t("greeting")}
        </Small>
        <H2 $marginReset="top">{t("name")}</H2>
        <P>{t("brief")}</P>
        <P>
          {t("portfolio.mention")}{" "}
          <Link to="/portfolio/">{t("portfolio.button")}</Link>.
        </P>
        <P>
          {t("blog.mention")} <Link to="/blog/">{t("blog.button")}</Link>.
        </P>
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
