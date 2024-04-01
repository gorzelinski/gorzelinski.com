import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const underline = cva({
  base: {
    textDecorationLine: 'underline',
    textUnderlineOffset: 'token(spacing.2xs)',
    transitionProperty: 'text-decoration-color',
    ...sharedTransitionProperties
  }
})
