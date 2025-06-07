import { cva } from '@/styled-system/css'

export const pre = cva({
  base: {
    overflowX: 'auto',
    paddingY: {
      base: 's',
      md: 'm'
    }
  }
})
