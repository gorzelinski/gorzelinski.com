import React, { useContext } from "react"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Icon, Navigation, Switch } from "../elements"
import { ThemeContext } from "./layout"

const ThemeSwitcher = () => {
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
            title="Zmień motyw"
            aria-label="Zmień motyw"
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
