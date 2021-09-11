import React from "react"
import { Moon, Sunny } from "@styled-icons/ionicons-solid"

import { Button, Icon } from "../elements"

const ThemeSwitcher = ({ data }) => {
  const { themes, selectedTheme, setPreferredTheme, themeLoaded } = data

  const switchTheme = () => {
    JSON.stringify(selectedTheme) === JSON.stringify(themes.light)
      ? setPreferredTheme(themes.dark)
      : setPreferredTheme(themes.light)
  }

  return (
    themeLoaded &&
    Object.keys(themes).length > 0 && (
      <Button $nav as="button" onClick={() => switchTheme()}>
        <Icon>
          {JSON.stringify(selectedTheme) === JSON.stringify(themes.light) ? (
            <Moon></Moon>
          ) : (
            <Sunny></Sunny>
          )}
        </Icon>
      </Button>
    )
  )
}

export default ThemeSwitcher
