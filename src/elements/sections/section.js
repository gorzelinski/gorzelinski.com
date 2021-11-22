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
        padding: var(--space-m);
      `}
      ${media.desktop`
        padding: var(--space-l);
      `}
    `}
  
  grid-column: 1 / -1;
`

export const Subsection = styled.div`
  ${subGrid}
`
