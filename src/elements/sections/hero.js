import styled from "styled-components"

import { media } from "../utils"
import { grid } from "../grid"

export const Hero = styled.section`
  ${grid}
  --min-height: auto;
  --padding-top: var(--space-60);
  --align-items: start;

  min-height: var(--min-height);
  padding-top: var(--padding-top);
  align-items: var(--align-items);

  @media (orientation: portrait) {
    --margin-top: var(--space-40);
    --padding-top: var(--space-40);
    --align-items: center;
    --min-height: calc(
      100svh - var(--nav-mobile-height) - var(--margin-top) -
        var(--nav-top-height)
    );
  }

  ${media.mobile`
    --min-height: auto;
    --align-items: start;

    @media (orientation: portrait) {
      --min-height: auto;
      --padding-top: var(--space-70);
      --align-items: start;
    }
  `}

  ${media.tablet`
    --padding-top: var(--space-70);
  `}

  & > * {
    max-width: calc(var(--wrapper-width) / 1.618);
  }
`
