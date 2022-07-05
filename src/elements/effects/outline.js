import { css } from "styled-components"

export const outline = css`
  &:focus {
    outline: var(--space-10) solid var(--color-primary-base);
    outline-offset: var(--space-10);
  }
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  &:focus-visible {
    outline: var(--space-10) solid var(--color-primary-base);
    outline-offset: var(--space-10);
  }
`
