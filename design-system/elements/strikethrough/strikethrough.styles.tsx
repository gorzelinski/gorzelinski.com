import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const strikethrough = cva({
  base: {
    color: 'gray.300',
    textDecoration: 'line-through',
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
