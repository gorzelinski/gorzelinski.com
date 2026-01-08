import { styled } from '@/styled-system/jsx'
import { small } from '../../elements'

const Strong = styled('strong', small)

export const BlockCodeTitle = styled(Strong, {
  base: {
    flex: '1',
    color: 'gray.25'
  }
})
