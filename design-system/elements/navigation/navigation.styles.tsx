import { cva } from '@/styled-system/css'

export const navigation = cva({
  base: {
    display: 'inline-flex',
    gap: {
      base: '0',
      sm: 's',
      md: 'm',
      lg: 'l',
      xl: 'xl'
    }
  }
})
