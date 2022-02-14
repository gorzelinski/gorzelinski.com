import React from "react"
import { useTranslation } from "react-i18next"

import { Button, H2, Hero, P, Tile } from "../elements"
import { useBio } from "../hooks"

const Contact = () => {
  const { t } = useTranslation("components/contact")
  const { bio } = useBio()
  const { email } = bio.site.siteMetadata?.author

  return (
    <Hero id="say-hello">
      <Tile $justify="center" $textAlign="center">
        <H2 $marginReset="top">{t("heading")}</H2>
        <P $lead>{t("description")}</P>
        <Button
          as="a"
          $type="text"
          $animation="element-buzz-out"
          href={`mailto:${email}`}
        >
          {t("cta")}
        </Button>
      </Tile>
    </Hero>
  )
}

export default Contact
