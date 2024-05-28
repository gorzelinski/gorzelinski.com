import { cva } from '@/styled-system/css'
import { verticalRhythm } from '../../utils'

export const section = cva({
  base: {
    display: 'grid',
    ...verticalRhythm.gap.m,
    '&>:is(h1, h2, h3, h4, header)': {
      gridColumn: '1 / -1'
    }
  },
  variants: {
    variant: {
      hero: {
        alignContent: 'center',
        marginTop: {
          base: '-2xl',
          md: '0'
        },
        width: {
          base: '100%',
          lg: 'calc(100% / 1.618)'
        },
        _portrait: {
          minHeight: {
            base: 'calc(100svh - token(spacing.3xl))',
            md: 'auto'
          }
        }
      }
    },
    columns: {
      '1': {
        gridTemplateColumns: {
          base: '1fr'
        }
      },
      '2': {
        gridTemplateColumns: {
          base: '1fr',
          md: '1fr 1fr'
        }
      },
      '3': {
        gridTemplateColumns: {
          base: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr 1fr'
        }
      }
    },
    alignItems: {
      start: {
        alignItems: 'start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      }
    },
    textAlign: {
      start: {
        textAlign: 'start'
      },
      center: {
        textAlign: 'center'
      },
      end: {
        textAlign: 'end'
      }
    },
    justifyItems: {
      start: {
        justifyItems: 'start'
      },
      center: {
        justifyItems: 'center'
      },
      end: {
        justifyItems: 'end'
      }
    }
  },
  compoundVariants: [
    {
      alignItems: 'center',
      justifyItems: 'center',
      textAlign: 'center',
      css: {
        marginX: 'auto'
      }
    }
  ]
})
