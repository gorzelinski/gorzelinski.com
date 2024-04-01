import { cva } from '@/styled-system/css'
import { inputFontSize } from './input.utils'

export const inputWrapper = cva({
  base: {
    position: 'relative',
    ...inputFontSize,
    '& > input': {
      width: '100%',
      paddingLeft: 'calc(2 * token(spacing.s) + 1lh)'
    },
    '& > span': {
      position: 'absolute',
      top: 's',
      left: 's',
      color: 'gray.700'
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
    width: 'responsive'
  }
})
