import { styled } from '@/styled-system/jsx'
import { heading } from './heading.recipe'

export const H1 = styled('h1', heading, {
  defaultProps: { size: 'xl', spacing: 'packed' }
})

export const H2 = styled('h2', heading, {
  defaultProps: { size: 'l', spacing: 'packed' }
})

export const H3 = styled('h3', heading, {
  defaultProps: { size: 'm', spacing: 'narrow' }
})

export const H4 = styled('h4', heading, {
  defaultProps: { size: 's', spacing: 'narrow' }
})
