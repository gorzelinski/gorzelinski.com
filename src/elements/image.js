import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { span } from "./grid"

export const aspectRatios = css`
  ${props => {
    switch (props.$aspectRatio) {
      case "square":
        return css`
          aspect-ratio: 1;
        `
      case "golden":
        return css`
          aspect-ratio: 1.618;
        `
      case "normal":
        return css`
          aspect-ratio: 16 / 9;
        `
      case "portrait":
        return css`
          aspect-ratio: 2 / 3;
        `
      case "wide":
        return css`
          aspect-ratio: 21 / 9;
        `
      case "meta":
        return css`
          aspect-ratio: 1.91;
        `
      default:
        return css`
          aspect-ratio: inherit;
        `
    }
  }}
`

export const Image = styled(GatsbyImage)`
  ${span}
  ${aspectRatios}
  
  ${props =>
    props.$rounded &&
    css`
      & {
        z-index: 0;
        border-radius: var(--border-radius-m);
      }
    `}
`
