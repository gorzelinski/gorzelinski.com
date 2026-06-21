const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const importPlugin = require('eslint-plugin-import')
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort')
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
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin
    },
    languageOptions: {
      parser: tseslint.parser
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports (e.g. `import './styles.css'`).
            ['^\\u0000'],
            // 1. External type imports (npm packages + node builtins).
            ['^(node:)?@?\\w.*\\u0000$'],
            // 2. Internal type imports (`@/*` alias and relative).
            ['^@/.*\\u0000$', '^\\..*\\u0000$'],
            // 3. External value imports (npm packages + node builtins).
            ['^(node:)?@?\\w'],
            // 4. Internal value imports (`@/*` alias and relative).
            ['^@/', '^\\.']
          ]
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false
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
      ],
      'import/no-default-export': 'error'
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
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    // Default exports are required by Next.js (App Router special files),
    // tooling config files, and module mocks.
    files: [
      'app/**/{page,layout,not-found,loading,error,global-error,template,default,route,sitemap,robots,manifest,opengraph-image,twitter-image,icon,apple-icon}.{ts,tsx}',
      '**/*.config.{js,cjs,mjs,ts,mts}',
      '**/__mocks__/**'
    ],
    rules: {
      'import/no-default-export': 'off'
    }
  }
]
