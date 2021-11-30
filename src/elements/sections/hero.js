import styled from "styled-components"

import { grid } from "../grid"
import { media } from "../utils"

export const Hero = styled.section`
  ${grid}
  padding-top: var(--space-xxl);

  @media (orientation: portrait) {
    --mobile-nav-height: calc(
      var(--space-xxxs) + var(--space-xs) - var(--space-xxxs) +
        var(--font-height-tiny) + 3 * var(--space-xs)
    );
    --top-nav-height: calc(var(--font-height-base) + 2 * var(--space-xs));
    --margin-top: var(--space-m);

    min-height: calc(
      100vh - var(--mobile-nav-height) - var(--margin-top) -
        var(--top-nav-height)
    );

    padding-top: var(--space-m);
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
