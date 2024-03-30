import { Language } from 'prism-react-renderer'
import { SystemStyleObject } from '@/styled-system/types'

export type CodeProps = {
  codeString: string
  language: Language
  title?: string
  css?: SystemStyleObject
}

export type PreProps = {
  props: {
    className: string
    children: string
  }
}
