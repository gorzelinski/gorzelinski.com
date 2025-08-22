import { cva } from '@/styled-system/css'

export const figure = cva({
  base: {
    display: 'block'
  },
  variants: {
    textAlign: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      }
    }
  },
  defaultVariants: {
    textAlign: 'center'
  }
})
