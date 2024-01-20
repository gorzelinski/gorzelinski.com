import { cva } from '@/styled-system/css'

export const main = cva({
  base: {
    maxWidth: 'breakpoint-xl',
    marginX: 'auto',
    paddingX: {
      base: 'm',
      sm: 'l',
      xl: 'xl',
      '2xl': '0'
    }
  }
})
