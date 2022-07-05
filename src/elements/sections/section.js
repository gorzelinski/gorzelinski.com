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
      --padding: var(--space-30);
      background: var(--color-surface-background);
      padding: calc(var(--padding) - var(--space-00));
      box-shadow: var(--shadow-depth-40);
      transition: box-shadow var(--duration-natural) ease-out,
        border-color var(--duration-natural) ease-out;

      ${media.tablet`
        --padding: var(--space-40);
      `}

      ${media.desktop`
        --padding: var(--space-50);
      `}
    `}

  grid-column: 1 / -1;
`

export const Subsection = styled.div`
  ${subGrid}
`
