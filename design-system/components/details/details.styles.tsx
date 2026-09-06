import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const details = cva({
  base: {
    width: '100%',
    padding: 'm',
    border: 'gray.regular',
    borderRadius: {
      base: 'm',
      md: 'l'
    },
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties,
    '& *:not(code):not(kbd)': {
      boxShadow: 'none'
    },
    '& > summary + *': {
      marginTop: '0'
    },
    '& > *:last-child': {
      marginBottom: '0'
    },
    '&[open] > summary': {
      marginBottom: 'm'
    }
  }
})
