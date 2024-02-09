import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const card = cva({
  base: {
    padding: 'm',
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'auto',
    alignContent: 'start',
    justifyItems: 'start',
    gap: 's',
    boxShadow: 'neumorphism.far',
    border: 'gray.subtle',
    borderRadius: 'l',
    overflow: 'hidden',
    transitionProperty: 'border-color, box-shadow',
    ...sharedTransitionProperties,
    '& > img': {
      minWidth: 'calc(100% + (2 * var(--spacing-m)))',
      marginTop: '-m',
      marginX: '-m'
    }
  }
})
