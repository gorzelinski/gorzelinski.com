import styled, { css } from "styled-components"

import { marginReset, media } from "./utils"

export const Callout = styled.div`
  position: relative;
  border-radius: var(--space-s);
  padding: var(--space-s);
  margin: var(--font-height-base) 0;

  ${media.tablet`
    margin: var(--font-height-xxs) 0;
  `}

  ${marginReset}

  ${props => {
    switch (props.$type) {
      case "info":
        return css`
          color: var(--color-primary-base);
          background-color: var(--color-primary-100);
        `
      case "danger":
        return css`
          color: var(--color-danger-base);
          background-color: var(--color-danger-100);
        `
      case "warning":
        return css`
          color: var(--color-warning-base);
          background-color: var(--color-warning-100);
        `
      case "success":
        return css`
          color: var(--color-success-base);
          background-color: var(--color-success-100);
        `
      default:
        return css`
          color: var(--color-primary-base);
          background-color: var(--color-primary-100);
        `
    }
  }}

  & > *:nth-child(2) {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > .icon {
    --width: calc(var(--font-height-base) + 2 * var(--space-xs));
    --height: var(--width);
    position: absolute;
    top: calc(-1 * var(--height) / 2);
    right: calc(-1 * var(--width) / 2);
    padding: var(--space-xs);
    background-color: var(--color-background);
    border-radius: 50%;
  }
`
