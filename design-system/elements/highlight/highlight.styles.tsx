import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const highlight = cva({
  base: {
    paddingY: '2xs',
    backgroundColor: 'warning.800',
    color: 'inherit',
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})
