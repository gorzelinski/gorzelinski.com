import { styled } from '@/styled-system/jsx'
import { Small } from '../../elements'

export const CalloutTitle = styled(Small, {
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
