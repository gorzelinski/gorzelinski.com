import { css } from "styled-components"

export const outline = css`
  &:focus {
    outline: var(--space-xxs) solid var(--color-primary-base);
    outline-offset: var(--space-xxs);
  }
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  &:focus-visible {
    outline: var(--space-xxs) solid var(--color-primary-base);
    outline-offset: var(--space-xxs);
  }
`
