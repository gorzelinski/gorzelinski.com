import styled, { css } from "styled-components"

import { ui } from "../typography"

export const border = css`
  border-radius: var(--space-xs);
  border-width: var(--space-xxs);
  border-style: solid;
  border-color: var(--color-surface-shade200);

  &:hover {
    border-color: var(--color-surface-shade400);
  }

  &:focus {
    border-color: var(--color-surface-shade500);
  }

  &:active {
    border-color: var(--color-text-shade500);
  }
`

export const Input = styled.input`
  ${ui}
  ${border}
  color: var(--color-text-base);
  background-color: transparent;
  padding: calc(var(--space-xs) - var(--space-xxs));

  &::placeholder {
    color: var(--color-text-shade500);
  }

  ${props =>
    props.disabled &&
    css`
      background-color: var(--color-surface-base);

      &::placeholder {
        color: var(--color-surface-shade500);
      }
    `}
`
