import { cva } from '@/styled-system/css'

export const tocElement = cva({
  base: {
    maxWidth: {
      xl: 's',
      '2xl': 'm'
    },
    marginRight: 'xs',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
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
