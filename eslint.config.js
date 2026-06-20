const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const tseslint = require('typescript-eslint')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

module.exports = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    ignores: [
      'coverage/**',
      'styled-system/**',
      'node_modules/**',
      '.next/**',
      'public/**',
      'test-results/**',
      'playwright-report/**'
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Avoid enums — use an `as const` map instead.'
        }
      ]
    }
  },
  {
    files: [
      'e2e/**/*.ts',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx'
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react-hooks/exhaustive-deps': 'off'
    }
  }
]
