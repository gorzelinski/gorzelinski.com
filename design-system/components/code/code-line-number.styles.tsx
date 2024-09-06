import { cva } from '@/styled-system/css'

export const codeLineNumber = cva({
  base: {
    display: 'inline-block',
    width: '2ch',
    marginRight: {
      base: 's',
      md: 'm'
    },
    userSelect: 'none'
  },
  variants: {
    color: {
      default: {
        color: 'inherit'
      },
      highlight: {
        color: 'primary.400'
      }
    }
  },
  defaultVariants: {
    color: 'default'
  }
})
