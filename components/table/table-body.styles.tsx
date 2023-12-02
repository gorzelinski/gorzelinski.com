import { cva } from '@/styled-system/css'

export const tableBody = cva({
  base: {
    borderTop: 'gray.regular',
    borderBottom: 'gray.regular',
    '& tr:nth-child(2)': {
      backgroundColor: 'primary.900'
    }
  }
})
