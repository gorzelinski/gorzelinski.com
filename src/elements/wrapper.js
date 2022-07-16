import styled, { css } from "styled-components"

import { media } from "./utils"

export const Background = styled.div`
  background-color: var(--color-background);
  min-height: 100vh;
  height: auto;
  transition: background-color var(--duration-natural) ease-out;
`

export const Wrapper = styled.div`
  ${props =>
    props.$global &&
    css`
      --nav-top-height: calc(var(--font-height-base) + 2 * var(--space-20));
      --nav-mobile-height: calc(
        var(--space-00) + var(--space-20) - var(--space-00) +
          var(--font-height-00) + 3 * var(--space-20)
      );
      --wrapper-padding: var(--space-30);
      --wrapper-margin: 0;
      --overflow-wrapper: calc(-1 * var(--wrapper-padding));
      --vertical-rhythm: var(--font-height-base);
      padding: var(--wrapper-padding);
      margin: var(--wrapper-margin);
      max-width: var(--wrapper-width, 100%);

      ${media.tiny`
        --wrapper-padding: var(--space-40);
      `}

      ${media.tablet`
        --wrapper-padding: var(--space-50);
        --vertical-rhythm: var(--font-height-30);
      `}

      ${media.desktop`
        --wrapper-margin: 0 auto;
        --wrapper-padding: 0;
        --wrapper-width: 72rem;
        padding: var(--space-50) var(--wrapper-padding);
      `}
      
      ${media.large`
        --wrapper-margin: 0 auto;
        --wrapper-width: 80rem;
      `}
    `}
`
