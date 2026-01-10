import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const toc = cva({
  base: {
    display: 'none',
    marginLeft: '2xs',
    transitionProperty: 'opacity',
    ...sharedTransitionProperties,
    xl: {
      display: 'block',
      position: 'fixed',
      top: '25vh',
      left: 'l',
      height: '50vh',
      zIndex: 'closer',
      overflowY: 'hidden'
    }
  },
  variants: {
    opacity: {
      visible: {
        opacity: '100'
      },
      hidden: {
        opacity: '0',
        pointerEvents: 'none'
      }
    }
  }
})
