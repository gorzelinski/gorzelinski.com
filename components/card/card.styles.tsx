import { cva } from '@/styled-system/css'

export const card = cva({
  base: {
    padding: 'm',
    position: 'relative',
    maxWidth: 'xl',
    display: 'grid',
    gridTemplateColumns: 'auto',
    alignContent: 'start',
    justifyItems: 'start',
    gap: 's',
    boxShadow: 'neumorphism.far',
    border: 'gray.subtle',
    borderRadius: 'l',
    overflow: 'hidden',
    '& > .card-image': {
      minWidth: 'calc(100% + (2 * var(--spacing-m)))',
      marginTop: '-m',
      marginX: '-m'
    }
  }
})
