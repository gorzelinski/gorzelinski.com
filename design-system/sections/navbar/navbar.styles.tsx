import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const navbar = cva({
  base: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'gray.900',
    zIndex: 'farther',
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
          borderTop: 'none',
          width: 'auto'
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
    },
    padding: {
      standard: {
        padding: {
          base: 'm',
          sm: 'l',
          md: 'xl'
        }
      },
      compact: {
        paddingX: {
          base: 'm',
          sm: 'l',
          md: 'xl'
        },
        paddingY: {
          base: 'm'
        }
      }
    }
  },
  defaultVariants: {
    position: 'top',
    opacity: 'visible',
    padding: 'standard'
  }
})
