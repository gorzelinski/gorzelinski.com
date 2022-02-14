import styled, { css } from "styled-components"

import { border, media } from "./utils"
import { span } from "./grid"

export const Card = styled.article`
  ${span}
  ${border}
  overflow: hidden;
  display: grid;
  gap: var(--space-s);
  align-content: start;

  & > *:nth-child(2) {
    padding: calc(var(--space-s) - var(--space-xxxs));
  }

  ${props =>
    props.$horizontal &&
    css`
      grid-template-columns: 1fr;

      & > *:first-child {
        aspect-ratio: 1.618;
      }

      ${media.mobile`
        & > *:first-child {
          aspect-ratio: 21 / 9;
        }
      `}

      ${media.tablet`
        grid-template-columns: 1fr 2fr;

        & > *:first-child {
          aspect-ratio: auto;
          height: 100%;
          max-width: 100%;
        }
      `}
    `}
`
