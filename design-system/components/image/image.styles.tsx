import { cva } from '@/styled-system/css'

export const image = cva({
  variants: {
    aspectRatio: {
      auto: {
        aspectRatio: 'auto'
      },
      portrait: {
        aspectRatio: 'portrait'
      },
      square: {
        aspectRatio: 'square'
      },
      golden: {
        aspectRatio: 'golden'
      },
      landscape: {
        aspectRatio: 'landscape'
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
  }
})
