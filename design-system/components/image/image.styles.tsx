import { cva } from '@/styled-system/css'

export const image = cva({
  base: {
    objectFit: 'cover',
    objectPosition: 'center'
  },
  variants: {
    aspectRatio: {
      auto: {
        aspectRatio: 'auto'
      },
      portrait: {
        aspectRatio: '2 / 3'
      },
      square: {
        aspectRatio: 'square'
      },
      landscape: {
        aspectRatio: 'landscape'
      },
      golden: {
        aspectRatio: 'golden'
      },
      wide: {
        aspectRatio: 'wide'
      },
      cinema: {
        aspectRatio: '21 / 9'
      },
      ultrawide: {
        aspectRatio: 'ultrawide'
      }
    },
    borderRadius: {
      none: {
        borderRadius: 'none'
      },
      rounded: {
        borderRadius: 'l'
      },
      circle: {
        borderRadius: 'circle'
      }
    }
  },
  defaultVariants: {
    aspectRatio: 'auto',
    borderRadius: 'none'
  }
})
