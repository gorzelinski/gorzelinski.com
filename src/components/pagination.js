import React from "react"
import { useTranslation } from "react-i18next"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Header, Icon, Small, Tile } from "../elements"

const Pagination = ({ data }) => {
  const { prev = null, next = null } = data
  const { t } = useTranslation("components/pagination")

  return (
    <Header as="nav" $type="section" aria-label={t("aria")}>
      {prev && (
        <Tile>
          <Small $marginReset="top">{t("previous")}</Small>
          <Button
            $align="left"
            $type="text"
            $animation="icon-back"
            to={prev.slug}
            rel="prev"
          >
            <Icon>
              <ChevronBack></ChevronBack>
            </Icon>
            {prev.text}
          </Button>
        </Tile>
      )}
      {next && (
        <Tile {...(!prev ? { $textAlign: "start" } : { $textAlign: "end" })}>
          <Small $marginReset="top">{t("next")}</Small>
          <Button
            {...(!prev ? { $align: "left" } : { $align: "right" })}
            $type="text"
            $animation="icon-forward"
            to={next.slug}
            rel="next"
          >
            {next.text}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        </Tile>
      )}
    </Header>
  )
}

export default Pagination
