import { token } from '@/styled-system/tokens'

export const codeTheme = {
  name: 'code-theme',
  settings: [
    {
      scope: ['punctuation', 'constant', 'deleted'],
      settings: { foreground: token('colors.primary.300') }
    },
    {
      scope: ['variable', 'keyword', 'key', 'selector'],
      settings: { foreground: token('colors.primary.400') }
    },
    {
      scope: ['builtin', 'changed', 'namespace', 'class-name'],
      settings: { foreground: token('colors.gray.100') }
    },
    { scope: ['property'], settings: { foreground: token('colors.gray.50') } },
    {
      scope: ['inserted', 'string'],
      settings: { foreground: token('colors.success.400') }
    },
    {
      scope: ['char', 'number', 'hexcode', 'attr-name'],
      settings: { foreground: token('colors.primary.200') }
    },
    {
      scope: ['function', 'tag'],
      settings: { foreground: token('colors.danger.400') }
    },
    {
      scope: ['symbol', 'regex', 'operator'],
      settings: { foreground: token('colors.warning.400') }
    },
    {
      scope: ['comment'],
      settings: { fontStyle: 'italic', foreground: token('colors.gray.400') }
    }
  ],
  fg: token('colors.gray.400'),
  bg: token('colors.gray.800')
}
