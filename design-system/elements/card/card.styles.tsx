import { cva } from '@/styled-system/css'
import { sharedTransitionProperties, verticalRhythm } from '../../utils'

export const card = cva({
  base: {
    '--card-padding': {
      base: 'spacing.m',
      sm: 'spacing.l'
    },
    position: 'relative',
    display: 'grid',
    border: 'gray.subtle',
    borderRadius: 'l',
    overflow: 'hidden',
    padding: 'var(--card-padding)',
    transitionProperty: 'border-color, box-shadow',
    ...verticalRhythm.gap.s,
    ...sharedTransitionProperties
  },
  variants: {
    orientation: {
      vertical: {
        gridAutoFlow: 'row',
        gridTemplateColumns: 'auto',
        alignContent: 'start',
        justifyItems: 'start',
        '& > img': {
          minWidth: 'calc(100% + (2 * var(--card-padding)))',
          marginTop: 'calc(-1 * var(--card-padding))',
          marginX: 'calc(-1 * var(--card-padding))'
        }
      },
      horizontal: {
        justifyItems: 'start',
        base: {
          gridAutoFlow: 'row',
          gridTemplateColumns: '1fr'
        },
        sm: {
          gridAutoFlow: 'column',
          gridTemplateColumns: '1fr 2fr'
        },
        '& > img': {
          gridColumn: '1',
          alignSelf: 'stretch',
          aspectRatio: 'auto',
          base: {
            gridRow: 'auto',
            minWidth: 'calc(100% + (2 * token(spacing.m)))',
            marginTop: '-m',
            marginX: '-m'
          },
          sm: {
            gridRow: '1 / 5',
            minWidth: `calc(100% + token(spacing.l))`,
            marginY: '-l',
            marginLeft: '-l'
          }
        },
        '& > *': {
          gridColumn: {
            base: 'auto',
            sm: '2'
          }
        }
      }
    },
    justifyContent: {
      start: {
        justifyContent: 'start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'end'
      }
    },
    shadow: {
      far: {
        boxShadow: 'neumorphism.far'
      },
      farther: {
        boxShadow: 'neumorphism.farther'
      }
    }
  },
  defaultVariants: {
    orientation: 'vertical',
    justifyContent: 'start',
    shadow: 'far'
  }
})
