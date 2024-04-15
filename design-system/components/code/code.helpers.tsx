import { Language } from 'prism-react-renderer'
import { CodeProps, PreChildrenProps, Range } from './code.types'

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

export function inRange(range: Range | undefined, line: number) {
  if (!range) return false

  const [start, end] = range

  return line === start || (line >= start && line <= end)
}
