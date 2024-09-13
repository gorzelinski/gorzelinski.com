import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const anchor = cva({
  base: {
    borderRadius: 's',
    color: 'primary.400',
    textUnderlineOffset: 'token(spacing.2xs)',
    textDecorationLine: 'underline',
    textDecorationColor: 'transparent',
    textDecorationThickness: 'auto',
    transitionProperty: 'color, text-decoration-color',
    ...sharedTransitionProperties,
    cursor: 'pointer',
    _hover: {
      textDecorationColor: 'primary.400'
    },
    _focusVisible: {
      textDecorationColor: 'primary.400',
      outline: 'none'
    },
    _visited: {
      color: 'primary.400'
    },
    '& > :is(h1, h2, h3, h4, p, small, li, caption, figcaption, code)': {
      color: 'primary.400'
    }
  }
})
