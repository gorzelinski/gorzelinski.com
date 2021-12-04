import styled, { css } from "styled-components"

import { border, media } from "./utils"
import { spanAll, span2, span3, span4 } from "./grid"

export const Card = styled.article`
  ${span2}
  ${span3}
  ${span4}
  ${spanAll}
  ${border}
  overflow: hidden;
  display: grid;
  align-content: start;
  gap: var(--space-s);
  transition: box-shadow var(--duration-natural) ease-in;

  & > *:nth-child(2) {
    padding: calc(var(--space-s) - var(--space-xxxs));
  }

  ${props =>
    props.$horizontal &&
    css`
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(var(--space-xxxl), 100%), 1fr)
      );
      min-height: var(--space-xxxl);
      align-content: stretch;

      & > *:first-child {
        max-width: 100%;
        align-self: start;
        height: auto;
      }

      ${media.desktop`
        & > *:first-child {
          height: 100%;
        }
        & > *:nth-child(2) {
          grid-column: span 2;
        }
      `}
    `}

  &:hover {
    box-shadow: var(--shadow-neumorphism);
  }
`
