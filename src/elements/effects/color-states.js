import { css } from "styled-components"

export const colorStates = {
  primary: css`
    transition: color var(--duration-immediate) ease-in;
    color: var(--color-primary-base);

    &:hover {
      color: var(--color-primary-40);
    }
    &:focus {
      color: var(--color-primary-30);
    }
    &:active {
      color: var(--color-primary-20);
    }
  `,
  primaryBackground: css`
    transition: background-color var(--duration-immediate) ease-in;
    background-color: var(--color-primary-base);

    &:hover {
      background-color: var(--color-primary-40);
    }
    &:focus {
      background-color: var(--color-primary-30);
    }
    &:active {
      background-color: var(--color-primary-20);
    }
  `,
  text: css`
    transition: color var(--duration-immediate) ease-in;
    color: var(--color-gray-base);

    &:hover {
      color: var(--color-gray-30);
    }
    &:focus {
      color: var(--color-gray-20);
    }
    &:active {
      color: var(--color-gray-00);
    }
  `,
}
