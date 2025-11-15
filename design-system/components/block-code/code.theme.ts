import { token } from '@/styled-system/tokens'
import { ThemeRegistration } from 'shiki'

export const codeTheme: ThemeRegistration = {
  name: 'code-theme',
  settings: [
    // Comments
    {
      scope: ['comment', 'comment.block.documentation'],
      settings: { foreground: token('colors.gray.400'), fontStyle: 'italic' }
    },

    // Constants
    {
      scope: [
        'constant',
        'constant.character',
        'constant.language',
        'constant.other'
      ],
      settings: { foreground: token('colors.primary.300') }
    },
    {
      scope: ['constant.numeric'],
      settings: { foreground: token('colors.success.400') }
    },

    // Entities
    {
      scope: ['entity', 'entity.name', 'entity.name.function', 'entity.other'],
      settings: { foreground: token('colors.danger.400') }
    },
    {
      scope: ['entity.name.section'],
      settings: { foreground: token('colors.warning.400') }
    },
    {
      scope: ['entity.name.tag'],
      settings: { foreground: token('colors.danger.400') }
    },
    {
      scope: [
        'entity.name.type',
        'entity.name.type.class',
        'entity.name.type.interface',
        'entity.name.type.module',
        'support.type',
        'support.class'
      ],
      settings: { foreground: token('colors.success.400') }
    },
    {
      scope: [
        'support.function',
        'support.function.builtin',
        'meta.function-call',
        'entity.name.function.member'
      ],
      settings: { foreground: token('colors.primary.400') }
    },

    // Invalid
    {
      scope: ['invalid', 'invalid.deprecated', 'invalid.illegal'],
      settings: { foreground: token('colors.danger.400') }
    },

    // Keywords
    {
      scope: ['keyword', 'keyword.control', 'keyword.other'],
      settings: { foreground: token('colors.primary.400') }
    },
    {
      scope: [
        'keyword.control.import',
        'keyword.control.from',
        'keyword.control.export'
      ],
      settings: { foreground: token('colors.danger.400') }
    },
    {
      scope: ['keyword.operator'],
      settings: { foreground: token('colors.warning.400') }
    },
    {
      scope: ['keyword.operator.new', 'keyword.operator.expression.typeof'],
      settings: { foreground: token('colors.primary.400') }
    },
    {
      scope: ['keyword.other.unit'],
      settings: { foreground: token('colors.success.400') }
    },

    // Markup
    {
      scope: [
        'markup',
        'markup.bold',
        'markup.heading',
        'markup.italic',
        'markup.list',
        'markup.quote',
        'markup.raw',
        'markup.underline'
      ],
      settings: { foreground: token('colors.warning.400') }
    },
    {
      scope: ['markup.deleted'],
      settings: { foreground: token('colors.danger.400') }
    },
    {
      scope: ['markup.inserted'],
      settings: { foreground: token('colors.success.400') }
    },
    {
      scope: ['markup.changed'],
      settings: { foreground: token('colors.primary.300') }
    },
    {
      scope: ['markup.inline'],
      settings: { foreground: token('colors.primary.400') }
    },

    // Meta
    {
      scope: [
        'meta',
        'meta.class',
        'meta.function',
        'meta.tag',
        'meta.annotation',
        'meta.embedded',
        'meta.import',
        'meta.var.expr'
      ],
      settings: { foreground: token('colors.gray.100') }
    },
    {
      scope: ['meta.brace'],
      settings: { foreground: token('colors.primary.200') }
    },
    {
      scope: ['meta.selector'],
      settings: { foreground: token('colors.primary.400') }
    },

    // Punctuation
    {
      scope: ['punctuation', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: token('colors.primary.200') }
    },
    {
      scope: ['punctuation.definition.comment'],
      settings: { foreground: token('colors.gray.400') }
    },
    {
      scope: ['punctuation.accessor'],
      settings: { foreground: token('colors.gray.100') }
    },
    {
      scope: [
        'punctuation.definition.template-expression',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end'
      ],
      settings: { foreground: token('colors.primary.400') }
    },
    {
      scope: [
        'punctuation.definition.block',
        'punctuation.definition.parameters',
        'punctuation.definition.typeparameters',
        'punctuation.section.block',
        'punctuation.section.embedded'
      ],
      settings: { foreground: token('colors.primary.200') }
    },

    // Storage
    {
      scope: ['storage', 'storage.modifier', 'storage.type'],
      settings: { foreground: token('colors.primary.400') }
    },

    // Strings
    {
      scope: [
        'string',
        'string.interpolated',
        'string.other',
        'punctuation.definition.string',
        'punctuation.definition.string.begin',
        'punctuation.definition.string.end',
        'constant.character',
        'constant.character.escape'
      ],
      settings: { foreground: token('colors.success.400') }
    },
    // String overrides
    {
      scope: ['string.regexp'],
      settings: { foreground: token('colors.warning.400') }
    },
    {
      scope: ['string.escape'],
      settings: { foreground: token('colors.danger.400') }
    },

    // Variables
    {
      scope: [
        'variable',
        'variable.language',
        'variable.other',
        'variable.parameter',
        'variable.readwrite',
        'variable.other.property',
        'variable.other.object.property',
        'meta.object-literal.key',
        'variable.other.constant',
        'variable.other.object',
        'meta.definition.variable',
        'support.variable',
        'entity.name.namespace',
        'variable.function',
        'meta.function-call.generic',
        'entity.name.function.call'
      ],
      settings: { foreground: token('colors.primary.300') }
    },
    {
      scope: ['variable.language.this'],
      settings: { foreground: token('colors.primary.400') }
    }
  ],
  fg: token('colors.primary.200'),
  bg: token('colors.gray.800')
}
