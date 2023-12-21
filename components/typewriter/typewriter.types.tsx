export type TypewriterProps = {
  words: string[]
  typingInterval?: number
  pauseInterval?: number
  deletingInterval?: number
  loop?: boolean
}

export type Phase = 'typing' | 'pausing' | 'deleting'
