import { styled } from '@/styled-system/jsx'
import { small } from '../../elements'

const Strong = styled('strong', small)

export const CalloutTitle = styled(Strong, {
  base: {
    width: '100%',
    color: 'gray.25',
    marginBottom: {
      base: 's',
      md: 'm'
    }
  },
  defaultVariants: {
    size: 'm'
  }
})
