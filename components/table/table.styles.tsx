import { cva } from '@/styled-system/css'

export const table = cva({
  base: {
    maxWidth: '100%',
    borderSpacing: 's',
    borderCollapse: 'collapse',
    fontFamily: 'body',
    fontWeight: 'regular',
    color: 'gray.200',
    fontSize: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    },
    lineHeight: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    }
  }
})
