import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const bottomNav = cva({
  base: {
    zIndex: 'closest',
    position: 'fixed',
    bottom: '0',
    left: '0',
    display: 'inline-flex',
    justifyContent: 'space-between',
    gap: {
      base: 's',
      md: 'm'
    },
    width: '100%',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingY: 'm',
    backgroundColor: 'gray.900',
    borderTop: 'gray.subtle',
    transitionProperty: 'background-color, border-color, opacity',
    ...sharedTransitionProperties,
    md: {
      display: 'none'
    }
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
    }
  },
  defaultVariants: {
    opacity: 'visible'
  }
})
