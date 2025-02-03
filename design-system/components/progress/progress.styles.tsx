import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const progress = cva({
  base: {
    zIndex: 'closest',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'token(spacing.2xs)',
    backgroundColor: 'gray.700',
    transitionProperty: 'background-color, opacity',
    ...sharedTransitionProperties,
    md: {
      top: 'calc((100% - token(sizes.2xl)) / 2)',
      left: 's',
      width: '2xl',
      borderRadius: 'xs',
      transform: 'rotate(90deg)',
      transformOrigin: 'top left'
    },
    lg: {
      left: 'm'
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
