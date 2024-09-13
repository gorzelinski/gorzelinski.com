import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const blockquote = cva({
  base: {
    paddingLeft: {
      base: 'm',
      lg: 'l'
    },
    borderLeft: 'primary.regular',
    transitionProperty: 'border-color',
    ...sharedTransitionProperties,
    '& > p': {
      color: 'gray.400',
      fontStyle: 'italic',
      fontWeight: 'regular',
      fontSize: {
        base: 's',
        md: 'm',
        lg: 'l',
        '2xl': 'xl'
      },
      lineHeight: {
        base: 's',
        md: 'm',
        lg: 'l',
        '2xl': 'xl'
      }
    }
  }
})
