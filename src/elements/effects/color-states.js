import { css } from "styled-components"

export const primaryColorStates = css`
  color: var(--color-primary-base);

  &:hover {
    color: var(--color-primary-40);
  }
  &:focus,
  :focus-visible {
    color: var(--color-primary-30);
  }
  &:active {
    color: var(--color-primary-20);
  }
`

export const primaryBackgroundColorStates = css`
  background-color: var(--color-primary-base);

  &:hover {
    background-color: var(--color-primary-40);
  }
  &:focus,
  :focus-visible {
    background-color: var(--color-primary-30);
  }
  &:active {
    background-color: var(--color-primary-20);
  }
`

export const textColorStates = css`
  color: var(--color-gray-base);

  &:hover {
    color: var(--color-gray-40);
  }
  &:focus,
  :focus-visible {
    color: var(--color-gray-20);
  }
  &:active {
    color: var(--color-gray-00);
  }
`
