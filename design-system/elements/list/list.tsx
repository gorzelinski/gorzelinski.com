import { styled } from '@/styled-system/jsx'
import { list } from './list.styles'

export const Ul = styled('ul', list, {
  defaultProps: {
    variant: 'disc'
  }
})

export const Ol = styled('ul', list, {
  defaultProps: {
    variant: 'number'
  }
})
