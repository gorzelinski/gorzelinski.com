import styled from "styled-components"

import { colorStates } from "../effects"
import { Small } from "../typography"

export const Pill = styled(Small)`
  margin: 0;
  min-width: var(--space-40);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-self: start;
  border-radius: var(--border-radius-10);
  padding: var(--space-20);
  user-select: none;
  transition: background-color var(--duration-natural) ease-out;
  ${colorStates.type}
`
