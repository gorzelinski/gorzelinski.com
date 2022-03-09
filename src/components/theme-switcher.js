import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Button, Icon } from "../elements"
import { ThemeContext } from "./theme-provider"

const ThemeSwitcher = () => {
  const { t } = useTranslation("components/theme-switcher")
  const { theme, saveTheme } = useContext(ThemeContext)

  const toggle = () => {
    theme === "light" ? saveTheme("dark") : saveTheme("light")
  }

  const selectIcon = () =>
    theme === "light" ? (
      <Sunny data-testid="sunny"></Sunny>
    ) : (
      <Moon data-testid="moon"></Moon>
    )

  return theme ? (
    <Button
      as="button"
      $type="text"
      title={t("aria")}
      aria-label={t("aria")}
      onClick={() => toggle()}
    >
      <Icon $type="text">{selectIcon()}</Icon>
    </Button>
  ) : null
}

export default ThemeSwitcher
