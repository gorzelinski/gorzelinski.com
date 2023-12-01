import { cva } from '@/styled-system/css'

export const anchor = cva({
  base: {
    borderRadius: 's',
    cursor: 'pointer',
    color: 'primary.400',
    textDecoration: 'underline',
    textDecorationColor: 'transparent',
    transitionProperty: 'text-decoration-color',
    transitionDuration: 'fast',
    transitionTimingFunction: 'easeInSine',
    _hover: {
      textDecorationColor: 'primary.400'
    },
    _focusVisible: {
      textDecorationColor: 'transparent',
      outline: 'primary.regular',
      outlineOffset: 'xs'
    },
    _visited: {
      color: 'primary.300',
      textDecorationColor: 'primary.300'
    },
    '& > :is(h1, h2, h3, h4, p, small, li, caption, figcaption, code)': {
      color: 'primary.400'
    }
  }
})
