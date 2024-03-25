import { styled } from '@/styled-system/jsx'
import { tableCell } from './table-cell.styles'

export const Td = styled('td', tableCell, {
  defaultProps: {
    weight: 'body'
  }
})

export const Th = styled('th', tableCell, {
  defaultProps: {
    weight: 'heading'
  }
})
