import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../utils'

export const code = cva({
  base: {
    fontFamily: 'code',
    fontWeight: 'regular',
    fontSize: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      xl: '2xs',
      '2xl': 'xs'
    },
    lineHeight: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      xl: '2xs',
      '2xl': 'xs'
    },
    transitionProperty: 'background-color, box-shadow, color',
    ...sharedTransitionProperties
  },
  variants: {
    style: {
      inline: {
        display: 'inline-block',
        color: 'primary.400',
        backgroundColor: 'gray.800',
        borderRadius: 's',
        paddingX: 'xs',
        padding: '2xs',
        boxShadow: 'neumorphism.closest'
      }
    }
  },
  defaultVariants: {
    style: 'inline'
  }
})
