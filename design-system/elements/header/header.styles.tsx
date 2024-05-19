import { cva } from '@/styled-system/css'

export const header = cva({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: {
      base: 'column',
      sm: 'row'
    },
    justifyContent: 'space-between',
    gap: 's',
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
