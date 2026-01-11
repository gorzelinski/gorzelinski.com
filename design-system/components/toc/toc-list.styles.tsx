import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const tocList = cva({
  base: {
    marginY: '0',
    padding: '0',
    listStyleType: 'none',
    transitionProperty: 'border-color',
    ...sharedTransitionProperties,
    'li > &': {
      paddingLeft: 'm',
      borderLeft: 'gray.subtle'
    }
  }
})
