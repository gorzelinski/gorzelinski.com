import { css } from "styled-components"

export const border = {
  all: css`
    border-radius: var(--border-radius-m);
    border: var(--space-xxxs) solid var(--color-gray-90);
  `,
  top: css`
    border-top: var(--space-xxxs) solid var(--color-gray-80);
  `,
  bottom: css`
    border-bottom: var(--space-xxxs) solid var(--color-gray-80);
  `,
  interactive: css`
    border-style: solid;
    border-radius: var(--border-radius-s);
    border-width: var(--space-xxxs);
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
