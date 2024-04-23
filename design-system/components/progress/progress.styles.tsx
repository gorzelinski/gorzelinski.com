import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const progress = cva({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'token(spacing.2xs)',
    backgroundColor: 'gray.700',
    zIndex: 'farther',
    md: {
      width: '2xl',
      left: 's',
      top: 'calc((100% - token(sizes.2xl)) / 2)',
      transform: 'rotate(90deg)',
      transformOrigin: 'top left',
      borderRadius: 'xs'
    },
    lg: {
      left: 'm'
    },
    transitionProperty: 'background-color, opacity',
    ...sharedTransitionProperties
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
