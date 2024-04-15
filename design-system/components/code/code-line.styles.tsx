import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const codeLine = cva({
  base: {
    ...sharedTransitionProperties,
    transitionProperty: 'background-color',
    _first: {
      marginTop: {
        base: 's',
        md: 'm'
      }
    },
    _last: {
      marginBottom: {
        base: 's',
        md: 'm'
      }
    }
  },
  variants: {
    backgroundColor: {
      default: {
        backgroundColor: 'inherit'
      },
      highlight: {
        backgroundColor: 'primary.900'
      }
    }
  },
  defaultVariants: {
    backgroundColor: 'default'
  }
})
