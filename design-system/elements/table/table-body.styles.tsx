import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const tableBody = cva({
  base: {
    borderTop: 'gray.regular',
    borderBottom: 'gray.regular',
    transitionProperty: 'border-color',
    ...sharedTransitionProperties,
    '& tr': {
      _even: {
        backgroundColor: 'primary.900'
      }
    }
  }
})
