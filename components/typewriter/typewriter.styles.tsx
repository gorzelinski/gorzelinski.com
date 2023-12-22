import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const typewriter = cva({
  base: {
    _after: {
      content: '"|"',
      animation: 'blinking',
      color: 'primary.400',
      transitionProperty: 'color',
      ...sharedTransitionProperties
    }
  }
})
