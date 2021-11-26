import styled, { css } from "styled-components"

import { borderTop, media } from "./utils"
import { spanAll } from "./grid"

export const Navigation = styled.nav`
  ${spanAll}
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-xs);

  ${media.tablet`
    gap: var(--space-s);
  `}

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.$spaceBetween &&
    css`
      justify-content: space-between;
    `}
  
  ${props =>
    props.$main &&
    css`
      ${borderTop}
      background-color: var(--color-background);
      padding: calc(var(--space-xs) - var(--space-xxxs)) var(--space-xs)
        var(--space-xs);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      justify-content: space-evenly;

      ${media.mobile`
        background-color: transparent;
        border-top: 0;
        padding: 0;
        position: static;
        z-index: 0;
        justify-content: flex-end;
      `}
    `}
`
