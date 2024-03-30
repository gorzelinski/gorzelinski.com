import { Language } from 'prism-react-renderer'
import { CodeProps, PreProps } from './code.types'

export function isTerminal(language: Language) {
  return language === 'bash' || language === 'shell'
}

export function preToCodeProps(preProps: PreProps): CodeProps {
  const language = preProps.props.className.replace('language-', '')
  const codeString = preProps.props.children.trim()

  return {
    language,
    codeString
  }
}
