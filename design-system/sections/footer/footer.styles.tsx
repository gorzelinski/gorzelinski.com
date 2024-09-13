import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const footer = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'l',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingTop: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingBottom: {
      base: 'calc(4 * token(spacing.s) + token(lineHeights.2xs) + token(spacing.s))',
      md: 'xl'
    },
    borderTop: 'gray.subtle',
    transitionProperty: 'background-color, border-color',
    ...sharedTransitionProperties
  }
})
