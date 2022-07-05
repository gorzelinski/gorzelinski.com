import { css } from "styled-components"

import { media } from "./media"

export const marginTop = css`
  ${props => {
    switch (props.$marginTop) {
      case "none":
        return css`
          margin-top: 0;
          ${media.tablet`
            margin-top: 0;
          `}
        `
      case "small":
        return css`
          margin-top: var(--space-50);
          ${media.tablet`
            margin-top: var(--space-60);
          `}
        `
      case "big":
        return css`
          margin-top: var(--space-70);
          ${media.tablet`
            margin-top: var(--space-80);
          `}
        `
      default:
        return css`
          margin-top: var(--space-60);
          ${media.tablet`
            margin-top: var(--space-70);
          `}
        `
    }
  }}
`
