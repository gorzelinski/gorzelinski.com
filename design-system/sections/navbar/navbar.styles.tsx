import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const navbar = cva({
  base: {
    zIndex: 'farther',
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
    transitionProperty: 'background-color, border-color, opacity, padding',
    ...sharedTransitionProperties
  },
  variants: {
    position: {
      top: {
        position: 'sticky',
        top: '0',
        left: '0'
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        left: '0'
      }
    },
    structure: {
      nested: {
        padding: {
          base: 's',
          sm: 's',
          md: '0'
        },
        md: {
          position: 'static',
          width: 'auto',
          borderTop: 'none'
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
      top: {
        borderTop: 'gray.subtle'
      },
      transparent: {
        borderColor: 'transparent'
      }
    }
  },
  defaultVariants: {
    position: 'top',
    opacity: 'visible'
  }
})
