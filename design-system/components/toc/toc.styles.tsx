import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const toc = cva({
  base: {
    display: 'none',
    transitionProperty: 'opacity',
    ...sharedTransitionProperties,
    xl: {
      display: 'block',
      position: 'fixed',
      top: 'calc((100% - token(sizes.2xl)) / 2)',
      left: 'l',
      height: '2xl',
      zIndex: 'farther',
      overflowY: 'auto'
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
