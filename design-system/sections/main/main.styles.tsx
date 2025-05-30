import { cva } from '@/styled-system/css'

export const main = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      base: '2xl',
      md: '3xl',
      xl: '4xl'
    },
    maxWidth: 'breakpoint-xl',
    marginX: 'auto',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl',
      '2xl': '0'
    },
    paddingY: {
      base: '2xl',
      md: '3xl',
      xl: '4xl'
    }
  }
})
