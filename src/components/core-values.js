import React from "react"
import { useTranslation } from "react-i18next"

import { H2, H3, P, Section, Tile } from "../elements"

const CoreValues = () => {
  const { t } = useTranslation("components/core-values")

  return (
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
  )
}

export default CoreValues
