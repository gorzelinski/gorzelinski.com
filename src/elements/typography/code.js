import styled, { css } from "styled-components"
import { border, media } from "../utils"

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
  color: var(--color-text-shade300);
  background-color: var(--color-surface-shade200);
  border-radius: var(--space-xs);
  padding: var(--space-xxs) calc(2 * var(--space-xxs));
`

export const BlockCode = styled.pre`
  display: block;
  position: relative;
  padding: var(--space-s);
  margin: 0 calc(-1 * var(--space-s)) var(--font-height-base);

  ${media.tiny`
    margin: 0 calc(-1 * var(--space-m)) var(--font-height-base);
  `}

  ${media.tablet`
    ${border}
    margin: 0 0 var(--font-height-base);
    box-shadow: var(--shadow-neumorphism);
  `}

  & > code {
    ${code}
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    line-height: var(--font-height-base);
    & > div {
      & > span:first-child {
        user-select: none;
        padding: 0 var(--space-s) 0 0;
      }
    }
  }

  & > small {
    position: absolute;
    right: var(--space-s);
    bottom: var(--space-s);
    user-select: none;
  }
`
