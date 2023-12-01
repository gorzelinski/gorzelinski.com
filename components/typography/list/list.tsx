import { styled } from '@/styled-system/jsx'
import { list } from './list.recipe'

export const Ul = styled('ul', list, {
  defaultProps: {
    style: 'disc'
  }
})

export const Ol = styled('ul', list, {
  defaultProps: {
    style: 'number'
  }
})
