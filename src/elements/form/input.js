import styled, { css } from "styled-components"

import { ui } from "../typography"

export const border = css`
  border-style: solid;
  border-radius: var(--space-xs);
  border-width: var(--space-xxs);
  border-color: var(--color-gray-80);

  &:hover {
    border-color: var(--color-gray-60);
  }

  &:focus {
    border-color: var(--color-gray-60);
  }

  &:active {
    border-color: var(--color-gray-base);
  }
`

export const Input = styled.input`
  ${ui}
  ${border}
  color: var(--color-gray-00);
  background-color: transparent;
  padding: calc(var(--space-xs) - var(--space-xxs));

  &::placeholder {
    color: var(--color-gray-base);
  }

  ${props =>
    props.disabled &&
    css`
      background-color: var(--color-gray-90);

      &::placeholder {
        color: var(--color-gray-60);
      }
    `}
`
