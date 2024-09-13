import { cva } from '@/styled-system/css'
import { inputFontSize } from './input.utils'
import { sharedTransitionProperties } from '../../utils'

export const input = cva({
  base: {
    padding: 'calc(token(spacing.s) - token(spacing.3xs))',
    border: 'gray.subtle',
    borderRadius: 's',
    backgroundColor: 'gray.900',
    color: 'gray.200',
    fontFamily: 'heading',
    fontWeight: 'medium',
    ...inputFontSize,
    letterSpacing: 'wide',
    transitionProperty: 'background-color, border-color, color',
    ...sharedTransitionProperties,
    appearance: 'none',
    _placeholder: {
      color: 'gray.700'
    },
    '&:not(:focus):hover': {
      borderColor: 'gray.500'
    },
    _focus: {
      borderColor: 'gray.400',
      outline: 0
    },
    _active: {
      borderColor: 'gray.400'
    },
    _disabled: {
      backgroundColor: 'gray.800',
      cursor: 'not-allowed',
      pointerEvents: 'none'
    }
  },
  variants: {
    width: {
      fixed: {
        width: 'auto'
      },
      responsive: {
        base: {
          width: '100%'
        },
        md: {
          width: '2xl'
        }
      },
      stretch: {
        width: '100%'
      }
    }
  },
  defaultVariants: {
    width: 'stretch'
  }
})
