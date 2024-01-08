import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../elements'

export const callout = cva({
  base: {
    position: 'relative',
    borderRadius: 'm',
    padding: 'm',
    '& > .icon': {
      position: 'absolute',
      backgroundColor: 'gray.900',
      borderRadius: 'circle'
    },
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties
  },
  variants: {
    style: {
      info: {
        backgroundColor: 'primary.900',
        color: 'primary.400',
        border: 'primary.subtle'
      },
      danger: {
        backgroundColor: 'danger.900',
        color: 'danger.400',
        border: 'danger.subtle'
      },
      warning: {
        backgroundColor: 'warning.900',
        color: 'warning.400',
        border: 'warning.subtle'
      },
      success: {
        backgroundColor: 'success.900',
        color: 'success.400',
        border: 'success.subtle'
      }
    },
    alignIcon: {
      left: {
        '& > span:first-child': {
          top: 'calc(-1 * var(--spacing-m))',
          left: 'calc(-1 * var(--spacing-m))'
        }
      },
      right: {
        '& > span:first-child': {
          top: 'calc(-1 * var(--spacing-m))',
          right: 'calc(-1 * var(--spacing-m))'
        }
      }
    }
  },
  defaultVariants: {
    style: 'info',
    alignIcon: 'right'
  }
})
