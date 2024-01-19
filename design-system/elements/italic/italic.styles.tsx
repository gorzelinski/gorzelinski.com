import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const italic = cva({
  base: {
    color: 'gray.300',
    fontStyle: 'italic',
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
