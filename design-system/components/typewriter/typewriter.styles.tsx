import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const typewriter = cva({
  base: {
    _after: {
      content: '"|"',
      color: 'primary.400',
      transitionProperty: 'color',
      ...sharedTransitionProperties,
      animation: 'blinking',
      _motionReduce: {
        content: 'none',
        animation: 'none'
      }
    }
  }
})
