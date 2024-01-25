import { cva } from '@/styled-system/css'
import { verticalRhythm } from '../../utils'

export const split = cva({
  base: {
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      sm: '1fr 1fr'
    },
    ...verticalRhythm
  },
  variants: {
    align: {
      start: {
        alignItems: 'start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      }
    }
  },
  defaultVariants: {
    align: 'start'
  }
})
