import { styled } from '@/styled-system/jsx'
import { small } from '../../elements'

const Span = styled('span', small)

export const BlockCodeLanguage = styled(Span, {
  base: {
    color: 'gray.25'
  }
})
