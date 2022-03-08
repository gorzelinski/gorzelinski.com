import { css } from "styled-components"

export const border = {
  all: css`
    border-radius: var(--space-s);
    border: var(--space-xxxs) solid var(--color-gray-80);
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
    border-width: var(--space-xxs);
    border-color: var(--color-gray-80);

    &:hover:enabled {
      border-color: var(--color-gray-60);
    }

    &:focus:enabled {
      border-color: var(--color-gray-60);
    }

    &:active:enabled {
      border-color: var(--color-gray-base);
    }
  `,
}
