import { cva } from '@/styled-system/css'

export const article = cva({
  base: {
    width: '100%',
    maxWidth: 'lineLength',
    marginX: 'auto',
    marginY: {
      base: '2xl',
      md: '3xl',
      xl: '4xl'
    }
  }
})
