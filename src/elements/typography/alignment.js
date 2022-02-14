import { css } from "styled-components"

export const textAlign = css`
  ${props => {
    switch (props.$textAlign) {
      case "":
        return css`
          text-align: start;
        `
      case "end":
        return css`
          text-align: end;
        `
      case "center":
        return css`
          text-align: center;
        `
      default:
        return css`
          text-align: start;
        `
    }
  }}
`
