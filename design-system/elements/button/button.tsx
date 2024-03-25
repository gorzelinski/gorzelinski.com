import NextLink from 'next/link'
import { styled } from '@/styled-system/jsx'
import { button } from './button.styles'

export const Button = styled('button', button)
export const ButtonAnchor = styled('a', button)
export const ButtonLink = styled(NextLink, button)
