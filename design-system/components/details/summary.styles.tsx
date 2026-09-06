import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const summary = cva({
  base: {
    display: 'flex',
    gap: 's',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'gray.25',
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
    '&::-webkit-details-marker': {
      display: 'none'
    },
    '& > .icon': {
      flexShrink: '0',
      transitionProperty: 'transform, color',
      ...sharedTransitionProperties,
      _motionReduce: {
        transitionProperty: 'color'
      }
    },
    _hover: {
      color: 'primary.400'
    },
    _focusVisible: {
      outline: 'gray.regular',
      outlineOffset: 's'
    }
  }
})
