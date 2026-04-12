import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const tableRow = cva({
  base: {
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})
