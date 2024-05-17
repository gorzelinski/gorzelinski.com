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
      _first: {
        alignSelf: {
          base: 'flex-start',
          md: 'baseline'
        }
      },
      _last: {
        alignSelf: {
          base: 'flex-end',
          md: 'baseline'
        }
      }
    }
  }
})
