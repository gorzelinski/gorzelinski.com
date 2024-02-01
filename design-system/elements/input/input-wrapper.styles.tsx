import { cva } from '@/styled-system/css'

export const inputWrapper = cva({
  base: {
    position: 'relative',
    fontSize: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    },
    lineHeight: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      xl: 's',
      '2xl': 'm'
    },
    '& > input': {
      width: '100%',
      paddingLeft: 'calc(2 * var(--spacing-s) + 1em)'
    },
    '& > .icon': {
      position: 'absolute',
      top: 's',
      left: 's',
      color: 'gray.700'
    }
  }
})
