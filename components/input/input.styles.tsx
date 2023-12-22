import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const input = cva({
  base: {
    minWidth: 'xl',
    appearance: 'none',
    fontFamily: 'heading',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    padding: 's',
    color: 'gray.200',
    backgroundColor: 'gray.900',
    border: 'gray.subtle',
    borderRadius: 's',
    fontSize: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    },
    lineHeight: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    },
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties,
    _placeholder: {
      color: 'gray.700'
    },
    '&:not(:focus):hover': {
      borderColor: 'gray.500'
    },
    _focus: {
      outline: 0,
      borderColor: 'gray.400'
    },
    _active: {
      borderColor: 'gray.400'
    },
    _disabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      backgroundColor: 'gray.800'
    }
  }
})
