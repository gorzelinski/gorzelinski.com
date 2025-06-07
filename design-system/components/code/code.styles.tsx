import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const code = cva({
  base: {
    display: 'inline-block',
    minWidth: '100%',
    width: 'max-content',
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
