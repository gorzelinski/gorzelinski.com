import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const footer = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'l',
    borderTop: 'gray.subtle',
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
      base: 'calc(4 * var(--spacing-s) + var(--line-heights-2xs) + var(--spacing-s))',
      md: 'xl'
    },
    transitionProperty: 'background-color, border-color',
    ...sharedTransitionProperties
  }
})
