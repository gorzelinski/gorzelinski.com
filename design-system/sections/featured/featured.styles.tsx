import { cva } from '@/styled-system/css'
import { verticalRhythm } from '../..//utils'

export const featured = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    ...verticalRhythm.gap.m
  }
})
