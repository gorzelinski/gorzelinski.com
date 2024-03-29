import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { H2, P, Button, Section, Tile, Video } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import spanishInquisitionMp4 from "../images/spanish-inquisition.mp4"
import spanishInquisitionWebm from "../images/spanish-inquisition.webm"

const NotFoundPage = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/404")
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        titleTemplate={true}
        description={t("description")}
        image={metaImage}
        slug={location.pathname}
      />
      <Section>
        <Tile>
          <Video autoPlay muted loop>
            <source src={spanishInquisitionWebm} type="video/webm"></source>
            <source src={spanishInquisitionMp4} type="video/mp4"></source>
          </Video>
        </Tile>
        <Tile>
          <H2 as="h1">{t("title")}</H2>
          <P $type="lead">{t("description")}</P>
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
  query NotFoundQuery($locale: String!) {
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "404" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 2400
          height: 1260
          outputPixelDensities: 1
        )
      }
    }
  }
`
