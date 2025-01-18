import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    display: 'inline-block',
    maxWidth: {
      xl: 's',
      '2xl': 'xl'
    },
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  variants: {
    nesting: {
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
