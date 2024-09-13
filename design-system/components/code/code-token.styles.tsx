import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '@/design-system/utils'

export const codeToken = cva({
  base: {
    transitionProperty: 'color',
    ...sharedTransitionProperties
  }
})
