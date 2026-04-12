import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const table = cva({
  base: {
    width: '100%',
    borderSpacing: 's',
    borderCollapse: 'collapse',
    color: 'gray.200',
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      '2xl': 's'
    },
    lineHeight: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      '2xl': 's'
    },
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
