import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const navbar = cva({
  base: {
    zIndex: 'closest',
    left: '0',
    display: 'flex',
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
    position: {
      top: {
        position: 'sticky',
        top: '0',
        justifyContent: 'space-between'
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        borderTop: 'gray.subtle',
        md: {
          display: 'none'
        }
      }
    },
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
