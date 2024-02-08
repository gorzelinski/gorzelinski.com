import { cva } from '@/styled-system/css'
import { inputFontSize } from './input.utils'
import { sharedTransitionProperties } from '../../utils'

export const input = cva({
  base: {
    appearance: 'none',
    fontFamily: 'heading',
    fontWeight: 'medium',
    letterSpacing: 'wide',
    padding: 'calc(var(--spacing-s) - var(--spacing-3xs))',
    color: 'gray.200',
    backgroundColor: 'gray.900',
    border: 'gray.subtle',
    borderRadius: 's',
    transitionProperty: 'background-color, border-color, color',
    ...inputFontSize,
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
