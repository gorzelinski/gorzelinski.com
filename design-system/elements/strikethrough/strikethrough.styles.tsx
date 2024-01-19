import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const strikethrough = cva({
  base: {
    textDecoration: 'line-through',
    color: 'gray.300',
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
