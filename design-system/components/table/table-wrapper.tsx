import type { TableWrapperProps } from './table-wrapper.types'
import { styled } from '@/styled-system/jsx'
import { tableWrapper } from './table-wrapper.styles'

const StyledTableWrapper = styled('div', tableWrapper)

export function TableWrapper(props: TableWrapperProps) {
  return <StyledTableWrapper tabIndex={0} {...props} />
}
