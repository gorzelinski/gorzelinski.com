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
      padding: var(--space-s) var(--space-s)
        calc(var(--mobile-nav-height) + var(--space-s)) var(--space-s);
      max-width: 100%;

      ${media.tiny`
        margin: 0;
        padding: var(--space-m) var(--space-m) calc(var(--mobile-nav-height) + var(--space-m)) var(--space-m);
      `}

      ${media.tablet`
        margin: 0;
        padding: var(--space-xl) var(--space-l);
      `}

      ${media.desktop`
        margin: 0 auto;
        padding: var(--space-xl) 0;
        max-width:  ${72 + "rem"};
      `}
      
      ${media.large`
        margin: 0 auto;
        padding: var(--space-xl) 0;
        max-width:  ${72 + "rem"};
      `}
    `}
`
