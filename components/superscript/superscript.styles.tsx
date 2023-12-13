import { cva } from '@/styled-system/css'

export const superscript = cva({
  base: {
    color: 'gray.300',
    fontFamily: 'inherit',
    fontWeight: 'regular',
    fontSize: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      xl: '2xs',
      '2xl': 'xs'
    },
    lineHeight: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      xl: '2xs',
      '2xl': 'xs'
    }
  }
})
