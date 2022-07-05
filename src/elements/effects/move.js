import { css } from "styled-components"

export const iconForward = css`
  & > span {
    transition: transform var(--duration-natural) ease-in-out;
    transform: translateX(0px);
  }

  &:hover {
    & > span {
      transform: translateX(calc(1 * var(--space-20)));
    }
  }

  &:active {
    & > span {
      transform: translateX(calc(2 * var(--space-20)));
    }
  }
`

export const iconBack = css`
  & > span {
    transition: transform var(--duration-natural) ease-in-out;
    transform: translateX(0px);
  }

  &:hover {
    & > span {
      transform: translateX(calc(-1 * var(--space-20)));
    }
  }

  &:active {
    & > span {
      transform: translateX(calc(-2 * var(--space-20)));
    }
  }
`
