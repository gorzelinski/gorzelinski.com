import { cva } from '@/styled-system/css'

export const header = cva({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row'
    },
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 's'
  }
})
