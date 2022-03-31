import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"

import { H1, Image, P, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/about")
  const name = data.site?.siteMetadata?.author?.name
  const image = getImage(data?.image)
  const metaImage = createMetaImage({
    alt: t("metaAlt"),
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        image={metaImage}
        slug={location.pathname}
      ></Seo>
      <Section>
        {/* TODO: change image */}
        <Image
          $aspectRatio="wide"
          $span="all"
          image={image}
          alt={`${name} - ${t("alt")}`}
        ></Image>
        <Tile $span="all">
          <H1 $marginReset="both">{t("heading")}</H1>
        </Tile>
        <Section as="div" $marginReset="top">
          <Tile>
            <P>{t("story.childhood")}</P>
            <P>{t("story.teenager")}</P>
            <P>{t("story.education")}</P>
            <P>{t("story.university")}</P>
          </Tile>
          <Tile>
            <P>{t("story.experience")}</P>
            <P>{t("story.graduation")}</P>
            <P>{t("story.books")}</P>
            <P>{t("story.ending")}</P>
          </Tile>
        </Section>
      </Section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AllBioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    metaImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 1200
          aspectRatio: 1.91
          outputPixelDensities: 1
        )
      }
    }
  }
`
