import { cva } from '@/styled-system/css'

export const navbar = cva({
  base: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'gray.900',
    zIndex: 'farther',
    opacity: '95',
    padding: {
      base: 's',
      sm: 'm',
      md: 'l'
    }
  },
  variants: {
    position: {
      top: {
        position: 'sticky',
        top: '0',
        left: '0',
        borderBottom: 'gray.subtle'
      },
      bottom: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        borderTop: 'gray.subtle'
      }
    },
    structure: {
      nested: {
        padding: {
          base: 's',
          sm: 's',
          md: '0'
        },
        md: {
          position: 'static',
          borderTop: 'none',
          width: 'auto'
        }
      }
    }
  },
  defaultVariants: {
    position: 'top'
  }
})
