import { cva } from '@/styled-system/css'

export const thematicBreak = cva({
  base: {
    backgroundColor: 'primary.400',
    height: '2px',
    width: 'm',
    maxWidth: 'calc(100% / 1.618)',
    marginX: 'auto'
  }
})
