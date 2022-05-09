import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"

import {
  Button,
  H1,
  H2,
  H3,
  H6,
  Hero,
  Icon,
  Image,
  Li,
  P,
  Section,
  Tile,
  Ul,
} from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Link from "../components/link"
import Featured from "../components/featured"
import Cards from "../components/cards"
import { ChevronForward } from "@styled-icons/ionicons-solid"

const About = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/about")
  const name = data.site?.siteMetadata?.author?.name
  const image = getImage(data?.image)
  const metaImage = createMetaImage({
    alt: t("metaAlt"),
    src: data?.metaImage,
  })
  const lastPosts = data.lastPosts?.nodes

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
          <H1>{t("heading")}</H1>
        </Tile>
        <Section as="div" $marginTop="none">
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index < array.length / 2)
              .map((part, index) => (
                <P key={`story-1-${index + 1}`}>{part}</P>
              ))}
          </Tile>
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index >= array.length / 2)
              .map((part, index) => (
                <P key={`story-2-${index + 1}`}>{part}</P>
              ))}
          </Tile>
        </Section>
      </Section>
      <Section>
        <Tile $span="all">
          <H2>{t("random")}</H2>
        </Tile>
        {t("facts", { returnObjects: true }).map((fact, index) => (
          <Tile key={`fact-${index + 1}`}>
            <H6 as="h3">{fact.heading}</H6>
            <P>{fact.description}</P>
          </Tile>
        ))}
      </Section>
      <Section>
        <Tile $span="all">
          <H2>{t("core.heading")}</H2>
          <P $type="lead">{t("core.description")}</P>
        </Tile>
        {t("values", { returnObjects: true }).map(value => (
          <Tile $span={2} key={value.heading}>
            <H3>{value.heading}</H3>
            <P $type="lead">{value.description}</P>
          </Tile>
        ))}
      </Section>
      <Section>
        <Tile $span="all">
          <H2>{t("cultural.heading")}</H2>
          <P $type="lead">{t("cultural.description")}</P>
        </Tile>
        {t("corner", { returnObjects: true }).map((media, index) => (
          <Tile key={`media-${index}`}>
            <H6 as="h3">{media.heading}</H6>
            <Ul>
              {media.items.map((item, index) => (
                <Li key={`title-${index}`}>
                  <Link href={item.link}>{item.title}</Link>
                </Li>
              ))}
            </Ul>
          </Tile>
        ))}
      </Section>
      <Featured
        data={{
          title: t("posts.heading"),
          slug: "/blog/",
          buttonText: t("posts.button"),
        }}
      >
        <Cards data={lastPosts}></Cards>
      </Featured>
      <Hero>
        <Tile $span={2}>
          <H2>{t("uses.heading")}</H2>
          <P $type="lead">{t("uses.description")}</P>
          <Button $type="text" $align="left" to="/uses/">
            {t("uses.button")}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        </Tile>
      </Hero>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AllBioQuery($locale: String!, $dateFormat: String!) {
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
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "about" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 1200
          height: 630
          outputPixelDensities: 1
        )
      }
    }
    lastPosts: allMdx(
      limit: 3
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: $dateFormat, locale: $locale)
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(breakpoints: [320, 480, 768], width: 768)
              }
            }
          }
        }
        timeToRead
      }
    }
  }
`
