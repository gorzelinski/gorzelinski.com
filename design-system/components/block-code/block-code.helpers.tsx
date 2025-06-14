import { Language } from 'prism-react-renderer'
import { BlockCodeProps, PreChildrenProps } from './block-code.types'

export function preToCodeProps(preProps: PreChildrenProps): BlockCodeProps {
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
