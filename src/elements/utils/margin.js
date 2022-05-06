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
          margin-top: var(--space-l);
          ${media.tablet`
            margin-top: var(--space-xl);
          `}
        `
      case "big":
        return css`
          margin-top: var(--space-xxl);
          ${media.tablet`
            margin-top: var(--space-xxxl);
          `}
        `
      default:
        return css`
          margin-top: var(--space-xl);
          ${media.tablet`
            margin-top: var(--space-xxl);
          `}
        `
    }
  }}
`
