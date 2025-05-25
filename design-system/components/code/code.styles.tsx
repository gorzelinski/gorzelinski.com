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
    paddingY: {
      base: 's',
      md: 'm'
    },
    lineHeight: '2xs',
    overflowX: 'auto',
    '&:not(.terminal)': {
      counterReset: 'line',
      '& .line': {
        display: 'inline-block',
        minWidth: '100%',
        counterIncrement: 'line',
        '&:before': {
          content: 'counter(line)',
          display: 'inline-block',
          minWidth: '2ch',
          marginRight: {
            base: 's',
            md: 'm'
          },
          color: 'gray.500',
          textAlign: 'left',
          fontVariantNumeric: 'tabular-nums',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          verticalAlign: 'top'
        },
        '& span': {
          display: 'inline',
          lineHeight: 'inherit'
        }
      }
    },
    '& .line.highlighted': {
      backgroundColor: 'primary.900',
      '&:before': {
        color: 'primary.400'
      }
    }
  }
})

export const Code = styled('code', code)
