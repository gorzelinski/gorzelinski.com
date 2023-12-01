import { cva } from '@/styled-system/css'

export const small = cva({
  base: {
    color: 'gray.400',
    fontFamily: 'heading',
    fontWeight: 'medium',
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
  },
  variants: {
    spacing: {
      normal: {
        letterSpacing: 'normal'
      },
      wide: {
        letterSpacing: 'wide'
      }
    },
    style: {
      normal: {
        fontStyle: 'normal'
      },
      italic: {
        fontStyle: 'italic'
      }
    }
  },
  defaultVariants: {
    spacing: 'normal',
    style: 'normal'
  }
})
