import styled, { css } from "styled-components"

import { outline } from "../effects"
import { ui } from "../typography"
import { border } from "../utils"

export const Input = styled.input`
  ${ui}
  ${border.interactive}
  ${outline}
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
