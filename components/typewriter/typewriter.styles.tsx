import { cva } from '@/styled-system/css'

export const typewriter = cva({
  base: {
    _after: {
      content: '"|"',
      animation: 'blinking',
      color: 'primary.400'
    }
  }
})
