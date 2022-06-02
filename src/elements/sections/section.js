import styled, { css } from "styled-components"

import { border, marginTop, media } from "../utils"
import { grid, subGrid } from "../grid"

export const Section = styled.section`
  ${grid}
  ${marginTop}
  ${props =>
    props.$featured &&
    css`
      ${border.all}
      background: var(--color-surface-background);
      padding: calc(var(--space-s) - var(--space-xxxs));
      box-shadow: var(--shadow-depth-40);
      transition: box-shadow var(--duration-natural) ease-out,
        border-color var(--duration-natural) ease-out;
      ${media.tablet`
        padding: calc(var(--space-m) - var(--space-xxxs));
      `}
      ${media.desktop`
        padding: calc(var(--space-l) - var(--space-xxxs));
      `}
    `}

  grid-column: 1 / -1;
`

export const Subsection = styled.div`
  ${subGrid}
`
