import { cva } from '@/styled-system/css'

export const anchor = cva({
  base: {
    borderRadius: 's',
    cursor: 'pointer',
    color: 'primary.400',
    textDecorationLine: 'underline',
    textUnderlineOffset: 'var(--spacing-2xs)',
    textDecorationThickness: 'auto',
    textDecorationColor: 'transparent',
    transitionProperty: 'color, text-decoration-color',
    transitionDuration: 'natural',
    transitionTimingFunction: 'easeOut',
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
