import { styled } from '@/styled-system/jsx'
import { Small } from '../../elements'

export const CodeTitle = styled(Small, {
  base: {
    flex: '1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'gray.25'
  }
})
