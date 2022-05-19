import { css } from "styled-components"

export const border = {
  all: css`
    border-radius: var(--space-s);
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
    border-radius: var(--space-xs);
    border-width: var(--space-xxxs);
    border-color: var(--color-gray-80);

    &:hover:enabled {
      border-color: var(--color-gray-60);
    }

    &:focus:enabled,
    &:focus-visible:enabled {
      border-color: var(--color-gray-30);
      outline: 0;
    }

    &:active:enabled {
      border-color: var(--color-gray-30);
    }
  `,
}
