import { css } from "styled-components"

export const border = {
  all: css`
    border-radius: var(--border-radius-20);
    border: var(--space-00) solid var(--color-gray-90);
  `,
  top: css`
    border-top: var(--space-00) solid var(--color-gray-80);
  `,
  bottom: css`
    border-bottom: var(--space-00) solid var(--color-gray-80);
  `,
  interactive: css`
    border-style: solid;
    border-radius: var(--border-radius-10);
    border-width: var(--space-00);
    border-color: var(--color-gray-80);

    &:hover:enabled {
      border-color: var(--color-gray-60);
    }
    &:focus:enabled {
      border-color: var(--color-gray-30);
      outline: 0;
    }
    &:active:enabled {
      border-color: var(--color-gray-30);
    }
  `,
}
