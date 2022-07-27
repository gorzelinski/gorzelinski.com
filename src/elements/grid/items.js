import { css } from "styled-components"

import { media } from "../utils"

export const span = css`
  ${props => {
    switch (props.$span) {
      case 1:
        return css`
          grid-column: span 1;
        `
      case 2:
        return css`
          grid-column: span 1;
          ${media.tablet`
            grid-column: span 2;
          `}
        `
      case 3:
        return css`
          grid-column: span 1;
          ${media.tablet`
            grid-column: span 2;
          `}
          ${media.desktop`
            grid-column: span 3;
          `}
        `
      case 4:
        return css`
          grid-column: span 1;
          ${media.tablet`
            grid-column: span 2;
          `}
          ${media.desktop`
            grid-column: span 4;
          `}
        `
      case "all":
        return css`
          grid-column: 1 / -1;
        `
      default:
        return css`
          grid-column: auto;
        `
    }
  }}
`

export const heighten = css`
  ${props => {
    switch (props.$heighten) {
      case 1:
        return css`
          grid-row: span 1;
        `
      case 2:
        return css`
          grid-row: span 2;
        `
      case 3:
        return css`
          grid-row: span 3;
        `
      case 4:
        return css`
          grid-row: span 4;
        `
      case "all":
        return css`
          grid-row: 1 / -1;
        `
      default:
        return css`
          grid-row: auto;
        `
    }
  }}
`

export const justify = css`
  ${props => {
    switch (props.$justify) {
      case "start":
        return css`
          justify-self: start;
        `
      case "end":
        return css`
          justify-self: end;
        `
      case "center":
        return css`
          justify-self: center;
        `
      default:
        return css`
          justify-self: stretch;
        `
    }
  }}
`
