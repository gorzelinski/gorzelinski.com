import React from "react"
import { useTranslation } from "react-i18next"

import { Button } from "../elements"

const Logo = () => {
  const { t } = useTranslation("components/navbar")

  return (
    <Button
      $bold
      $align="left"
      $type="nav"
      to="/"
      activeClassName="active-subtle"
    >
      {t("home")}
    </Button>
  )
}

export default Logo
