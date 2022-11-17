import React from "react"
import { useTranslation } from "react-i18next"

import { Button, Header, Icon, Small, Tile } from "../elements"

const Pagination = ({ data }) => {
  const { prev = null, next = null } = data
  const { t } = useTranslation("components/pagination")

  return (
    <Header as="nav" $type="section" aria-label={t("aria")}>
      {prev && (
        <Tile>
          <Small>{t("previous")}</Small>
          <Button
            $align="left"
            $type="text"
            $animation="icon-back"
            to={prev.slug}
            rel="prev"
          >
            <Icon type="chevron-back"></Icon>
            {prev.text}
          </Button>
        </Tile>
      )}
      {next && (
        <Tile {...(!prev ? { $textAlign: "start" } : { $textAlign: "end" })}>
          <Small>{t("next")}</Small>
          <Button
            {...(!prev ? { $align: "left" } : { $align: "right" })}
            $type="text"
            $animation="icon-forward"
            to={next.slug}
            rel="next"
          >
            {next.text}
            <Icon type="chevron-forward"></Icon>
          </Button>
        </Tile>
      )}
    </Header>
  )
}

export default Pagination
