import { cva } from '@/styled-system/css'

export const blockquote = cva({
  base: {
    borderLeft: 'primary.regular',
    paddingLeft: {
      base: 'm',
      md: 'm',
      lg: 'l',
      xl: 'l'
    },
    transitionProperty: 'border-color',
    transitionDuration: 'natural',
    transitionTimingFunction: 'easeOut'
  }
})
