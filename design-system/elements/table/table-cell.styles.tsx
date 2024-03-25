import { cva } from '@/styled-system/css'

export const tableCell = cva({
  base: {
    display: 'table-cell',
    textAlign: 'start',
    padding: 's'
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
