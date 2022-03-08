import styled from "styled-components"

import { ui } from "../typography"
import { border } from "../utils"

export const Input = styled.input`
  ${ui}
  ${border.interactive}
  color: var(--color-gray-00);
  background-color: transparent;
  padding: calc(var(--space-xs) - var(--space-xxs));

  &::placeholder {
    color: var(--color-gray-base);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-90);
  }
`
