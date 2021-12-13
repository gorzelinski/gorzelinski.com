import styled, { css } from "styled-components"

import { border, borderBottom, borderTop, media } from "../utils"

export const code = css`
  font-size: var(--font-size-small);
  font-family: var(--font-family-code);
  font-weight: var(--font-weight-regular);
`

export const InlineCode = styled.code`
  ${code}
  font-weight: inherit;
  display: inline-block;
  line-height: var(--font-height-small);
  color: var(--color-primary-base);
  background-color: var(--color-primary-100);
  border-radius: var(--space-xs);
  padding: var(--space-xxs) var(--space-xs);
`

export const BlockCode = styled.pre`
  ${borderBottom}
  ${borderTop}
  display: block;
  position: relative;
  padding: calc(var(--space-s) - var(--space-xxxs));
  margin: 0 calc(-1 * var(--space-s)) var(--font-height-base);

  ${media.tiny`
    margin: 0 calc(-1 * var(--space-m)) var(--font-height-base);
  `}

  ${media.tablet`
    ${border}
    margin: 0 0 var(--font-height-xxs);
    box-shadow: var(--shadow-neumorphism);
  `}

  & > code {
    ${code}
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    line-height: var(--font-height-base);
    & > div:last-child {
      margin-bottom: var(--space-s);
    }
    & > div {
      & > span:first-child {
        display: inline-block;
        width: 2rem;
        text-align: right;
        user-select: none;
        padding: 0 var(--space-s) 0 0;
      }
    }
  }

  & > small {
    position: absolute;
    right: var(--space-s);
    top: var(--space-s);
    user-select: none;
  }
`
