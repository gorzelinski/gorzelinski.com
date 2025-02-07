import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const heading = cva({
  base: {
    scrollMarginTop: '9vh',
    color: 'gray.50',
    fontFamily: 'heading',
    fontWeight: 'bold',
    transitionProperty: 'color',
    ...sharedTransitionProperties
  },
  variants: {
    size: {
      xl: {
        fontSize: {
          base: 'xl',
          md: '2xl',
          lg: '3xl',
          '2xl': '4xl'
        },
        lineHeight: {
          base: 'xl',
          md: '2xl',
          lg: '3xl',
          '2xl': '4xl'
        }
      },
      l: {
        fontSize: {
          base: 'l',
          md: 'xl',
          lg: '2xl',
          '2xl': '3xl'
        },
        lineHeight: {
          base: 'l',
          md: 'xl',
          lg: '2xl',
          '2xl': '3xl'
        }
      },
      m: {
        fontSize: {
          base: 'm',
          md: 'l',
          lg: 'xl',
          '2xl': '2xl'
        },
        lineHeight: {
          base: 'm',
          md: 'l',
          lg: 'xl',
          '2xl': '2xl'
        }
      },
      s: {
        fontSize: {
          base: 's',
          md: 'm',
          lg: 'l',
          '2xl': 'xl'
        },
        lineHeight: {
          base: 's',
          md: 'm',
          lg: 'l',
          '2xl': 'xl'
        }
      }
    },
    spacing: {
      packed: {
        letterSpacing: 'packed'
      },
      narrow: {
        letterSpacing: 'narrow'
      }
    }
  }
})
