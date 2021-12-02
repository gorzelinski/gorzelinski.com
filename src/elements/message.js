import styled, { css } from "styled-components"

export const Message = styled.aside`
  position: relative;
  border-radius: var(--space-s);
  padding: var(--space-s);
  margin-bottom: var(--font-height-base);

  ${props =>
    props.$info &&
    css`
      color: var(--color-primary-base);
      background-color: var(--color-primary-100);
    `}

  ${props =>
    props.$danger &&
    css`
      color: var(--color-danger-base);
      background-color: var(--color-danger-100);
    `}

  ${props =>
    props.$warning &&
    css`
      color: var(--color-warning-base);
      background-color: var(--color-warning-100);
    `}

  ${props =>
    props.$success &&
    css`
      color: var(--color-success-base);
      background-color: var(--color-success-100);
    `}

  & > *:nth-child(2) {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > span {
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
