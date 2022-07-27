import React from "react"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"

import { Button, H2, Hero, P, Subsection, Tile } from "../elements"
import { createSocialLinks } from "../utils"
import Socials from "./socials"

const Contact = () => {
  const { t } = useTranslation("components/contact")
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          author {
            email
            social {
              github
              twitter
              dribbble
              facebook
              instagram
              linkedin
            }
          }
        }
      }
    }
  `)
  const { email, social } = data.site.siteMetadata?.author
  const links = createSocialLinks(social)

  return (
    <Hero id="say-hello">
      <Tile $justify="center" $textAlign="center">
        <H2>{t("heading")}</H2>
        <P $type="lead">{t("description")}</P>
        <Subsection>
          <Tile $span="all" $justify="center">
            <Button
              as="a"
              $type="text"
              $animation="element-buzz-out"
              href={`mailto:${email}`}
            >
              {t("cta")}
            </Button>
          </Tile>
          <Tile $span="all" $justify="center">
            <Socials data={links}></Socials>
          </Tile>
        </Subsection>
      </Tile>
    </Hero>
  )
}

export default Contact
