import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const inlineCode = cva({
  base: {
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
    display: 'inline-block',
    color: 'primary.400',
    backgroundColor: 'gray.800',
    borderRadius: 's',
    paddingX: 'xs',
    paddingY: '2xs',
    boxShadow: 'neumorphism.closest',
    transitionProperty: 'background-color, box-shadow, color',
    ...sharedTransitionProperties
  }
})
