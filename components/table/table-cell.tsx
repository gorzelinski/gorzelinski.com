import { styled } from '@/styled-system/jsx'
import { tableCell } from './table-cell.styles'

export const Td = styled('td', tableCell, {
  defaultProps: {
    style: 'body'
  }
})

export const Th = styled('th', tableCell, {
  defaultProps: {
    style: 'heading'
  }
})
