'use client'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks'
import { typewriter } from './typewriter.styles'
import { TypewriterProps, Phase } from './typewriter.types'

export const Typewriter = ({
  words,
  typingInterval = 100,
  pausingInterval = 500,
  deletingInterval = 100,
  loop = false
}: TypewriterProps) => {
  const [phase, setPhase] = useState<Phase>('typing')
  const [typedString, setTypedString] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const hasReducedMotion = useReducedMotion()

  useEffect(() => {
    if (hasReducedMotion) {
      return
    }

    switch (phase) {
      case 'typing': {
        const nextTypedString = words[selectedIndex].slice(
          0,
          typedString.length + 1
        )

        if (nextTypedString === typedString) {
          setPhase('pausing')
          break
        }

        const timeout = setTimeout(() => {
          setTypedString(nextTypedString)
        }, typingInterval)

        return () => clearTimeout(timeout)
      }

      case 'deleting': {
        const nextRemainingWord = words[selectedIndex].slice(
          0,
          typedString.length - 1
        )

        if (!typedString) {
          const nextIndex = selectedIndex + 1
          setSelectedIndex(words[nextIndex] ? nextIndex : 0)
          setPhase('typing')
          break
        }

        const timeout = setTimeout(() => {
          setTypedString(nextRemainingWord)
        }, deletingInterval)

        return () => clearTimeout(timeout)
      }

      case 'pausing':
        if (loop === false && selectedIndex === words.length - 1) break
      //falls through in loop mode

      default: {
        const timeout = setTimeout(() => {
          setPhase('deleting')
        }, pausingInterval)

        return () => clearTimeout(timeout)
      }
    }
  }, [
    words,
    typedString,
    selectedIndex,
    phase,
    loop,
    pausingInterval,
    typingInterval,
    deletingInterval,
    hasReducedMotion
  ])

  return (
    <span className={typewriter()} aria-hidden="true">
      {hasReducedMotion ? words.at(-1) : typedString}
    </span>
  )
}
