import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const pill = cva({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '2xs',
    paddingX: 's',
    paddingY: 'xs',
    borderRadius: 's',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    lineHeight: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    letterSpacing: 'wide',
    transitionProperty: 'background-color, color',
    ...sharedTransitionProperties
  },
  variants: {
    variant: {
      info: {
        backgroundColor: 'primary.900',
        color: 'primary.400'
      },
      success: {
        backgroundColor: 'success.900',
        color: 'success.400'
      },
      warning: {
        backgroundColor: 'warning.900',
        color: 'warning.400'
      },
      danger: {
        backgroundColor: 'danger.900',
        color: 'danger.400'
      }
    }
  },
  defaultVariants: {
    variant: 'info'
  }
})
