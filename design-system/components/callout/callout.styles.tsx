import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const callout = cva({
  base: {
    width: '100%',
    position: 'relative',
    borderRadius: 'm',
    padding: 'm',
    '& > span': {
      position: 'absolute',
      backgroundColor: 'gray.900',
      borderRadius: 'circle'
    },
    '& > *:last-child': {
      margin: '0'
    },
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties
  },
  variants: {
    variant: {
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
          top: 'calc(-1 * token(spacing.m))',
          left: 'calc(-1 * token(spacing.m))'
        }
      },
      right: {
        '& > span:first-child': {
          top: 'calc(-1 * token(spacing.m))',
          right: 'calc(-1 * token(spacing.m))'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'info',
    alignIcon: 'right'
  }
})
