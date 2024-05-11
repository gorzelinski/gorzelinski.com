import { cva } from '@/styled-system/css'
import { verticalRhythm } from '../../utils'

export const hero = cva({
  base: {
    width: {
      base: '100%',
      lg: 'calc(100% / 1.618)'
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 'xl',
    _portrait: {
      minHeight: {
        base: 'calc(100svh - 7 * token(spacing.xl))',
        md: 'xl!'
      }
    },
    ...verticalRhythm.gap.m
  },
  variants: {
    align: {
      start: {
        alignItems: 'start',
        textAlign: 'start'
      },
      center: {
        alignItems: 'center',
        textAlign: 'center',
        marginX: 'auto'
      },
      end: {
        alignItems: 'end',
        textAlign: 'end',
        marginLeft: 'auto'
      }
    }
  },
  defaultVariants: {
    align: 'start'
  }
})
