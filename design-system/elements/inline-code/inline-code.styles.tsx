import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const inlineCode = cva({
  base: {
    display: 'inline-block',
    paddingX: 'xs',
    paddingY: '2xs',
    borderRadius: 's',
    backgroundColor: 'gray.800',
    boxShadow: 'neumorphism.closest',
    color: 'primary.400',
    fontFamily: 'code',
    fontWeight: 'regular',
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
    transitionProperty: 'background-color, box-shadow, color',
    ...sharedTransitionProperties
  }
})
