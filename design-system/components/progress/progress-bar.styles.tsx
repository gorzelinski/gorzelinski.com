import { cva } from '@/styled-system/css'

export const progressBar = cva({
  base: {
    height: 'token(spacing.2xs)',
    borderRadius: 'xs',
    backgroundColor: 'primary.400'
  }
})
