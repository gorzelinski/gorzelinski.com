import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const topBar = cva({
  base: {
    zIndex: 'closest',
    position: 'sticky',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingY: 'm',
    backgroundColor: 'gray.900',
    transitionProperty: 'background-color, border-color, opacity',
    ...sharedTransitionProperties
  },
  variants: {
    opacity: {
      visible: {
        opacity: '97'
      },
      hidden: {
        opacity: '0',
        pointerEvents: 'none'
      }
    },
    border: {
      bottom: {
        borderBottom: 'gray.subtle'
      },
      transparent: {
        borderColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    opacity: 'visible'
  }
})
