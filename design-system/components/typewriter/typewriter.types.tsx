export type TypewriterProps = {
  words: string[]
  typingInterval?: number
  pausingInterval?: number
  deletingInterval?: number
  loop?: boolean
}

export type Phase = 'typing' | 'pausing' | 'deleting'
