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
    JSON.stringify(selectedTheme) === JSON.stringify(themes.light)
      ? setPreferredTheme(themes.dark)
      : setPreferredTheme(themes.light)
  }

  return themeLoaded && Object.keys(themes).length > 1 ? (
    <Button
      as="button"
      title="Zmień motyw"
      aria-label="Zmień motyw"
      onClick={() => switchTheme()}
    >
      <Icon $text>
        {JSON.stringify(selectedTheme) === JSON.stringify(themes.light) ? (
          <Moon data-testid="moon"></Moon>
        ) : (
          <Sunny data-testid="sunny"></Sunny>
        )}
      </Icon>
    </Button>
  ) : null
}

export default ThemeSwitcher
