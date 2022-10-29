import styled from "styled-components"

import { colorStates } from "../effects"
import { Small } from "../typography"

export const Pill = styled(Small)`
  min-width: var(--space-40);
  border-radius: var(--border-radius-10);
  margin: 0;
  padding: var(--space-20);
  display: inline-flex;
  justify-self: start;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: background-color var(--duration-natural) ease-out;
  ${colorStates}
`
