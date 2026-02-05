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
    },
    margin: {
      bleed: {
        marginX: {
          base: '-m',
          sm: '-l',
          md: '-xl',
          lg: '-2xl',
          xl: '-4xl'
        }
      }
    }
  },
  defaultVariants: {
    textAlign: 'center'
  }
})
