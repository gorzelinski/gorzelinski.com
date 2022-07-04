import React from "react"
import { useTranslation } from "react-i18next"

import { Button } from "../elements"

const Logo = () => {
  const { t } = useTranslation("pages/index")

  return (
    <Button
      $bold
      $align="left"
      $type="nav"
      to="/"
      activeClassName="active-subtle"
    >
      {t("title")}
    </Button>
  )
}

export default Logo
