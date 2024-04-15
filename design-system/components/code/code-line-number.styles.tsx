import { cva } from '@/styled-system/css'

export const codeLineNumber = cva({
  base: {
    userSelect: 'none',
    display: 'inline-block',
    width: '2ch',
    marginRight: {
      base: 's',
      md: 'm'
    }
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
