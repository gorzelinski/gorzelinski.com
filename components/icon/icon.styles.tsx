import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const icon = cva({
  base: {
    display: 'inline-block',
    transitionProperty: 'background-color, color',
    ...sharedTransitionProperties
  },
  variants: {
    color: {
      inherit: {
        color: 'inherit'
      },
      primary: {
        color: 'primary.400'
      },
      gray: {
        color: 'gray.400'
      },
      danger: {
        color: 'danger.400'
      },
      warning: {
        color: 'warning.400'
      },
      success: {
        color: 'success.400'
      },
      borderPrimary: {
        color: 'primary.700'
      },
      borderGray: {
        color: 'gray.700'
      },
      background: {
        color: 'gray.900'
      }
    },
    size: {
      l: {
        width: '1.25lh',
        height: '1.25lh'
      },
      m: {
        width: '1lh',
        height: '1lh'
      },
      s: {
        width: '0.75lh',
        height: '0.75lh'
      }
    }
  },
  defaultVariants: {
    color: 'inherit',
    size: 'm'
  }
})
