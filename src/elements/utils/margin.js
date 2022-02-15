import { css } from "styled-components"

import { media } from "./media"

export const marginReset = css`
  ${props => {
    switch (props.$marginReset) {
      case "top":
        return css`
          margin-top: 0 !important;
        `
      case "bottom":
        return css`
          margin-bottom: 0 !important;
        `
      case "both":
        return css`
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        `
      default:
        return null
    }
  }}
`

export const marginTop = css`
  ${props => {
    switch (props.$marginTop) {
      case "smaller":
        return css`
          margin-top: var(--space-l);
          ${media.tablet`
            margin-top: var(--space-xl);
          `}
        `
      case "bigger":
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
