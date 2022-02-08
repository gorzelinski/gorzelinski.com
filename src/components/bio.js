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
      <Figure $portrait>
        <GatsbyImage
          image={image}
          alt={`${t("name")} - ${t("alt")}`}
        ></GatsbyImage>
        <Figcaption>{t("caption")}</Figcaption>
      </Figure>
      <Tile>
        <Small as="p" $top>
          {t("greeting")}
        </Small>
        <H2 $top>{t("name")}</H2>
        <P>{t("brief")}</P>
        <P>
          {t("portfolio.mention")}{" "}
          <Link $text to="/portfolio">
            {t("portfolio.button")}
          </Link>
          .
        </P>
        <P>
          {t("blog.mention")}{" "}
          <Link $text to="/blog">
            {t("blog.button")}
          </Link>
          .
        </P>
        <Button $text $first $iconForward to="/about">
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
