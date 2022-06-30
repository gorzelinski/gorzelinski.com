import styled, { css } from "styled-components"

import { border, media } from "../utils"

export const code = css`
  font-size: var(--font-size-small);
  font-family: var(--font-family-code);
  font-weight: var(--font-weight-regular);
  transition: background-color var(--duration-natural) ease-out,
    box-shadow var(--duration-natural) ease-out;
`

export const InlineCode = styled.code`
  ${code}
  font-weight: inherit;
  display: inline-block;
  line-height: var(--font-height-small);
  color: var(--color-primary-base);
  background-color: var(--color-gray-90);
  border-radius: var(--border-radius-s);
  padding: var(--space-xxs) var(--space-xs);
  box-shadow: var(--shadow-depth-00);
`

export const BlockCode = styled.pre`
  ${border.bottom}
  ${border.top}
  display: block;
  position: relative;
  padding: calc(var(--space-s) - var(--space-xxxs));
  margin: 0 var(--overflow-wrapper);
  margin-bottom: var(--vertical-rhythm);
  box-shadow: var(--shadow-depth-10);

  ${media.tablet`
    ${border.all}
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
