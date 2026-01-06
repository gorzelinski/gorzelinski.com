import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const small = cva({
  base: {
    display: 'inline-block',
    color: 'gray.400',
    fontFamily: 'heading',
    fontWeight: 'medium',

    transitionProperty: 'color',
    ...sharedTransitionProperties
  },
  variants: {
    size: {
      s: {
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
        }
      },
      m: {
        fontSize: {
          base: '3xs',
          md: '2xs',
          lg: 'xs',
          '2xl': 's'
        },
        lineHeight: {
          base: '3xs',
          md: '2xs',
          lg: 'xs',
          '2xl': 's'
        }
      }
    },
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
    },
    marginTop: {
      none: {
        marginTop: '0'
      },
      s: {
        marginTop: 's'
      }
    }
  },
  defaultVariants: {
    size: 's',
    spacing: 'normal',
    style: 'normal',
    marginTop: 'none'
  }
})
