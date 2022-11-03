import styled from "styled-components"

import { border } from "../utils"
import { ui } from "../typography"

export const InputWrapper = styled.div`
  position: relative;

  & > input {
    width: 100%;
    padding-left: calc(var(--space-20) * 2 + var(--font-height-base));
  }

  & > .icon {
    position: absolute;
    top: var(--space-20);
    left: var(--space-20);
  }
`

export const Input = styled.input`
  ${ui}
  ${border.interactive}
  appearance: none;
  color: var(--color-gray-30);
  background-color: var(--color-background);
  padding: calc(var(--space-20) - var(--space-00));
  transition: border-color var(--duration-natural) ease-out,
    background-color var(--duration-natural) ease-out,
    color var(--duration-natural) ease-out;

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
