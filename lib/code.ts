import type { Language } from 'prism-react-renderer'
import type { PreChildrenProps } from '@/types'

export function preToCodeProps(preProps: PreChildrenProps) {
  const language = preProps.props.className.replace('language-', '') as Language
  const codeString = preProps.props.children.trim()

  return {
    language,
    codeString
  }
}
