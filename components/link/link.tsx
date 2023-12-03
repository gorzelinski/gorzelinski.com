import { styled } from '@/styled-system/jsx'
import NextLink from 'next/link'
import { anchor } from '../anchor'
import { button } from '../button'

export const Link = styled(NextLink, anchor)

export const ButtonLink = styled(NextLink, button)
