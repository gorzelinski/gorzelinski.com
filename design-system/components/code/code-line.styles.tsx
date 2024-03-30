import { cva } from '@/styled-system/css'

export const codeLine = cva({
  base: {
    _first: {
      marginTop: {
        base: 's',
        md: 'm'
      }
    },
    _last: {
      marginBottom: {
        base: 's',
        md: 'm'
      }
    }
  }
})
