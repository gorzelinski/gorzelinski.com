import { css } from "styled-components"
import { tokens } from "../themes/tokens"

const { screen } = tokens

export const media = Object.keys(screen).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screen[label]}) {
      ${css(...args)};
    }
  `
  return acc
}, {})
