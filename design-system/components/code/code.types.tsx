import { Language } from 'prism-react-renderer'
import { SystemStyleObject } from '@/styled-system/types'

export type Range = [number, number]

export type CodeProps = {
  codeString: string
  language: Language
  title?: string
  highlight?: Range
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
  highlight?: Range
}
