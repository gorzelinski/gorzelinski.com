import { cva } from '@/styled-system/css'

export const navigation = cva({
  base: {
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
    },
    display: {
      always: {
        display: 'inline-flex'
      },
      desktop: {
        display: {
          base: 'none',
          md: 'inline-flex'
        }
      }
    },
    width: {
      auto: {
        width: 'auto'
      },
      responsive: {
        width: {
          base: '100%',
          md: 'auto'
        },
        justifyContent: 'space-between'
      }
    }
  },
  defaultVariants: {
    display: 'always',
    width: 'auto'
  }
})
