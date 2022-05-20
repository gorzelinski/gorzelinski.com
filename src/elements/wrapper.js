import styled, { css } from "styled-components"

import { media } from "./utils"

export const Background = styled.div`
  background-color: var(--color-background);
  min-height: 100vh;
  height: auto;
`

// TODO: make layout better on large screens. Change max width after
export const Wrapper = styled.div`
  ${props =>
    props.$global &&
    css`
      --top-nav-height: calc(var(--font-height-base) + 2 * var(--space-xs));
      --mobile-nav-height: calc(
        var(--space-xxxs) + var(--space-xs) - var(--space-xxxs) +
          var(--font-height-tiny) + 3 * var(--space-xs)
      );
      --wrapper-padding: var(--space-s);
      --wrapper-margin: 0;
      --overflow-wrapper: calc(-1 * var(--wrapper-padding));
      padding: var(--wrapper-padding);
      margin: var(--wrapper-margin);
      max-width: var(--wrapper-width, 100%);

      ${media.tiny`
        --wrapper-padding: var(--space-m);
      `}

      ${media.tablet`
        --wrapper-padding: var(--space-l);
      `}

      ${media.desktop`
        --wrapper-margin: 0 auto;
        --wrapper-padding: 0;
        --wrapper-width: 72rem;
        padding: var(--space-l) var(--wrapper-padding);
      `}
      
      ${media.large`
        --wrapper-margin: 0 auto;
        --wrapper-width: 75rem;
      `}
    `}
`
