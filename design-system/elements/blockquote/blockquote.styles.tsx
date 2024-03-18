import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const blockquote = cva({
  base: {
    borderLeft: 'primary.regular',
    paddingLeft: {
      base: 'm',
      lg: 'l'
    },
    transitionProperty: 'border-color',
    ...sharedTransitionProperties
  }
})
