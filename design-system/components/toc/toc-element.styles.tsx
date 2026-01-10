import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    textWrap: 'wrap',
    '&:not(:first-child)': {
      marginTop: '2xs'
    },
    '& > ol': {
      borderLeft: 'gray.subtle',
      paddingLeft: 'm'
    }
  }
})
