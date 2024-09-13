import { cva } from '@/styled-system/css'

export const tableCell = cva({
  base: {
    display: 'table-cell',
    padding: 's',
    textAlign: 'start'
  },
  variants: {
    weight: {
      heading: {
        fontWeight: 'bold'
      },
      body: {
        fontWeight: 'regular'
      }
    }
  },
  defaultVariants: {
    weight: 'body'
  }
})
