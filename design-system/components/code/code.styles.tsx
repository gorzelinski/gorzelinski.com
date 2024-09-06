import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { sharedTransitionProperties } from '../../utils'

const pre = cva({
  base: {
    position: 'relative',
    display: 'block',
    marginX: '-m',
    padding: 'm',
    borderTop: 'gray.subtle',
    borderBottom: 'gray.subtle',
    boxShadow: 'neumorphism.far',
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
    transitionProperty: 'background-color, box-shadow, border-color, color',
    ...sharedTransitionProperties,
    overflow: 'auto',
    sm: {
      marginX: '-l'
    },
    md: {
      marginX: '0',
      border: 'gray.subtle',
      borderRadius: 'm'
    }
  }
})

export const Pre = styled('pre', pre)

const code = cva({
  base: {
    display: 'inline-block',
    width: '100%',
    lineHeight: '2xs',
    overflowX: 'auto'
  }
})

export const Code = styled('code', code)
