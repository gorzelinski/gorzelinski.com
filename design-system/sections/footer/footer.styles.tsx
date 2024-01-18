import { cva } from '@/styled-system/css'

export const footer = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'l',
    borderTop: 'gray.subtle',
    paddingX: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingTop: {
      base: 'm',
      sm: 'l',
      md: 'xl'
    },
    paddingBottom: {
      base: 'calc(var(--spacing-2xl) + var(--spacing-m))',
      md: 'xl'
    }
  }
})
