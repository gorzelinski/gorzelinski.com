import type { TableProps } from './table.types'
import { styled } from '@/styled-system/jsx'
import { table } from './table.styles'
import { TableWrapper } from './table-wrapper'

const StyledTable = styled('table', table)

export function Table({ css, ...props }: TableProps) {
  return (
    <TableWrapper css={css}>
      <StyledTable {...props} />
    </TableWrapper>
  )
}
