import { Language } from 'prism-react-renderer'
import { CodeProps, PreChildrenProps } from './code.types'

export function preToCodeProps(preProps: PreChildrenProps): CodeProps {
  const language = preProps.props.className.replace('language-', '')
  const codeString = preProps.props.children.trim()

  return {
    language,
    codeString
  }
}

export function isTerminal(language: Language) {
  return language === 'bash' || language === 'shell'
}
