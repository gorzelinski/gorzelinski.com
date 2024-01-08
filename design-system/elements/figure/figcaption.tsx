import { styled } from '@/styled-system/jsx'
import { small } from '../small'

export const Figcaption = styled('figcaption', small, {
  defaultProps: {
    style: 'italic',
    spacing: 'wide'
  }
})
