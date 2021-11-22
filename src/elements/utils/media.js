import { css } from "styled-components"

const screen = {
  large: "1920px",
  desktop: "1280px",
  tablet: "768px",
  mobile: "480px",
  tiny: "321px",
}

export const media = Object.keys(screen).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${screen[label]}) {
      ${css(...args)};
    }
  `
  return acc
}, {})
