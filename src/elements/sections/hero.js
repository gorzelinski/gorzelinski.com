import styled from "styled-components"

import { grid } from "../grid"
import { media } from "../utils"

export const Hero = styled.section`
  ${grid}
  padding-top: var(--space-xxl);

  @media (orientation: portrait) {
    --mobileNavHeight: calc(4 * var(--space-xs) + var(--font-height-tiny));
    --marginTop: var(--space-xl);

    padding-top: var(--space-m);
    min-height: calc(100vh - var(--mobileNavHeight) - var(--marginTop));
    align-items: center;
  }

  ${media.mobile`
    @media (orientation: portrait) {
      padding-top: var(--space-xxl);
      min-height: auto;
      align-items: auto;
    }
    min-height: auto;
    align-items: start;
  `}

  & > * {
    max-width: calc(72rem / 1.618);
  }
`
