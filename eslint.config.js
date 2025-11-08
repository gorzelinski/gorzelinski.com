const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')

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
