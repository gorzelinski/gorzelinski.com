import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../elements'

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
