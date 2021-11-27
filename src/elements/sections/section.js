import styled, { css } from "styled-components"

import { border, marginReset, marginTop, media } from "../utils"
import { grid, subGrid } from "../grid"

export const Section = styled.section`
  ${grid}
  ${marginTop}
  ${marginReset}
  ${props =>
    props.$featured &&
    css`
      ${border}
      background: var(--color-surface-background);
      padding: calc(var(--space-s) - var(--space-xxxs));
      box-shadow: var(--shadow-neumorphism);

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
