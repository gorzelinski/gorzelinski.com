import { cva } from '@/styled-system/css'

export const paragraph = cva({
  base: {
    fontFamily: 'body'
  },
  variants: {
    color: {
      regular: {
        color: 'gray.200'
      },
      subtle: {
        color: 'gray.400'
      }
    },
    size: {
      xl: {
        fontSize: {
          base: 's',
          md: 'm',
          lg: 'l',
          xl: 'l',
          '2xl': 'xl'
        },
        lineHeight: {
          base: 's',
          md: 'm',
          lg: 'l',
          xl: 'l',
          '2xl': 'xl'
        }
      },
      l: {
        fontSize: {
          base: 'xs',
          md: 's',
          lg: 'm',
          xl: 'm',
          '2xl': 'l'
        },
        lineHeight: {
          base: 'xs',
          md: 's',
          lg: 's',
          xl: 'm',
          '2xl': 'l'
        }
      },
      m: {
        fontSize: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          xl: 's',
          '2xl': 'm'
        },
        lineHeight: {
          base: '2xs',
          md: 'xs',
          lg: 's',
          xl: 's',
          '2xl': 'm'
        }
      },
      s: {
        fontSize: {
          base: '3xs',
          md: '2xs',
          lg: 'xs',
          xl: 'xs',
          '2xl': 's'
        },
        lineHeight: {
          base: '3xs',
          md: '2xs',
          lg: 'xs',
          xl: 'xs',
          '2xl': 's'
        }
      }
    },
    weight: {
      regular: {
        fontWeight: 'regular'
      },
      bold: {
        fontWeight: 'bold'
      }
    },
    style: {
      normal: {
        fontStyle: 'normal'
      },
      italic: {
        fontStyle: 'italic'
      }
    }
  },
  defaultVariants: {
    color: 'regular',
    size: 'm',
    weight: 'regular',
    style: 'normal'
  }
})
