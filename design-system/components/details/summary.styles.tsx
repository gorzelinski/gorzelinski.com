import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const summary = cva({
  base: {
    display: 'flex',
    gap: 's',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: {
      base: 'none',
      md: 'm'
    },
    color: 'gray.50',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      '2xl': 's'
    },
    lineHeight: {
      base: '3xs',
      md: '2xs',
      lg: 'xs',
      '2xl': 's'
    },
    cursor: 'pointer',
    listStyle: 'none',
    transitionProperty: 'color',
    ...sharedTransitionProperties,
    _hover: {
      color: 'primary.400'
    },
    _focusVisible: {
      color: 'primary.400',
      outline: 'gray.regular',
      outlineOffset: 's'
    },
    '&::-webkit-details-marker': {
      display: 'none'
    },
    '& > .icon': {
      flexShrink: '0',
      transform: 'rotate(0deg)',
      transitionProperty: 'transform, color',
      ...sharedTransitionProperties,
      _motionReduce: {
        transitionProperty: 'color'
      }
    },
    '&:is(details[open] > *) > .icon': {
      transform: 'rotate(90deg)'
    }
  }
})
