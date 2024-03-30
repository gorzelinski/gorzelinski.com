import { Language } from 'prism-react-renderer'
import { SystemStyleObject } from '@/styled-system/types'

export type CodeProps = {
  codeString: string
  metaString: string
  language: Language
  css?: SystemStyleObject
}

export type PreProps = {
  props: {
    className: string
    children: string
    metastring: string
  }
}
