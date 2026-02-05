import type { Language } from 'prism-react-renderer'

export function isTerminal(language: Language) {
  return language === 'bash' || language === 'shell'
}
