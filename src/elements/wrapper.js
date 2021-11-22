import styled, { css } from "styled-components"

import { media } from "./utils"

export const Background = styled.div`
  background-color: var(--color-background);
  min-height: 100vh;
`

// TODO: make layout better on large screens. Change max width after
export const Wrapper = styled.div`
  ${props =>
    props.$global &&
    css`
      padding: var(--space-l) var(--space-s);
      max-width: 100%;

      ${media.tiny`
        margin: 0;
        padding: var(--space-l) var(--space-m);
      `}

      ${media.tablet`
        margin: 0;
        padding: var(--space-xl) var(--space-l);
      `}

      ${media.desktop`
        margin: 0 auto;
        padding: var(--space-xxl) 0;
        max-width:  ${72 + "rem"};
      `}
      
      ${media.large`
        margin: 0 auto;
        padding: var(--space-xxl) 0;
        max-width:  ${72 + "rem"};
      `}
    `}
`
