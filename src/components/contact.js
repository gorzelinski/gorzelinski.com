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
      <Tile $center $textCenter>
        <H2 $top>{t("heading")}</H2>
        <P $lead>{t("description")}</P>
        <Button as="a" $text $elementBuzzOut href={`mailto:${email}`}>
          {t("cta")}
        </Button>
      </Tile>
    </Hero>
  )
}

export default Contact
