import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const thematicBreak = cva({
  base: {
    width: 'm',
    maxWidth: 'calc(100% / 1.618)',
    height: 'token(spacing.xs)',
    marginX: 'auto',
    border: 'none',
    backgroundColor: 'primary.400',
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})
