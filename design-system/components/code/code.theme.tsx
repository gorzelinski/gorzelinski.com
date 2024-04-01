import { PrismTheme } from 'prism-react-renderer'
import { token } from '@/styled-system/tokens'

export const codeTheme: PrismTheme = {
  plain: {
    color: token('colors.gray.400'),
    backgroundColor: token('colors.gray.800')
  },
  styles: [
    {
      types: ['punctuation', 'constant', 'deleted'],
      style: {
        color: token('colors.primary.500')
      }
    },
    {
      types: ['variable', 'keyword', 'key', 'selector'],
      style: {
        color: token('colors.primary.400')
      }
    },
    {
      types: ['builtin', 'changed', 'namespace', 'class-name'],
      style: {
        color: token('colors.gray.100')
      }
    },
    {
      types: ['property'],
      style: {
        color: token('colors.gray.50')
      }
    },
    {
      types: ['inserted', 'string'],
      style: {
        color: token('colors.success.400')
      }
    },
    {
      types: ['char', 'number', 'hexcode', 'attr-name'],
      style: {
        color: token('colors.primary.200')
      }
    },
    {
      types: ['function', 'tag'],
      style: {
        color: token('colors.danger.400')
      }
    },
    {
      types: ['symbol', 'regex', 'operator'],
      style: {
        color: token('colors.warning.400')
      }
    },
    {
      types: ['comment'],
      style: {
        fontStyle: 'italic'
      }
    }
  ]
}
