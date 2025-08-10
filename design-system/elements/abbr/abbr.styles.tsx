import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const abbr = cva({
  base: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textUnderlineOffset: 'token(spacing.2xs)',
    textDecorationColor: 'gray.400',
    textDecorationThickness: 'auto',
    cursor: 'help',
    transitionProperty: 'text-decoration-color',
    ...sharedTransitionProperties,
    _hover: {
      textDecorationColor: 'primary.400'
    }
  }
})
