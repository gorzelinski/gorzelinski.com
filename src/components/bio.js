import React from "react"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import {
  Button,
  H2,
  Icon,
  Image,
  Link,
  P,
  Section,
  Small,
  Tile,
} from "../elements"

const Bio = () => {
  const { t } = useTranslation("components/bio")
  const data = useStaticQuery(graphql`
    query BioQuery {
      src: file(relativePath: { eq: "gorzelinski.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data?.src)

  return image ? (
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
        {t("activities", { returnObjects: true }).map((activity, index) => (
          <P key={`activity-${index}`}>
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
          <Icon type="chevron-forward"></Icon>
        </Button>
      </Tile>
    </Section>
  ) : null
}

export default Bio
