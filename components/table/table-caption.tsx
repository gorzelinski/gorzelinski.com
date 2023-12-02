import { styled } from '@/styled-system/jsx'
import { small } from '../small'

export const Caption = styled('caption', small, {
  defaultProps: {
    style: 'italic',
    spacing: 'wide',
    side: 'bottom'
  }
})
