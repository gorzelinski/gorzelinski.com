import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const table = cva({
  base: {
    maxWidth: '100%',
    borderSpacing: 's',
    borderCollapse: 'collapse',
    fontFamily: 'body',
    fontWeight: 'regular',
    color: 'gray.200',
    fontSize: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      xl: 'xs',
      '2xl': 's'
    },
    lineHeight: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      xl: 'xs',
      '2xl': 's'
    },
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
