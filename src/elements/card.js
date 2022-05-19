import styled, { css } from "styled-components"

import { border, media } from "./utils"
import { heighten, span } from "./grid"
import { textAlign } from "./typography"

const vertical = css``

const horizontal = css`
  grid-template-columns: 1fr;

  ${media.mobile`
    grid-template-columns: 1fr 3fr;
    & > .gatsby-image-wrapper {
      aspect-ratio: auto;
      min-height: var(--space-xxxl);
      align-self: stretch;
      margin: calc(-1 * var(--gap)) 0 calc(-1 * var(--gap)) calc(-1 * var(--gap));
      grid-column: 1;
      grid-row: 1 / 5;
    }
    & > * {
      grid-column: 2;
    }
  `}

  ${media.tablet`
    grid-template-columns: 1fr 2fr;
  `}
`

export const Card = styled.article`
  ${span}
  ${heighten}
  ${textAlign}
  ${border.all}
  --gap: var(--space-xs);
  overflow: hidden;
  display: grid;
  align-content: start;
  align-items: start;
  padding: var(--gap);
  gap: var(--gap);
  box-shadow: var(--shadow-depth-20);
  &:hover {
    box-shadow: var(--shadow-depth-10);
  }
  & > .gatsby-image-wrapper {
    aspect-ratio: 1.618;
    margin: calc(-1 * var(--gap)) calc(-1 * var(--gap)) 0;
  }

  ${media.tiny`
    --gap: var(--space-s);
  `}

  ${media.desktop`
    --gap: var(--font-height-base);
  `}

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${props => {
    switch (props.$type) {
      case "vertical":
        return vertical
      case "horizontal":
        return horizontal
      default:
        return vertical
    }
  }}
`
