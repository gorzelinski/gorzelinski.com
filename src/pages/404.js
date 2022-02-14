import * as React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"

import { H1, P, Button, Section, Figure, Tile } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data = {} }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/404")
  const image = getImage(data.image)

  return (
    <Layout>
      <Seo lang={locale} title={t("title")} />
      <Section>
        <Figure as="div">
          <GatsbyImage image={image} alt={t("alt")}></GatsbyImage>
        </Figure>
        <Tile $span2>
          <H1 $decorative $top>
            {t("title")}
          </H1>
          <P $lead>{t("subtitle")}</P>
          <Button $type="primary" $grow to="/">
            {t("button")}
          </Button>
        </Tile>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "not-found.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
