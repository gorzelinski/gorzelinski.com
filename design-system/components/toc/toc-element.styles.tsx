import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    maxWidth: {
      xl: 'calc(token(sizes.m) - token(spacing.m))',
      '2xl': 'l'
    },
    marginRight: 'xs'
  },
  variants: {
    nest: {
      h2: {
        marginLeft: '0'
      },
      h3: {
        marginLeft: 'm'
      },
      h4: {
        marginLeft: 'xl'
      }
    }
  }
})
