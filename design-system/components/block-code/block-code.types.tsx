import type { ComponentPropsWithoutRef } from 'react'
import type { Language } from 'prism-react-renderer'
import type { SystemStyleObject } from '@/styled-system/types'

export type BlockCodeProps = {
  codeString: string
  language: Language
  title?: string
  highlight?: string | undefined
  css?: SystemStyleObject
}

export type PreElementProps = ComponentPropsWithoutRef<'pre'>

export type CodeElementProps = ComponentPropsWithoutRef<'code'>
