import styled from "styled-components"

import { ui } from "../typography"
import { border } from "../utils"

export const InputWrapper = styled.div`
  position: relative;
  & > input {
    width: 100%;
    padding-left: calc(var(--space-xs) * 2 + var(--font-height-base));
  }
  & > span {
    position: absolute;
    top: var(--space-xs);
    left: var(--space-xs);
  }
`

export const Input = styled.input`
  ${ui}
  ${border.interactive}
  color: var(--color-gray-30);
  background-color: transparent;
  padding: calc(var(--space-xs) - var(--space-xxxs));

  &::placeholder {
    color: var(--color-gray-80);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-90);
  }
  &[type="search"] {
    outline-offset: 0;
  }
  &[type="search"]::-webkit-search-cancel-button {
    appearance: none;
  }
`
