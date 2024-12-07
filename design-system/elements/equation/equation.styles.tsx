import { cva } from '@/styled-system/css'
import { sharedTransitionProperties } from '../../utils'
import 'katex/dist/katex.min.css'

export const equation = cva({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginX: '-m',
    padding: 'm',
    borderTop: 'gray.subtle',
    borderBottom: 'gray.subtle',
    boxShadow: 'neumorphism.far',
    color: 'gray.200',
    fontSize: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      '2xl': 'm'
    },
    lineHeight: {
      base: '2xs',
      md: 'xs',
      lg: 's',
      '2xl': 'm'
    },
    textAlign: 'center',
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
    },
    '& .katex': {
      paddingBottom: {
        base: 's',
        md: 'm'
      },
      width: '100%',
      overflowX: 'auto',
      overflowY: 'hidden'
    }
  }
})
