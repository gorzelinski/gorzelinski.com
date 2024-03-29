import React from "react"
import styled from "styled-components"

import { media } from "../utils"
import { body, heading, paragraph } from "../typography"

export const StyledTable = styled.table`
  ${body}
  ${paragraph.base}
  width: 100%;
  border-collapse: collapse;
  border-spacing: var(--space-20);
  margin-bottom: var(--space-30);

  ${media.tablet`
    ${heading.xxs}
  `}

  & th {
    display: table-cell;
    font-weight: var(--font-weight-bold);
    text-align: start;
    padding: var(--space-20);
  }

  & td {
    display: table-cell;
    font-weight: var(--font-weight-regular);
    text-align: start;
    padding: var(--space-20);
  }

  & tbody {
    border-top: var(--space-00) solid var(--color-gray-70);
    border-bottom: var(--space-00) solid var(--color-gray-70);
    transition: border-color var(--duration-natural) ease-out;
  }

  & tbody tr:nth-child(2n) {
    background-color: var(--color-primary-100);
    transition: background-color var(--duration-natural) ease-out;
  }
`

export const TableWrapper = styled.div`
  overflow: auto;
  margin-bottom: var(--vertical-rhythm);
`

export const Table = ({ children }) => (
  <TableWrapper>
    <StyledTable>{children}</StyledTable>
  </TableWrapper>
)
