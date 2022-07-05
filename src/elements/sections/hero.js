import styled from "styled-components"

import { grid } from "../grid"
import { media } from "../utils"

export const Hero = styled.section`
  ${grid}
  padding-top: var(--space-70);

  @media (orientation: portrait) {
    --margin-top: var(--space-40);

    min-height: calc(
      100vh - var(--nav-mobile-height) - var(--margin-top) -
        var(--nav-top-height)
    );
    padding-top: var(--space-40);
    align-items: center;
  }

  ${media.mobile`
    @media (orientation: portrait) {
      padding-top: var(--space-70);
      min-height: auto;
      align-items: start;
    }
    min-height: auto;
    align-items: start;
  `}

  & > * {
    max-width: calc(var(--wrapper-width) / 1.618);
  }
`
