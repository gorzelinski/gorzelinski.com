import React from "react"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Icon, Navigation, Switch } from "../elements"

const ThemeSwitcher = ({ data = {} }) => {
  const {
    themes = {},
    selectedTheme = {},
    setPreferredTheme,
    themeLoaded = false,
  } = data

  const switchTheme = () => {
    selectedTheme.name === "light"
      ? setPreferredTheme(themes.dark)
      : setPreferredTheme(themes.light)
  }

  return themeLoaded && Object.keys(themes).length > 1 ? (
    <Navigation as="div">
      <Icon
        $text
        style={{
          visibility: `${
            selectedTheme.name === "light" ? "hidden" : "visible"
          }`,
        }}
      >
        <Sunny data-testid="sunny"></Sunny>
      </Icon>
      <Switch
        title="Zmień motyw"
        aria-label="Zmień motyw"
        onChange={() => switchTheme()}
        checked={selectedTheme.name === "dark" ? true : false}
      ></Switch>
      <Icon
        $text
        style={{
          visibility: `${selectedTheme.name === "dark" ? "hidden" : "visible"}`,
        }}
      >
        <Moon data-testid="moon"></Moon>
      </Icon>
    </Navigation>
  ) : null
}

export default ThemeSwitcher
