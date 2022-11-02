import { css } from "styled-components"

export const moveIcon = {
  forward: css`
    & > .icon {
      transition: transform var(--duration-natural) ease-in-out;
      transform: translateX(0px);
    }

    &:hover {
      & > .icon {
        transform: translateX(calc(1 * var(--space-20)));
      }
    }
    &:active {
      & > .icon {
        transform: translateX(calc(2 * var(--space-20)));
      }
    }
  `,
  back: css`
    & > .icon {
      transition: transform var(--duration-natural) ease-in-out;
      transform: translateX(0px);
    }

    &:hover {
      & > .icon {
        transform: translateX(calc(-1 * var(--space-20)));
      }
    }
    &:active {
      & > .icon {
        transform: translateX(calc(-2 * var(--space-20)));
      }
    }
  `,
}
