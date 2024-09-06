import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const callout = cva({
  base: {
    position: 'relative',
    width: '100%',
    padding: 'm',
    borderRadius: 'm',
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties,
    '& > span': {
      position: 'absolute',
      borderRadius: 'circle',
      backgroundColor: 'gray.900'
    },
    '& > *:last-child': {
      margin: '0'
    }
  },
  variants: {
    variant: {
      info: {
        border: 'primary.subtle',
        backgroundColor: 'primary.900',
        color: 'primary.400'
      },
      danger: {
        border: 'danger.subtle',
        backgroundColor: 'danger.900',
        color: 'danger.400'
      },
      warning: {
        border: 'warning.subtle',
        backgroundColor: 'warning.900',
        color: 'warning.400'
      },
      success: {
        border: 'success.subtle',
        backgroundColor: 'success.900',
        color: 'success.400'
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
