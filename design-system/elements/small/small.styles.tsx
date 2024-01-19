import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

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
    },
    transitionProperty: 'color',
    ...sharedTransitionProperties
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
    },
    side: {
      top: {
        captionSide: 'top'
      },
      bottom: {
        captionSide: 'bottom'
      }
    }
  },
  defaultVariants: {
    spacing: 'normal',
    style: 'normal'
  }
})
