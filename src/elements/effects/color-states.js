import { css } from "styled-components"

export const colorStates = props => {
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
}
