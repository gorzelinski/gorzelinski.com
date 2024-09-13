import { cva } from '@/styled-system/css'

export const codeHeader = cva({
  base: {
    display: 'flex',
    gap: 's',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& > *': {
      userSelect: 'none',
      margin: '0'
    }
  }
})
