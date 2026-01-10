import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    maxWidth: {
      xl: 'calc(token(sizes.m) - token(spacing.l))',
      '2xl': 'l'
    },
    marginRight: 'xs'
  }
})
