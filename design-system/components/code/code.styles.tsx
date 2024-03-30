import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { sharedTransitionProperties } from '../../utils'

const pre = cva({
  base: {
    overflow: 'auto',
    position: 'relative',
    display: 'block',
    padding: 'm',
    fontFamily: 'code',
    fontWeight: 'regular',
    fontSize: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    lineHeight: {
      base: '4xs',
      md: '3xs',
      lg: '2xs',
      '2xl': 'xs'
    },
    boxShadow: 'neumorphism.far',
    borderTop: 'gray.subtle',
    borderBottom: 'gray.subtle',
    marginX: '-m',
    sm: {
      marginX: '-l'
    },
    md: {
      border: 'gray.subtle',
      borderRadius: 'm',
      marginX: '0'
    },
    transitionProperty: 'background-color, box-shadow, border-color, color',
    ...sharedTransitionProperties
  }
})

export const Pre = styled('pre', pre)

const code = cva({
  base: {
    display: 'inline-block',
    maxWidth: '100%',
    overflowX: 'auto',
    lineHeight: '2xs'
  }
})

export const Code = styled('code', code)
