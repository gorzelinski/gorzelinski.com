import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const blockquote = cva({
  base: {
    borderLeft: 'primary.regular',
    paddingLeft: {
      base: 'm',
      lg: 'l'
    },
    transitionProperty: 'border-color',
    ...sharedTransitionProperties,
    '& > p': {
      fontStyle: 'italic',
      color: 'gray.400',
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
