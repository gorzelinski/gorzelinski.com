import React from "react"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Button, Icon } from "../elements"

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

  const selectIcon = name =>
    name === "light" ? (
      <Moon data-testid="moon"></Moon>
    ) : (
      <Sunny data-testid="sunny"></Sunny>
    )

  return themeLoaded && Object.keys(themes).length > 1 ? (
    <Button
      as="button"
      title="Zmień motyw"
      aria-label="Zmień motyw"
      onClick={() => switchTheme()}
    >
      <Icon $text>{selectIcon(selectedTheme.name)}</Icon>
    </Button>
  ) : null
}

export default ThemeSwitcher
