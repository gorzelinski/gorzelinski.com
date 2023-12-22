import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const thematicBreak = cva({
  base: {
    backgroundColor: 'primary.400',
    border: 'none',
    height: 'var(--spacing-xs)',
    width: 'm',
    maxWidth: 'calc(100% / 1.618)',
    marginX: 'auto',
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})
