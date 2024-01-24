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
    alignItems: 'start',
    justifyContent: 'center',
    minHeight: 'breakpoint-md',
    _portrait: {
      minHeight: {
        base: 'calc(100svh - 2 * var(--spacing-xl))',
        md: 'breakpoint-md'
      }
    },
    ...verticalRhythm
  }
})
