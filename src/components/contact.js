import React from "react"
import { useTranslation } from "react-i18next"

import { Button, H2, Hero, P, Subsection, Tile } from "../elements"
import { useBio } from "../hooks"
import { createSocialLinks } from "../utils"
import Socials from "./socials"

const Contact = () => {
  const { t } = useTranslation("components/contact")
  const { bio } = useBio()
  const { social } = bio.site.siteMetadata
  const { email } = bio.site.siteMetadata?.author
  const links = createSocialLinks(social)

  return (
    <Hero id="say-hello">
      <Tile $justify="center" $textAlign="center">
        <H2 $marginReset="top">{t("heading")}</H2>
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
