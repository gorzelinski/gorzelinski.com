import { cva } from '@/styled-system/css'
import { verticalRhythm, sharedTransitionProperties } from '../../utils'

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
        width: {
          base: '100%',
          lg: 'calc(100% / 1.618)'
        },
        marginTop: {
          base: '-2xl',
          md: '0'
        },
        _portrait: {
          minHeight: {
            base: 'calc(100svh - token(spacing.3xl))',
            md: 'auto'
          }
        }
      },
      bleed: {
        marginX: {
          base: 'calc(-50vw + 100% / 2)',
          xl: 'calc((-50vw + 100% / 2) + token(sizes.scrollbar.width) / 2)'
        },
        paddingX: 'm',
        ...verticalRhythm.paddingY.m,
        borderTop: 'gray.subtle',
        borderBottom: 'gray.subtle',
        backgroundColor: 'gray.800',
        ...sharedTransitionProperties,
        transitionProperty: 'background-color, border-color',
        '& > *': {
          maxWidth: 'breakpoint-xl'
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
  }
})
