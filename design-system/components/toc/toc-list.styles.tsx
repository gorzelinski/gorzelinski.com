import { cva } from '@/styled-system/css'

export const tocList = cva({
  base: {
    marginY: '0',
    padding: '0',
    listStyleType: 'none',
    '& > li': {
      marginTop: '2xs'
    },
    '& li > ol': {
      borderLeft: 'gray.subtle',
      marginTop: '2xs',
      paddingLeft: 'm',
      padding: '0',
      listStyleType: 'none'
    }
  }
})
