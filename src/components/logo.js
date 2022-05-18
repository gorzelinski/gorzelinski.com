import React from "react"
import { useTranslation } from "react-i18next"

import { Button } from "../elements"

const Logo = () => {
  const { t } = useTranslation("components/bio")

  return (
    <Button
      $align="left"
      $type="nav"
      aria-label="Gorzelinski"
      to="/"
      activeClassName="active-subtle"
    >
      {t("name")}
    </Button>
  )
}

export default Logo
