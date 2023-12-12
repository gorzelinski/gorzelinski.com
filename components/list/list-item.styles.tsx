import { cva } from '@/styled-system/css'

export const listItem = cva({
  base: {
    color: 'gray.200',
    fontFamily: 'body',
    fontWeight: 'regular',
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
    },
    _marker: {
      color: 'primary.400'
    }
  }
})
