import { cva } from '@/styled-system/css'

export const strikethrough = cva({
  base: {
    textDecoration: 'line-through',
    color: 'gray.300'
  }
})
