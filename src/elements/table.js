import React from "react"
import styled from "styled-components"

import { media } from "./utils"
import { body, heading, paragraph } from "./typography"

export const StyledTable = styled.table`
  ${body}
  ${paragraph.base}
  width: 100%;
  border-collapse: collapse;
  border-spacing: var(--space-xs);
  margin-bottom: var(--vertical-rhythm);

  ${media.tablet`
    ${heading.xxs}
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
