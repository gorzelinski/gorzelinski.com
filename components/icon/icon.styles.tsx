import { cva } from '@/styled-system/css'

export const icon = cva({
  base: {
    display: 'inline-block'
  },
  variants: {
    color: {
      inherit: {
        color: 'inherit'
      },
      primary: {
        color: 'primary.400'
      },
      gray: {
        color: 'gray.400'
      },
      danger: {
        color: 'danger.400'
      },
      warning: {
        color: 'warning.400'
      },
      success: {
        color: 'success.400'
      },
      borderPrimary: {
        color: 'primary.700'
      },
      borderGray: {
        color: 'gray.700'
      },
      background: {
        color: 'gray.900'
      }
    },
    size: {
      l: {
        width: '2em',
        height: '2em'
      },
      m: {
        width: '1em',
        height: '1em'
      },
      s: {
        width: '0.5em',
        height: '0.5em'
      }
    }
  },
  defaultVariants: {
    color: 'inherit',
    size: 'm'
  }
})
