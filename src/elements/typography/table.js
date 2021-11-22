import styled from "styled-components"

import { body } from "./body"

export const Table = styled.table`
  ${body}
  width: 100%;
  margin-bottom: var(--font-height-base);
  border-collapse: collapse;
  border-spacing: var(--space-xs);

  & thead tr th {
    border-bottom: var(--space-xxxs) solid var(--color-surface-shade500);
  }
`
