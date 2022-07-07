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
  type: props => {
    const info = css`
      color: var(--color-primary-base);
      background-color: var(--color-primary-100);
    `
    switch (props.$type) {
      case "info":
        return info
      case "danger":
        return css`
          color: var(--color-red-base);
          background-color: var(--color-red-100);
        `
      case "warning":
        return css`
          color: var(--color-orange-base);
          background-color: var(--color-orange-100);
        `
      case "success":
        return css`
          color: var(--color-green-base);
          background-color: var(--color-green-100);
        `
      default:
        return info
    }
  },
}
