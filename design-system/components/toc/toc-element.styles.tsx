import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    textWrap: 'pretty',
    '&:not(:first-child)': {
      marginTop: '2xs'
    }
  }
})
