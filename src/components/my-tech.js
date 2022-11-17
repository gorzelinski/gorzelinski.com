import React from "react"
import { useTranslation } from "react-i18next"

import { Button, H2, Hero, Icon, P, Tile } from "../elements"

const MyTech = () => {
  const { t } = useTranslation("components/my-tech")

  return (
    <Hero>
      <Tile>
        <H2>{t("heading")}</H2>
        <P $type="lead">{t("description")}</P>
        <Button $type="text" $align="left" to="/uses/">
          {t("button")}
          <Icon type="chevron-forward"></Icon>
        </Button>
      </Tile>
    </Hero>
  )
}

export default MyTech
