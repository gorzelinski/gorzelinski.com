import React from "react"
import styled from "styled-components"

import { media } from "./utils"
import { baseSize, headingXXS } from "./typography/sizes"
import { body } from "./typography/body"

export const StyledTable = styled.table`
  ${body}
  ${baseSize}
  width: 100%;
  border-collapse: collapse;
  border-spacing: var(--space-xs);
  margin-bottom: var(--font-height-base);

  ${media.tablet`
    ${headingXXS}
    margin-bottom: var(--font-height-xxs);
  `}

  & th {
    display: table-cell;
    font-weight: var(--font-weight-bold);
    text-align: start;
    padding: var(--space-xs);
  }

  & td {
    display: table-cell;
    font-weight: var(--font-weight-regular);
    text-align: start;
    padding: var(--space-xs);
  }

  & tbody {
    border-top: var(--space-xxxs) solid var(--color-gray-70);
    border-bottom: var(--space-xxxs) solid var(--color-gray-70);
  }

  & tbody tr:nth-child(2n) {
    background-color: var(--color-primary-100);
  }
`

export const TableWrapper = styled.div`
  overflow: auto;
`

export const Table = ({ children }) => (
  <TableWrapper>
    <StyledTable>{children}</StyledTable>
  </TableWrapper>
)
