import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const kbd = cva({
  base: {
    display: 'inline-block',
    minWidth: '2em',
    paddingY: '2xs',
    paddingX: 'calc(1em / 2)',
    borderRadius: 'xs',
    border: 'gray.subtle',
    color: 'gray.400',
    backgroundColor: 'gray.800',
    boxShadow: 'neumorphism.closer',
    fontFamily: 'heading',
    fontWeight: 'bold',
    fontSize: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    lineHeight: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    textAlign: 'center',
    transitionProperty: 'border-color, background-color, box-shadow, color',
    ...sharedTransitionProperties
  }
})
