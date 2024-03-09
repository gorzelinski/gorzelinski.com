import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const background = cva({
  base: {
    minWidth: '100vw',
    minHeight: '100svh',
    backgroundColor: 'gray.900',
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})