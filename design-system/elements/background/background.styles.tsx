import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'

export const background = cva({
  base: {
    minWidth: '100%',
    minHeight: '100svh',
    backgroundColor: 'gray.900',
    // Full-bleed sections span 100vw, which is wider than the
    // scrollbar-excluded content width; clip the resulting sub-pixel
    // overflow so no horizontal scrollbar appears. `clip` (unlike
    // `hidden`) does not create a scroll container, so `position: sticky`
    // descendants (e.g. the top bar) keep working.
    overflowX: 'clip',
    transitionProperty: 'background-color',
    ...sharedTransitionProperties
  }
})
