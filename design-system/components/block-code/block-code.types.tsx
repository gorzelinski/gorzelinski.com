import { Language } from 'prism-react-renderer'
import { SystemStyleObject } from '@/styled-system/types'
import type { ComponentPropsWithoutRef } from 'react'

export type BlockCodeProps = {
  codeString: string
  language: Language
  title?: string
  highlight?: string | undefined
  css?: SystemStyleObject
}

export type PreChildrenProps = {
  props: {
    className: string
    children: string
  }
}

export type PreProps = {
  children?: React.ReactNode
  title?: string
  highlight?: string | undefined
}

export type PreElementProps = ComponentPropsWithoutRef<'pre'>

export type CodeElementProps = ComponentPropsWithoutRef<'code'>
