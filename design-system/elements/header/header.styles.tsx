import { cva } from '@/styled-system/css'

export const header = cva({
  base: {
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row'
    },
    justifyContent: 'space-between',
    gap: 's',
    width: '100%',
    '& > *': {
      '&:nth-child(1)': {
        alignSelf: {
          base: 'flex-start',
          md: 'baseline'
        }
      },
      '&:nth-child(2)': {
        alignSelf: {
          base: 'flex-end',
          md: 'baseline'
        }
      }
    }
  }
})
