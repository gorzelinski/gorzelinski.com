import { cva } from '@/styled-system/css'

export const tableWrapper = cva({
  base: {
    maxWidth: '100%',
    overflow: 'auto',
    borderRadius: 's',
    _focusVisible: {
      outline: 'gray.regular',
      outlineOffset: 's'
    }
  }
})
