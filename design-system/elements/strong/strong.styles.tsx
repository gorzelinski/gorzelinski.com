import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const strong = cva({
  base: {
    color: 'gray.100',
    fontWeight: 'bold',
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
