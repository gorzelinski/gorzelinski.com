import { Language } from 'prism-react-renderer'
import { SystemStyleObject } from '@/styled-system/types'
import type { ComponentPropsWithoutRef } from 'react'

export type Range = [number] | [number, number]

export type CodeProps = {
  codeString: string
  language: Language
  title?: string
  highlight?: Range
  css?: SystemStyleObject
}

export type PreElementProps = ComponentPropsWithoutRef<'pre'>

export type CodeElementProps = ComponentPropsWithoutRef<'code'>
