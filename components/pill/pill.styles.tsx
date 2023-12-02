import { cva } from '@/styled-system/css'

export const pill = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'heading',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    borderRadius: 's',
    paddingX: 's',
    paddingY: 'xs',
    minWidth: '2xs',
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
    style: {
      info: {
        color: 'primary.400',
        backgroundColor: 'primary.900'
      },
      success: {
        color: 'success.400',
        backgroundColor: 'success.900'
      },
      warning: {
        color: 'warning.400',
        backgroundColor: 'warning.900'
      },
      danger: {
        color: 'danger.400',
        backgroundColor: 'danger.900'
      }
    }
  },
  defaultVariants: {
    style: 'info'
  }
})
