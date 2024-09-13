import { cva } from '@/styled-system/css'

export const navigation = cva({
  base: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: {
      base: 's',
      md: 'm',
      lg: 'l',
      xl: 'xl'
    }
  },
  variants: {
    align: {
      left: {
        marginLeft: '-s'
      },
      right: {
        marginRight: '-s'
      },
      none: {
        margin: '0'
      }
    }
  }
})
