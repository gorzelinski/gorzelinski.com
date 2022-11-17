import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import styled, { css } from "styled-components"

import { Button, Icon } from "../elements"
import { ThemeContext } from "../themes/theme-provider"

const StyledThemeSwitcher = styled.div`
  & :is(.moon, .sun, .sun-beams) {
    transform-origin: center center;
  }
  & .sun {
    transition: transform var(--duration-slow) ease;
  }
  & .sun-beams {
    transition: transform var(--duration-slow), opacity var(--duration-slow);
  }
  & .moon > rect {
    fill: white;
  }
  & .moon > circle {
    fill: black;
  }

  ${props =>
    props.theme === "dark" &&
    css`
      & .sun {
        transform: scale(2.196);
        transition-timing-function: ease-in;
        transition-duration: var(--duration-natural);
      }
      & .sun-beams {
        transform: rotateZ(-25deg);
        transition-duration: var(--duration-immediate);
        opacity: 0;
      }
      & .moon > circle {
        transform: translateX(-8.44px);
        transition: transform var(--duration-natural) ease-out
          var(--duration-natural);
        @supports (cx: 1) {
          transform: translateX(0);
          cx: 15.56;
          transition: cx var(--duration-natural) ease-out
            var(--duration-natural);
        }
      }
    `}
`

const ThemeSwitcher = () => {
  const { t } = useTranslation("components/theme-switcher")
  const { theme, saveTheme } = useContext(ThemeContext)

  const toggle = () => {
    theme === "light" ? saveTheme("dark") : saveTheme("light")
  }

  return theme ? (
    <StyledThemeSwitcher theme={theme}>
      <Button
        as="button"
        $type="icon"
        title={t("aria")}
        aria-label={t("aria")}
        onClick={toggle}
      >
        <Icon type="sun-and-moon"></Icon>
      </Button>
    </StyledThemeSwitcher>
  ) : null
}

export default ThemeSwitcher
