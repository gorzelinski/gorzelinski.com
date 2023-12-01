import { cva } from '@/styled-system/css'

export const list = cva({
  base: {
    listStylePosition: 'inside'
  },
  variants: {
    style: {
      disc: {
        listStyleType: 'disc'
      },
      number: {
        listStyleType: 'number'
      }
    }
  }
})
