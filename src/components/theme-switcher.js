import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Icon, Navigation, Switch } from "../elements"
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

  return (
    <Navigation as="div">
      {theme ? (
        <>
          <Switch
            title={t("aria")}
            aria-label={t("aria")}
            defaultChecked={theme === "dark" ? true : false}
            onChange={() => toggle()}
          ></Switch>
          <Icon $text>{selectIcon()}</Icon>
        </>
      ) : null}
    </Navigation>
  )
}

export default ThemeSwitcher
