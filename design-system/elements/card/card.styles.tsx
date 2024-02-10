import { cva } from '@/styled-system/css'
import { sharedTransitionProperties, verticalRhythm } from '../../utils'

export const card = cva({
  base: {
    padding: 'm',
    position: 'relative',
    display: 'grid',
    boxShadow: 'neumorphism.far',
    border: 'gray.subtle',
    borderRadius: 'l',
    overflow: 'hidden',
    transitionProperty: 'border-color, box-shadow',
    ...verticalRhythm,
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
          minWidth: 'calc(100% + (2 * var(--spacing-m)))',
          marginTop: '-m',
          marginX: '-m'
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
            minWidth: 'calc(100% + (2 * var(--spacing-m)))',
            marginTop: '-m',
            marginX: '-m'
          },
          sm: {
            gridRow: '1 / 4',
            minWidth: 'calc(100% + var(--spacing-m))',
            marginY: '-m',
            marginLeft: '-m'
          }
        },
        '& > *': {
          gridColumn: {
            base: 'auto',
            sm: '2'
          }
        }
      }
    }
  },
  defaultVariants: {
    orientation: 'vertical'
  }
})
