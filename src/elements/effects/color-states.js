import { css } from "styled-components"

export const primaryColorStates = css`
  color: var(--color-primary-base);

  &:hover {
    color: var(--color-primary-shade200);
  }
  &:focus,
  :focus-visible {
    color: var(--color-primary-shade300);
  }
  &:active {
    color: var(--color-primary-shade500);
  }
`

export const textColorStates = css`
  color: var(--color-text-shade500);

  &:hover {
    color: var(--color-text-shade400);
  }
  &:focus,
  :focus-visible {
    color: var(--color-text-shade300);
  }
  &:active {
    color: var(--color-text-base);
  }
`
